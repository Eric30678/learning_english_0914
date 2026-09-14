#!/usr/bin/env python3
"""
把 Cubic 11 子集化並內嵌進 HTML，做出真正的單一檔案。

用法
────────────────────────────────────────────────
1. 裝套件（只要做一次）
     pip install fonttools brotli

2. 下載字型
     https://github.com/ACh-K/Cubic-11
     取 fonts/ttf/Cubic_11.ttf，放在這支腳本旁邊

3. 執行
     python embed_font.py pixel-english-prototype.html

   產生 pixel-english-prototype.embedded.html
   字型已經包在裡面，離線也能正常顯示。

原理
────────────────────────────────────────────────
掃過 HTML 裡出現的每一個字元，只保留那些字形，
轉成 woff2 後以 base64 寫進 @font-face。
完整版約 2MB，子集化後通常只剩 30–80KB。

之後你新增關卡、內容變多了，重跑一次就好。
"""

import base64
import io
import re
import sys
from pathlib import Path

FONT_SRC = Path("Cubic_11.ttf")

# 內容之外一定要保留的字元：標點、數字、英文、介面用符號
ALWAYS_KEEP = (
    "0123456789"
    "abcdefghijklmnopqrstuvwxyz"
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    " .,:;!?'\"()[]{}<>/\\-_=+*&%$#@~`|^"
    "，。、；：！？「」『』（）〈〉《》——…　"
    "▼▶●○★☆←→↑↓"
)


def collect_chars(html: str) -> set:
    """取出 HTML 中所有會被顯示的字元。

    標籤、屬性、CSS 一併掃進去無妨——多留幾個 ASCII 字形，
    體積影響可以忽略，但可以避免漏字。
    """
    text = html
    # 把 SVG 的座標數字之類的雜訊去掉，減少不必要的掃描
    text = re.sub(r"<svg[\s\S]*?</svg>", "", text)
    return set(text) | set(ALWAYS_KEEP)


def subset(font_path: Path, chars: set) -> bytes:
    from fontTools import subset as fs
    from fontTools.ttLib import TTFont

    font = TTFont(str(font_path))
    options = fs.Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    options.notdef_outline = True
    options.desubroutinize = True
    options.drop_tables = []          # 點陣字的表別亂砍
    options.recalc_bounds = True

    subsetter = fs.Subsetter(options=options)
    subsetter.populate(text="".join(sorted(chars)))
    subsetter.subset(font)

    buf = io.BytesIO()
    font.flavor = "woff2"
    font.save(buf)
    return buf.getvalue()


def inject(html: str, b64: str) -> str:
    """把原本的 @font-face 換成內嵌版本。"""
    block = (
        "@font-face{\n"
        "  font-family:'Cubic11';\n"
        f"  src:url(data:font/woff2;base64,{b64}) format('woff2');\n"
        "  font-display:block;\n"
        "}"
    )
    pattern = re.compile(r"@font-face\s*\{[^}]*?font-family:\s*'Cubic11'[^}]*?\}", re.S)
    if pattern.search(html):
        return pattern.sub(block, html, count=1)

    # 找不到原本的宣告就插在 <style> 開頭
    return html.replace("<style>", "<style>\n" + block, 1)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    html_path = Path(sys.argv[1])
    if not html_path.exists():
        sys.exit(f"找不到 {html_path}")
    if not FONT_SRC.exists():
        sys.exit(f"找不到 {FONT_SRC}，請先從 GitHub 下載 Cubic_11.ttf 放到這支腳本旁邊")

    html = html_path.read_text(encoding="utf-8")
    chars = collect_chars(html)
    print(f"用到的字元：{len(chars)} 個")

    data = subset(FONT_SRC, chars)
    print(f"子集化後：{len(data)/1024:.1f} KB（原始 {FONT_SRC.stat().st_size/1024/1024:.2f} MB）")

    b64 = base64.b64encode(data).decode("ascii")
    out = inject(html, b64)

    out_path = html_path.with_suffix(".embedded.html")
    out_path.write_text(out, encoding="utf-8")
    print(f"完成：{out_path}（{len(out)/1024:.1f} KB）")


if __name__ == "__main__":
    main()
