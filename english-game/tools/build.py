#!/usr/bin/env python3
"""
把 <script src="..."> 內嵌進 HTML，產出可以單獨開啟的單一檔案。

用法
────────────────────────────────────────────
    python build.py

產出
    dist/game.html    關卡模式（65 集）
    dist/read.html    閱讀模式（11 章）

為什麼需要這支腳本
────────────────────────────────────────────
開發時內容拆成 content.js / chapters.js 等檔案比較好維護，
但用 file:// 直接開、或把單一檔案丟給別人時，
瀏覽器不一定抓得到旁邊的 js。內嵌之後就沒有這個問題。

要發布到網站的話不需要打包，照原本的多檔結構上傳即可。
字型子集化請另外跑 embed_font.py。
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent / "src"
DIST = Path(__file__).parent.parent / "dist"

TARGETS = [
    ("index.html", "game.html"),
    ("read.html", "read.html"),
    ("listen.html", "listen.html"),
    ("cards.html", "cards.html"),
    ("memory.html", "memory.html"),
]

SRC_RE = re.compile(r'[ \t]*<script src="([^"]+)"></script>\n?')


def inline(html_path: Path) -> str:
    html = html_path.read_text(encoding="utf-8")
    missing = []

    def repl(m):
        name = m.group(1)
        f = ROOT / name
        if not f.exists():
            missing.append(name)
            return m.group(0)
        code = f.read_text(encoding="utf-8")
        # 避免內容裡剛好出現 </script> 把標籤提前關掉
        code = code.replace("</script>", "<\\/script>")
        return f"<script>\n/* ───── {name} ───── */\n{code}\n</script>\n"

    out = SRC_RE.sub(repl, html)
    if missing:
        print(f"  找不到：{', '.join(missing)}")
    return out


def main():
    DIST.mkdir(exist_ok=True)
    # 注意：dist/index.html 是手寫的首頁，不從 src 產生，這支腳本不會動它。
    for src, dst in TARGETS:
        p = ROOT / src
        if not p.exists():
            print(f"跳過 {src}（不存在）")
            continue
        out = inline(p)
        target = DIST / dst
        target.write_text(out, encoding="utf-8")
        print(f"{src} → dist/{dst}　{len(out)/1024:.0f} KB")

    print("\n完成。dist/ 裡的檔案可以單獨開啟或直接傳給別人。")


if __name__ == "__main__":
    main()
