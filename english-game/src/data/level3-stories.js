/* Level 3 原創連續故事；保留前四章原有單字和紀錄。 */
const LEVEL3_STORIES = [
  {
    "id": "lv3-01",
    "title": "The Wrong Address",
    "zh": "錯誤的地址",
    "scene": "office",
    "blurb": "Mia 第一天下班前發現公告出錯。問題真的是她造成的嗎？",
    "words": [
      "assistant",
      "advertisement",
      "budget",
      "attract",
      "announcement",
      "client",
      "complaint",
      "anxious",
      "apologize",
      "confirm",
      "communicate",
      "capable"
    ],
    "pages": [
      {
        "en": "Mia had just started her new job as an assistant. Her company was preparing an event for local businesses. The budget was small, but her manager wanted an advertisement that could attract new clients.\n\nMia worked until six and finished the announcement. Before leaving, she checked the event address twice.",
        "zh": "Mia 剛開始擔任助理。公司正為在地企業準備一場活動。預算不多，但主管希望用一份廣告吸引新客戶。\n\nMia 忙到六點才完成公告。下班前，她還把活動地址確認了兩次。"
      },
      {
        "en": "The next morning, a client sent a complaint. “I went to the address in your announcement to register,” he wrote. “There was no office there.”\n\nMia opened the file again. The address was wrong. She felt anxious because she was sure she had entered the correct one the night before.",
        "zh": "隔天早上，一位客戶寄來投訴：「我照公告上的地址去報名，但那裡根本沒有辦公室。」\n\nMia 重新打開檔案，地址真的錯了。她很焦慮，因為她很確定自己前一晚輸入的是正確地址。"
      },
      {
        "en": "She called the client to apologize, then asked her manager to confirm the correct location. She communicated the change to everyone who had registered.\n\n“You handled the complaint well,” her manager said. “You are capable of more than you think.”\n\nMia smiled, but she kept looking at the file. Its last change was recorded at 11:43 p.m. She had left the office hours earlier.",
        "zh": "她打電話向客戶道歉，接著請主管確認正確地點，再把修改資訊通知所有報名的人。\n\n主管說：「你處理客訴處理得很好。你的能力比自己想的還多。」\n\nMia 笑了，卻一直盯著檔案。最後修改時間是晚上 11:43。那時她早已離開辦公室。"
      }
    ],
    "quiz": [
      {
        "q": "Why did the company need an advertisement?",
        "opts": [
          "To attract new clients",
          "To hire a new manager",
          "To cancel the event",
          "To change the budget"
        ],
        "a": 0,
        "why": "The manager wanted an advertisement that could attract new clients."
      },
      {
        "q": "客戶為什麼寄來 complaint？",
        "opts": [
          "他沒有收到收據",
          "他去了公告地址，卻找不到報名處",
          "他不喜歡廣告顏色",
          "Mia 沒有回電話"
        ],
        "a": 1,
        "why": "There was no office there. 問題是公告上的報名地址。"
      },
      {
        "q": "What did Mia do after reading the complaint?",
        "opts": [
          "She hid the file.",
          "She left the office.",
          "She apologized and communicated the change.",
          "She asked the client to pay again."
        ],
        "a": 2,
        "why": "Mia 先 apologize，接著 confirm 地址，再 communicate the change。"
      },
      {
        "q": "故事最後的時間紀錄暗示什麼？",
        "opts": [
          "活動已經結束",
          "有人在 Mia 離開後更動了檔案",
          "主管把預算提高",
          "客戶在晚上 11:43 抵達"
        ],
        "a": 1,
        "why": "檔案晚上 11:43 被修改，但 Mia 早已離開。這是推論，不是故事明說誰修改。"
      },
      {
        "q": "capable 在主管那句話中最接近哪個意思？",
        "opts": [
          "焦慮的",
          "有能力的",
          "昂貴的",
          "遲到的"
        ],
        "a": 1,
        "why": "be capable of = 有能力做某件事。"
      }
    ]
  },
  {
    "id": "lv3-02",
    "title": "The Two Copies",
    "zh": "兩份公告",
    "scene": "paper",
    "blurb": "兩張看似相同的紙，留下不同的地址與時間。",
    "words": [
      "accurate",
      "receipt",
      "original",
      "replace",
      "label",
      "request",
      "reliable",
      "response",
      "information",
      "previous",
      "familiar",
      "postpone"
    ],
    "pages": [
      {
        "en": "Mia printed the original announcement and placed it beside the new one. The old address was accurate. Someone had replaced it with another address during the night.\n\nAt lunch, the same client arrived with a receipt from the event registration. “I just want reliable information,” he said. “I do not want to waste another morning.”",
        "zh": "Mia 印出原始公告，和新版放在一起。舊地址是正確的；有人在夜間把它換成了另一個地址。\n\n午餐時間，同一位客戶帶著活動報名收據來了。他說：「我只想要可靠的資訊，不想再浪費一個早上。」"
      },
      {
        "en": "Mia checked the receipt. It had the correct address, but the label on the envelope showed the wrong one. She made a request for the previous version of the file.\n\nThe response came quickly: “The earlier copy is no longer available.” Mia read the message twice. She was familiar with the company's system. Files did not usually disappear that way.",
        "zh": "Mia 查看收據：收據上的地址正確，但信封標籤卻是錯的。她提出請求，希望取得檔案的前一版。\n\n系統很快回覆：「較早的副本已無法取得。」Mia 看了兩次。她熟悉公司的系統，檔案通常不會這樣消失。"
      },
      {
        "en": "Her manager wanted to postpone the event until they could find out what had happened. Mia agreed, but one detail bothered her.\n\nOn the back of the receipt, somebody had written a short message: “Ask who changed the announcement.”\n\nThe client looked at the note and said, “That was already there when I received it.”",
        "zh": "主管想先延期活動，等查清楚發生什麼事。Mia 同意了，但有個細節讓她在意。\n\n收據背面有人寫了一小句：「去問是誰改了公告。」\n\n客戶看著字條說：「我收到的時候，這句話就已經在上面了。」"
      }
    ],
    "quiz": [
      {
        "q": "Which item showed the correct address?",
        "opts": [
          "The envelope label",
          "The new announcement",
          "The receipt",
          "The response message"
        ],
        "a": 2,
        "why": "It had the correct address 指前一句的 receipt。"
      },
      {
        "q": "Mia 為什麼覺得系統回覆很奇怪？",
        "opts": [
          "她不喜歡主管",
          "她知道檔案通常不會這樣消失",
          "客戶沒有帶收據",
          "地址太遠"
        ],
        "a": 1,
        "why": "She was familiar with the company's system. Files did not usually disappear that way."
      },
      {
        "q": "What did the manager want to do?",
        "opts": [
          "Postpone the event",
          "Increase the budget",
          "Hire another assistant",
          "Replace the client"
        ],
        "a": 0,
        "why": "wanted to postpone the event = 想延期活動。"
      },
      {
        "q": "reliable information 在這裡是什麼意思？",
        "opts": [
          "漂亮的廣告",
          "可信賴的資訊",
          "免費的餐點",
          "神祕的消息"
        ],
        "a": 1,
        "why": "客戶不想再白跑一趟，所以需要 reliable information。"
      },
      {
        "q": "收據背面的字條帶來什麼新的疑問？",
        "opts": [
          "誰參加活動？",
          "誰更改了公告？",
          "誰提高薪水？",
          "誰忘了預算？"
        ],
        "a": 1,
        "why": "Ask who changed the announcement. 沒有指出修改者身分。"
      }
    ]
  },
  {
    "id": "lv3-03",
    "title": "After Office Hours",
    "zh": "下班之後",
    "scene": "night",
    "blurb": "門禁紀錄裡有一個熟悉的名字，但記錄不等於答案。",
    "words": [
      "security",
      "permission",
      "investigate",
      "proof",
      "recognize",
      "hesitate",
      "warn",
      "prevent",
      "risk",
      "reveal",
      "missing",
      "specific"
    ],
    "pages": [
      {
        "en": "The next day, Mia asked the security team for permission to investigate the late-night change. “We can check who entered the office,” the guard said, “but that will not prove who changed the file.”\n\nMia agreed. A name on a list was not proof. She did not want to blame the wrong person.",
        "zh": "隔天，Mia 向保全團隊請求許可，調查深夜的變更。警衛說：「我們能查誰進過辦公室，但這不能證明是誰改了檔案。」\n\nMia 同意。名單上的名字不是證據。她不想怪錯人。"
      },
      {
        "en": "The security report showed that one employee had entered the building at 11:35 p.m. Mia recognized the name. It belonged to Daniel, a staff member she had met on her first day.\n\nShe hesitated before calling him. Would asking a question warn the person responsible, if Daniel really was involved?",
        "zh": "保全報告顯示，有位員工在晚上 11:35 進入大樓。Mia 認出了名字：Daniel，是她第一天就見過的一位員工。\n\n她打電話前猶豫了。如果 Daniel 真的牽涉其中，這個問題會不會反而警告了真正負責的人？"
      },
      {
        "en": "Daniel answered immediately. “I came back for my missing wallet,” he explained. “I saw a light in the meeting room, but I did not go inside.”\n\nMia did not know whether to believe him. She wanted to prevent another mistake, but she also knew the risk of accusing someone without proof.\n\nThen Daniel added one specific detail that could reveal more: “The light was still on when I left.”",
        "zh": "Daniel 立刻接了電話。他解釋：「我回來找不見的錢包。我看到會議室有燈，但我沒有進去。」\n\nMia 不知道該不該相信。她想避免再出錯，也知道沒有證據就指控別人的風險。\n\n接著 Daniel 補充了一個具體而可能揭露更多線索的細節：「我離開時，燈還亮著。」"
      }
    ],
    "quiz": [
      {
        "q": "What could the security report show?",
        "opts": [
          "Who changed the file",
          "Who entered the building",
          "Who wrote the note",
          "Who sent the complaint"
        ],
        "a": 1,
        "why": "門禁可以顯示進入大樓的人，但不直接證明誰修改了檔案。"
      },
      {
        "q": "Why did Mia hesitate before calling Daniel?",
        "opts": [
          "She had no phone.",
          "She did not know his name.",
          "She worried that her question could warn someone.",
          "She wanted to postpone the event."
        ],
        "a": 2,
        "why": "Would asking a question warn the person responsible...? 這是 Mia 的顧慮。"
      },
      {
        "q": "Daniel 說他為什麼回到公司？",
        "opts": [
          "找不見的錢包",
          "領取收據",
          "修改公告",
          "準備廣告"
        ],
        "a": 0,
        "why": "I came back for my missing wallet. 是 Daniel 的說法，還不是已查證事實。"
      },
      {
        "q": "proof 最接近哪個意思？",
        "opts": [
          "許可",
          "風險",
          "證據",
          "警告"
        ],
        "a": 2,
        "why": "without proof = 沒有證據。"
      },
      {
        "q": "哪件事情仍然「沒有」被證實？",
        "opts": [
          "Mia 打電話給 Daniel",
          "有員工深夜進入大樓",
          "公告地址被更改",
          "Daniel 就是修改檔案的人"
        ],
        "a": 3,
        "why": "故事只顯示 Daniel 深夜進出，並沒有證據確定他修改了檔案。"
      }
    ]
  },
  {
    "id": "lv3-04",
    "title": "A Better Plan",
    "zh": "新的安排",
    "scene": "meeting",
    "blurb": "活動能不能照常進行？Mia 必須在有限時間裡做決定。",
    "words": [
      "approve",
      "inform",
      "organize",
      "opportunity",
      "sufficient",
      "process",
      "remain",
      "regret",
      "temporary",
      "afford",
      "achieve",
      "efficient"
    ],
    "pages": [
      {
        "en": "The event was only two days away. Mia's manager asked whether they should cancel it. “We do not have sufficient time to print everything again,” he said. “And we cannot afford another delay. We still do not know who changed the address.”\n\nMia offered a more efficient plan. She would organize a small team, inform every client of the correct location, and place a temporary sign at the wrong address.",
        "zh": "離活動只剩兩天。主管問是否應取消。他說：「我們沒有足夠時間重新印所有東西，也不能再承受一次延誤。我們仍不知道是誰改了地址。」\n\nMia 提出一個更有效率的方案：組織一個小團隊，通知每位客戶正確地點，並在錯誤地址放一個臨時告示。"
      },
      {
        "en": "Her manager took a moment to consider the plan. “I can approve that,” he said. “But the registration process must be accurate. No client should be sent to the wrong building again.”\n\nFor the next two hours, Mia checked names, confirmed addresses, and sent messages. Two clients had questions, but most people were glad to receive the update.",
        "zh": "主管想了一下：「這個方案我可以批准。但報名流程必須準確，不能再把客戶送去錯誤的大樓。」\n\n接下來兩小時，Mia 核對姓名、確認地址並傳送訊息。兩位客戶有疑問，但多數人很高興收到更新。"
      },
      {
        "en": "By evening, only one task remained. Mia had to check the original announcement one last time. She wanted to improve the process so the same mistake would not happen again.\n\n“This could be an opportunity to achieve something better,” her manager told her.\n\nMia did not regret speaking up. But when she opened the file, she noticed something new: the name of the person who had changed it was no longer there.",
        "zh": "傍晚時只剩一項工作：再檢查一次原始公告。Mia 想改善流程，避免同樣的錯誤再次發生。\n\n主管對她說：「這也許是個機會，讓我們把事情做得更好。」\n\nMia 不後悔自己提出意見。但她打開檔案時，發現新的異常：修改者的名字不見了。"
      }
    ],
    "quiz": [
      {
        "q": "What was Mia’s plan?",
        "opts": [
          "Cancel the event immediately",
          "Organize a team, inform clients, and place a sign",
          "Ignore the incorrect address",
          "Ask Daniel to print everything"
        ],
        "a": 1,
        "why": "organize / inform / temporary sign 是方案的三個步驟。"
      },
      {
        "q": "主管為什麼沒有選擇全部重新印製？",
        "opts": [
          "公司沒有電腦",
          "時間不足",
          "所有客戶已經離開",
          "公告沒有錯誤"
        ],
        "a": 1,
        "why": "We do not have sufficient time to print everything again."
      },
      {
        "q": "accurate 在 registration process 的句子裡是什麼意思？",
        "opts": [
          "便宜的",
          "快速的",
          "準確的",
          "暫時的"
        ],
        "a": 2,
        "why": "報名流程需要準確，才能避免客戶再跑錯大樓。"
      },
      {
        "q": "What remained at the end of the day?",
        "opts": [
          "One final check of the original announcement",
          "A new advertisement",
          "A security interview",
          "A budget request"
        ],
        "a": 0,
        "why": "only one task remained ... check the original announcement one last time."
      },
      {
        "q": "故事最後留下哪個問題？",
        "opts": [
          "活動已經取消",
          "Mia 忘了向客戶道歉",
          "修改者的名字為何消失",
          "主管決定離職"
        ],
        "a": 2,
        "why": "the name of the person who had changed it was no longer there。"
      }
    ]
  },
  {
    "title": "The Missing Name",
    "zh": "消失的名字",
    "blurb": "檔案沒有留下名字，卻留下了一個意外的線索。",
    "scene": "night",
    "words": [
      "database",
      "electronic",
      "erase",
      "detect",
      "inspector",
      "responsibility",
      "suspicion",
      "reasonable",
      "suspect",
      "trace",
      "headquarters",
      "editor",
      "lobby"
    ],
    "pages": [
      {
        "en": "Mia showed her manager the empty space where the editor’s name should have been. “Someone may have tried to erase a trace,” she said. The electronic report came from the company database, but it could not explain everything. Her manager reminded her that a suspicion was not a fact.",
        "zh": "Mia 把編輯者名字消失的位置指給主管看。「有人可能想清除痕跡。」她說。電子報告來自公司資料庫，卻無法解釋一切。主管提醒她，懷疑並不等於事實。"
      },
      {
        "en": "An inspector from headquarters arrived that afternoon. He had permission to check the records, but he refused to call Daniel a suspect. “First, we need to detect where the change started. Then we can ask a reasonable question,” he said. Mia realized that investigating a mistake also meant accepting responsibility for her own claims.",
        "zh": "當天下午，總部派來一名稽查員。他有權查看紀錄，卻不願把 Daniel 當成嫌疑人。「先找出修改從何處開始，再提出合理的問題。」他說。Mia 明白，調查錯誤也要對自己的指控負責。"
      },
      {
        "en": "They compared the old report with a second copy. One trace remained: the file had been opened through a shared computer near the lobby. Daniel had never used that computer, but somebody else had. On the screen, Mia saw a familiar employee number. She did not say the name aloud.",
        "zh": "他們把舊報告與另一份副本比較，發現還留著一項痕跡：檔案曾由大廳附近的共用電腦開啟。Daniel 從未使用過那台電腦，但有人用過。螢幕上出現一組 Mia 熟悉的員工編號。她沒有把名字說出口。"
      }
    ],
    "quiz": [
      {
        "q": "Why did the inspector refuse to call Daniel a suspect?",
        "opts": [
          "There was not enough evidence",
          "Daniel had left the country",
          "The event was canceled",
          "The database was broken"
        ],
        "a": 0,
        "why": "正確答案：There was not enough evidence。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Where had the file been opened?",
        "opts": [
          "On a shared computer near the lobby",
          "On Mia’s home computer",
          "Inside a hotel",
          "At the event"
        ],
        "a": 0,
        "why": "正確答案：On a shared computer near the lobby。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Mia recognize at the end?",
        "opts": [
          "An employee number",
          "A telephone number",
          "A customer’s address",
          "A budget"
        ],
        "a": 0,
        "why": "正確答案：An employee number。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-05"
  },
  {
    "title": "The Empty Desk",
    "zh": "空著的座位",
    "blurb": "Mia 想問的人，偏偏今天不在。",
    "scene": "night",
    "words": [
      "vacant",
      "hallway",
      "locate",
      "hire",
      "rumor",
      "gossip",
      "attitude",
      "background",
      "observe",
      "assume",
      "awkward",
      "career",
      "clue",
      "invitation",
      "senior"
    ],
    "pages": [
      {
        "en": "The number belonged to a senior member of the staff named Victor. His desk was vacant. A note said he was absent for the day, but nobody could locate him. As Mia walked down the hallway, she heard a rumor that Victor was about to leave the company. She knew that office gossip could damage a person’s career.",
        "zh": "編號屬於一位資深員工 Victor。他的座位空著；紙條寫著他今天缺席，卻沒有人知道他在哪裡。Mia 走過走廊時聽見傳言，說 Victor 即將離職。她知道辦公室八卦可能毀掉一個人的職涯。"
      },
      {
        "en": "Her manager advised her to be cautious. “You can observe what people do,” he said, “but do not assume you know why they do it.” Mia began to understand the difference between a person’s attitude and a fact about their background. Victor had helped hire her, and that made the discovery especially awkward.",
        "zh": "主管建議她小心。「你可以觀察別人的行為，卻不能假定自己知道他們的動機。」Mia 開始分清一個人的態度與背景事實的差別。Victor 曾協助錄取她，這讓整件事格外尷尬。"
      },
      {
        "en": "At five, Victor finally sent a message: “I have the original file. Meet me tomorrow, but come alone.” Mia read it twice. She wanted an answer, yet she had learned that an invitation could be a clue—or a trap.",
        "zh": "五點時 Victor 終於傳來訊息：「原始檔案在我這裡。明天見面，但一個人來。」Mia 看了兩遍。她想知道答案，卻也明白邀請可能是線索，也可能是陷阱。"
      }
    ],
    "quiz": [
      {
        "q": "Why was Victor’s desk empty?",
        "opts": [
          "He was absent and could not be located",
          "He was meeting clients in the lobby",
          "He had been arrested",
          "He was working from Mia’s desk"
        ],
        "a": 0,
        "why": "正確答案：He was absent and could not be located。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the manager tell Mia not to assume?",
        "opts": [
          "That she knew people’s reasons for acting",
          "That the office had a hallway",
          "That Victor worked there",
          "That the event was soon"
        ],
        "a": 0,
        "why": "正確答案：That she knew people’s reasons for acting。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Victor ask Mia to do?",
        "opts": [
          "Meet him alone the next day",
          "Delete the file",
          "Tell every client",
          "Cancel her meeting"
        ],
        "a": 0,
        "why": "正確答案：Meet him alone the next day。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-06"
  },
  {
    "title": "A Meeting in the Rain",
    "zh": "雨中的會面",
    "blurb": "一場普通的會面，讓事情變得更難判斷。",
    "scene": "night",
    "words": [
      "avenue",
      "downtown",
      "breeze",
      "barely",
      "bitter",
      "brunch",
      "casual",
      "chilly",
      "dim",
      "fancy",
      "flavor",
      "glance",
      "laughter",
      "napkin",
      "tray",
      "wipe"
    ],
    "pages": [
      {
        "en": "Mia made an appointment with Victor at a small café downtown. Rain fell along the avenue, and a cold breeze passed the door. Her coat was damp. She stood under the shelter, nervous about entering. Daniel had warned her not to trust a message without checking its source.",
        "zh": "Mia 和 Victor 約在市中心一間小咖啡店。雨落在大道上，冷風吹過門口。她的外套濕了，站在遮雨處，因為緊張而遲遲不敢進去。Daniel 曾提醒她，別在確認來源前就相信訊息。"
      },
      {
        "en": "Victor arrived with an envelope. “This is private,” he said. Mia hesitated before taking it. Inside was an earlier version of the announcement, showing the correct address. Victor admitted that he had saved a copy after noticing something unusual. But he insisted that he had not changed the public file.\n\nThe café was small and chilly. A waiter carrying a tray offered a fancy brunch, but Mia asked for plain tea. She barely noticed its bitter flavor. In the dim room, a little laughter came from a nearby table. She took a casual glance at the door and used a napkin to wipe the rain from her hands.",
        "zh": "Victor 帶著一個信封抵達。「這是私人的資料。」他說。Mia 猶豫了一下才接過。裡面是公告的舊版，地址正確。Victor 承認自己發現異常後存了一份副本，卻堅持公開檔案不是他改的。\n\n咖啡店很小，裡頭有些冷。一名服務生端著托盤，詢問要不要精緻的早午餐，但 Mia 只點了清茶。她幾乎沒有注意到茶帶著苦味。昏暗的店裡傳來鄰桌輕輕的笑聲。她隨意朝門口看了一眼，再用餐巾擦掉手上的雨水。"
      },
      {
        "en": "“Why didn’t you tell us sooner?” Mia asked. Victor looked toward the wet street. “Because someone asked me to keep quiet.” He did not give her a name. Mia put the paper away. She had one more piece of evidence, but even less certainty about whom to trust.",
        "zh": "「那你為什麼不早說？」Mia 問。Victor 看向濕漉漉的街道。「因為有人要我別說。」他沒有告訴她名字。Mia 收起紙張。證據又多了一份，她卻更不確定能信任誰。"
      }
    ],
    "quiz": [
      {
        "q": "What was inside Victor’s envelope?",
        "opts": [
          "An earlier announcement with the correct address",
          "A restaurant bill",
          "A new employment contract",
          "A train ticket"
        ],
        "a": 0,
        "why": "正確答案：An earlier announcement with the correct address。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why had Victor kept a copy?",
        "opts": [
          "He had noticed something unusual",
          "He wanted to advertise the café",
          "He was moving downtown",
          "He wanted to change the budget"
        ],
        "a": 0,
        "why": "正確答案：He had noticed something unusual。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What information did Victor refuse to provide?",
        "opts": [
          "The name of the person who asked him to stay quiet",
          "The event date",
          "The correct address",
          "Mia’s job title"
        ],
        "a": 0,
        "why": "正確答案：The name of the person who asked him to stay quiet。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-07"
  },
  {
    "title": "The Client Who Knew Too Much",
    "zh": "知道太多的客戶",
    "blurb": "那位客戶似乎知道比他應該知道的更多。",
    "scene": "paper",
    "words": [
      "awful",
      "cafeteria",
      "doubtful",
      "eager",
      "frank",
      "gesture",
      "panic",
      "pause",
      "sigh"
    ],
    "pages": [
      {
        "en": "At work, Mia compared Victor’s paper with the client’s receipt. The two documents used the same unusual mark beside the address. It was a small detail, but it could help identify the source. Mia tried to contact the client. He answered with an unexpected question: “Did Victor give you a copy?”",
        "zh": "回到公司，Mia 將 Victor 的紙張與客戶收據比對。兩份文件在地址旁都印著相同的特殊記號。這個細節很小，卻可能協助辨認來源。Mia 聯絡客戶；對方一接電話就問了個意外的問題：「Victor 給你副本了嗎？」"
      },
      {
        "en": "Mia had not mentioned Victor. “How do you know his name?” she asked. The man said that he had registered online and received a message with Victor’s name on it. He promised to send the exact message. It might indicate who had contacted customers before the public announcement changed.\n\nLater, Mia met the client in a cafeteria. He held his cup but could barely speak. “I felt awful when the page asked for my number,” he said with a sigh. He had been doubtful, yet too eager to finish registering. Mia made a gesture for him to slow down. After a long pause, he gave a frank answer: “I began to panic, so I clicked without thinking.”",
        "zh": "Mia 根本沒有提到 Victor。「你怎麼知道他的名字？」她問。男子說，他在網路報名後收到一則署名 Victor 的訊息。他答應傳來完整訊息。那可能顯示公告更改之前，是誰先聯繫了客戶。\n\n後來，Mia 在自助餐廳與客戶見面。他拿著杯子，卻幾乎說不出話。「頁面跟我要證件號碼時，我覺得很糟。」他嘆氣說。他心裡有疑慮，卻又太急著完成報名。Mia 做了個手勢，示意他慢慢說。停頓許久後，他坦白回答：「我開始慌了，結果沒想清楚就按下去。」"
      },
      {
        "en": "When the message arrived, Mia recognized the company logo, but not the sender’s address. The message had asked the client to register a second time. It had also requested his identity number. Mia suddenly understood: the wrong address might have been only one part of a larger plan.",
        "zh": "訊息送達時，Mia 認得公司標誌，卻不認得寄件地址。訊息要求客戶再次報名，還索取身分證件號碼。Mia 突然明白：錯誤地址也許只是一個更大計畫的一部分。"
      }
    ],
    "quiz": [
      {
        "q": "What did both documents have beside the address?",
        "opts": [
          "The same unusual mark",
          "The same customer signature",
          "A delivery stamp",
          "A price discount"
        ],
        "a": 0,
        "why": "正確答案：The same unusual mark。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why was Mia surprised by the client’s question?",
        "opts": [
          "She had not mentioned Victor",
          "The client was late",
          "She had changed her number",
          "The client spoke another language"
        ],
        "a": 0,
        "why": "正確答案：She had not mentioned Victor。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the suspicious message ask for?",
        "opts": [
          "A second registration and an identity number",
          "A donation to the event",
          "A new meeting place only",
          "A job application"
        ],
        "a": 0,
        "why": "正確答案：A second registration and an identity number。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-08"
  },
  {
    "title": "The Warning Email",
    "zh": "警告郵件",
    "blurb": "Mia 必須在更多人受害前，選擇怎麼告知大家。",
    "scene": "office",
    "words": [
      "fake",
      "harm",
      "innocent",
      "pretend"
    ],
    "pages": [
      {
        "en": "Mia could not prove who sent the message, but she had enough evidence to warn the company. Someone might be using a fake registration page to collect personal information. If customers believed it was official, they could become victims of fraud. The risk was urgent.",
        "zh": "Mia 還無法證明誰寄出了訊息，但她已有足夠證據向公司發出警告。有人可能用假的報名頁面蒐集個人資料。客戶若以為那是官方頁面，就可能成為詐騙受害者。風險十分緊急。"
      },
      {
        "en": "Her manager asked her to prepare a short report and a message for clients. They would explain how to recognize the official website and how to protect private details. The message had to be clear, not frightening. Mia wanted to prevent further harm without accusing an innocent employee.",
        "zh": "主管要她準備簡短報告，以及發給客戶的通知。他們要說明如何辨認官方網站，以及如何保護私人資訊。訊息必須清楚，不能只會嚇人。Mia 想避免更多傷害，也不想誣賴無辜員工。"
      },
      {
        "en": "At noon, the first client called back. “I entered my number yesterday. What should I do?” Mia did not pretend to know everything. She explained the steps the company had confirmed, gave him the official contact information, and promised an update. For the first time, she felt that telling the truth mattered more than appearing confident.",
        "zh": "中午，第一位客戶回電：「我昨天輸入了證件號碼，現在該怎麼辦？」Mia 沒假裝自己什麼都懂，而是解釋公司已確認的處理步驟，提供正式聯絡方式，並承諾更新。她第一次覺得，說實話比看起來很有把握更重要。"
      }
    ],
    "quiz": [
      {
        "q": "Why did Mia’s team contact clients?",
        "opts": [
          "To warn them about a possible fake registration page",
          "To raise ticket prices",
          "To change the event date again",
          "To hire new staff"
        ],
        "a": 0,
        "why": "正確答案：To warn them about a possible fake registration page。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the notice explain?",
        "opts": [
          "How to recognize the official website",
          "How to find Victor’s home",
          "How to advertise a café",
          "How to request a salary"
        ],
        "a": 0,
        "why": "正確答案：How to recognize the official website。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did Mia avoid naming a suspect?",
        "opts": [
          "She did not want to accuse an innocent person",
          "She had already found the sender",
          "Her manager had quit",
          "She no longer cared about the event"
        ],
        "a": 0,
        "why": "正確答案：She did not want to accuse an innocent person。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-09"
  },
  {
    "title": "A Better Kind of Evidence",
    "zh": "更好的證據",
    "blurb": "真正有效的調查不是大聲指控，而是逐步核對。",
    "scene": "paper",
    "words": [
      "survey",
      "connect",
      "conclusion",
      "determine",
      "shortly",
      "similarity"
    ],
    "pages": [
      {
        "en": "The company asked every client who had received the strange message to complete a brief survey. Mia collected the responses and began to compare the dates. A pattern appeared: every message had been sent shortly after someone registered for the event. The similarity was too specific to ignore.",
        "zh": "公司請收到奇怪訊息的客戶填寫簡短問卷。Mia 收集回覆，開始比對日期。一個模式浮現：每封訊息都在客戶報名後不久寄出。這種相似性太具體，不能忽視。"
      },
      {
        "en": "Daniel helped her analyze the data. They could connect the messages to a shared registration system, but there was still a difference between showing access and proving guilt. “A logical conclusion needs evidence,” Daniel said. Mia agreed; they must determine what happened before deciding who was responsible.",
        "zh": "Daniel 幫她分析資料。他們可以把訊息連到共用報名系統，但證明有人能存取，不等於證明那人有罪。「合理的結論需要證據。」Daniel 說。Mia 同意：必須先弄清發生什麼，再判定責任。"
      },
      {
        "en": "An answer finally emerged from the timestamps. The suspicious messages had been sent automatically. Someone had connected an outside service to the company’s system months before Mia arrived. The investigation was no longer only about a changed address. It was about a process nobody had checked carefully enough.",
        "zh": "時間紀錄終於提供了答案：可疑訊息是自動寄出的。早在 Mia 到職幾個月前，就有人將外部服務接到公司系統。這場調查不再只是地址被改，而是一個長期缺乏檢查的流程。"
      }
    ],
    "quiz": [
      {
        "q": "What did the survey reveal?",
        "opts": [
          "Messages appeared soon after registration",
          "Every customer had canceled",
          "All addresses were correct",
          "Victor had moved abroad"
        ],
        "a": 0,
        "why": "正確答案：Messages appeared soon after registration。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the timestamps reveal?",
        "opts": [
          "The messages were sent automatically",
          "Mia had sent every message",
          "The event was free",
          "The receipts were missing"
        ],
        "a": 0,
        "why": "正確答案：The messages were sent automatically。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What distinction did Daniel emphasize?",
        "opts": [
          "Access to a system is not proof of guilt",
          "Every rumor is true",
          "Every error is fraud",
          "A report replaces an interview"
        ],
        "a": 0,
        "why": "正確答案：Access to a system is not proof of guilt。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-10"
  },
  {
    "title": "The Outside Service",
    "zh": "外部服務",
    "blurb": "找到源頭之後，Mia 還得讓所有人了解真正的問題。",
    "scene": "meeting",
    "words": [
      "profit",
      "costly",
      "credit",
      "deposit",
      "discount",
      "monthly",
      "ownership",
      "rate",
      "resource",
      "satisfactory",
      "saving"
    ],
    "pages": [
      {
        "en": "The outside service belonged to a supplier that had worked with the company for years. A contract allowed it to access registration records and send updates. But someone had forgotten to review the settings when the service changed owners. The supplier could now send messages that looked official.",
        "zh": "外部服務屬於一家與公司合作多年的供應商。合約允許它存取報名紀錄並寄送更新，但服務更換所有者時，有人忘記重新檢查設定。如今供應商可以寄出看似官方的訊息。"
      },
      {
        "en": "The manager wanted to cancel the contract immediately. Mia suggested checking which functions still supported the event. “We should protect clients first,” she said, “then decide whether we need to purchase a safer service.” The company might lose some profit, but ignoring the problem could cost far more.\n\nThe old contract showed that ownership had changed twice. The supplier offered a discount for monthly payments, yet charged a high rate for extra messages. The company had paid a deposit and received credit for one unused feature. What looked like a small saving had become a costly mistake. Mia reminded the team that every resource mattered; the explanation they had received was not satisfactory.",
        "zh": "主管想立刻取消合約。Mia 建議先查清哪些功能仍支援活動。「先保護客戶，再決定要不要購買更安全的服務。」她說。公司可能損失一些利潤，但忽視問題的代價可能更高。\n\n舊合約顯示所有權曾更換兩次。供應商提供月繳折扣，卻對額外訊息收取高費率。公司付了訂金，也因一項未使用的功能獲得部分抵扣。看似節省小錢的安排，如今成了代價高昂的錯誤。Mia 提醒團隊，每項資源都很重要；但他們目前收到的解釋仍不令人滿意。"
      },
      {
        "en": "They removed the supplier’s access, sent a careful update, and confirmed that no new suspicious messages were being sent. Then Mia noticed a line in the old contract: Victor had reported the same concern three months earlier. Why had nobody acted?",
        "zh": "他們移除供應商的存取權、寄出謹慎措辭的更新，並確認沒有新的可疑訊息。接著 Mia 注意到舊合約上的一行字：Victor 三個月前就曾提出相同疑慮。為什麼當時沒有人處理？"
      }
    ],
    "quiz": [
      {
        "q": "What had changed about the outside service?",
        "opts": [
          "It had changed owners without a settings review",
          "It had moved to the lobby",
          "It had become a restaurant",
          "It had sold the event tickets"
        ],
        "a": 0,
        "why": "正確答案：It had changed owners without a settings review。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the company remove?",
        "opts": [
          "The supplier’s access to the system",
          "The office furniture",
          "Mia’s email account",
          "The event announcement"
        ],
        "a": 0,
        "why": "正確答案：The supplier’s access to the system。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the old contract show?",
        "opts": [
          "Victor had raised a similar concern earlier",
          "Mia had signed the contract",
          "Daniel owned the supplier",
          "The event had ended"
        ],
        "a": 0,
        "why": "正確答案：Victor had raised a similar concern earlier。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-11"
  },
  {
    "title": "The Decision No One Made",
    "zh": "沒有人做的決定",
    "blurb": "比一個人的錯誤更難處理的，是大家都以為有人會負責。",
    "scene": "meeting",
    "words": [
      "committee",
      "majority",
      "honesty",
      "situation"
    ],
    "pages": [
      {
        "en": "Mia found notes from a committee meeting held three months earlier. Victor had asked for a security review, but the majority had voted to postpone it. Nobody had clearly accepted responsibility. Each manager thought another colleague would handle the problem.",
        "zh": "Mia 找到三個月前的委員會會議紀錄。Victor 曾要求進行安全檢查，但多數人投票決定延期。當時沒有任何人明確承擔責任，每位主管都以為別的同事會處理。"
      },
      {
        "en": "When Mia brought the notes to her manager, he did not refuse to discuss them. “I regret that decision,” he said. “I was worried about the budget and forgot about the clients.” Mia appreciated his honesty, even though it did not erase the harm.",
        "zh": "Mia 把紀錄拿給主管，他沒有拒絕討論。「我後悔那個決定。」他說。「當時太擔心預算，忘了客戶。」Mia 欣賞他的坦白，即使坦白無法消除已造成的傷害。"
      },
      {
        "en": "She finally understood why Victor had kept the old file: he wanted proof that the warning had existed. Yet his silence had also made the situation harder. There was no simple villain, only a series of decisions that had left customers unprotected. Mia opened a new document and wrote: “Who will own the next decision?”",
        "zh": "她終於懂了 Victor 為何保留舊檔：他想留下警告存在過的證據。但他的沉默也讓事情更難處理。這裡沒有簡單的壞人，只有一連串讓客戶失去保護的決定。Mia 開了新文件，寫下：「下一個決定由誰負責？」"
      }
    ],
    "quiz": [
      {
        "q": "Why was the security review postponed?",
        "opts": [
          "A majority voted to delay it",
          "Nobody knew about it",
          "Victor had deleted the notes",
          "The company had closed"
        ],
        "a": 0,
        "why": "正確答案：A majority voted to delay it。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the manager admit?",
        "opts": [
          "He had focused on the budget and neglected clients",
          "He had sent the fake messages",
          "He had never seen Victor",
          "He had canceled the event"
        ],
        "a": 0,
        "why": "正確答案：He had focused on the budget and neglected clients。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did Victor keep the old file?",
        "opts": [
          "To preserve evidence of his earlier warning",
          "To change the address again",
          "To raise his salary",
          "To send a new invitation"
        ],
        "a": 0,
        "why": "正確答案：To preserve evidence of his earlier warning。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-12"
  },
  {
    "title": "Before the Headlines",
    "zh": "上新聞之前",
    "blurb": "如果公司只想解釋自己，客戶還會相信嗎？",
    "scene": "paper",
    "words": [
      "headline",
      "broadcast",
      "audience",
      "announce",
      "truthful",
      "significant",
      "representative"
    ],
    "pages": [
      {
        "en": "On Monday, an editor called the company. The false messages might become the main headline in the local news. A radio station also wanted to broadcast an interview. Mia’s manager worried that a large audience would hear only the complaint, not the steps the team had taken to help clients.",
        "zh": "星期一，一名編輯打電話到公司。假訊息事件可能成為地方新聞的頭條，電台也想播出訪談。主管擔心廣大聽眾只會聽見客訴，卻不知道團隊已採取的補救措施。"
      },
      {
        "en": "“We should announce what we know, not what we hope is true,” Mia said. She offered to help a company representative prepare a truthful response. The investigation had revealed a significant weakness in the system. Hiding it would not make customers safer. They needed clear information about what had happened and what would happen next.",
        "zh": "「我們應該公布已確定的事，而不是自己希望是真的事。」Mia 說。她提出協助公司代表準備誠實回應。調查已揭露系統中的重大弱點，隱瞞也不會讓客戶更安全。他們需要清楚知道發生了什麼，以及接下來會怎樣。"
      },
      {
        "en": "Before the interview, Victor arrived with another document. It showed that the outside service had been given permission to contact clients, but not to request identity numbers. That difference was important. Mia knew the news might be uncomfortable, yet avoiding it would leave the real question unanswered.",
        "zh": "訪談前，Victor 帶來另一份文件。上面顯示外部服務獲准聯繫客戶，卻沒有權限索取身分號碼。這個差別很重要。Mia 知道新聞可能不好聽，但躲避只會讓真正的問題沒有答案。"
      }
    ],
    "quiz": [
      {
        "q": "What did the radio station want?",
        "opts": [
          "To broadcast an interview",
          "To sponsor the event",
          "To hire Mia",
          "To cancel the contract"
        ],
        "a": 0,
        "why": "正確答案：To broadcast an interview。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What kind of response did Mia recommend?",
        "opts": [
          "A truthful statement of confirmed facts",
          "A statement blaming Daniel",
          "No public response",
          "A promise that nothing happened"
        ],
        "a": 0,
        "why": "正確答案：A truthful statement of confirmed facts。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Victor’s new document show?",
        "opts": [
          "The service was not allowed to request identity numbers",
          "The event had moved overseas",
          "The reporter was a client",
          "Mia had been promoted"
        ],
        "a": 0,
        "why": "正確答案：The service was not allowed to request identity numbers。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-13"
  },
  {
    "title": "The Event Goes On",
    "zh": "活動照常舉行",
    "blurb": "調查還沒結束，活動卻已經到了。",
    "scene": "meeting",
    "words": [
      "campus",
      "exhibition",
      "collection",
      "photographer",
      "poster",
      "performance",
      "award",
      "impress",
      "creative"
    ],
    "pages": [
      {
        "en": "The event opened on a college campus. Mia helped organize an exhibition of local projects. A photographer took pictures, and the staff placed a new poster at every entrance. The first audience members arrived slowly, checking the address on their phones. Mia recognized several clients from the earlier complaint.",
        "zh": "活動在一處大學校園開幕。Mia 協助組織當地專案展覽。攝影師拍照，工作人員在每個入口貼上新海報。第一批觀眾慢慢到場，還在手機上確認地址。Mia 認出幾位先前提出客訴的客戶。"
      },
      {
        "en": "One room held a collection of creative designs. Another had a short performance by young artists. The manager hoped the event would impress visitors, but Mia cared more about whether everyone could find the right room. She had learned that a beautiful advertisement was useless if its information could not be trusted.",
        "zh": "一個展間陳列富有創意的設計作品，另一個展間則有年輕藝術家的短演出。主管希望活動讓訪客留下深刻印象，但 Mia 更在意大家能否找到正確的房間。她已學會：資訊若不可靠，再漂亮的廣告也沒用。"
      },
      {
        "en": "At the end, a client handed Mia a small award card for the team. “You made a mistake,” he said, “but you stayed and fixed it.” Mia was about to smile when Victor pointed toward the registration desk. The same strange symbol had appeared on a fresh ticket.",
        "zh": "活動結束時，一位客戶遞給 Mia 一張給團隊的小獎卡。「你們犯了錯，但留下來把它修好了。」他說。Mia 正要微笑，Victor 卻指向報到桌：同樣的奇怪符號出現在一張新票券上。"
      }
    ],
    "quiz": [
      {
        "q": "Where was the event held?",
        "opts": [
          "On a college campus",
          "At the supplier’s office",
          "On a ship",
          "Inside a hotel"
        ],
        "a": 0,
        "why": "正確答案：On a college campus。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Mia care about most?",
        "opts": [
          "Helping visitors find the right rooms",
          "Winning an award",
          "Making the photographer famous",
          "Selling posters"
        ],
        "a": 0,
        "why": "正確答案：Helping visitors find the right rooms。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What surprised Victor at the end?",
        "opts": [
          "A familiar symbol on a fresh ticket",
          "A missing photographer",
          "An empty stage",
          "The manager’s new car"
        ],
        "a": 0,
        "why": "正確答案：A familiar symbol on a fresh ticket。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-14"
  },
  {
    "title": "The Guest on the List",
    "zh": "名單上的來賓",
    "blurb": "一張報名表，牽出另一個城市的人。",
    "scene": "meeting",
    "words": [
      "ambassador",
      "governor",
      "mayor",
      "regional",
      "achievement",
      "honor"
    ],
    "pages": [
      {
        "en": "A special guest was expected at the event: a regional representative who worked with the mayor. He had been invited to honor a local achievement, not to discuss the company’s problems. But his name appeared on the new ticket beside the strange symbol. Mia asked why an official invitation would use the same mark as the false registration message.",
        "zh": "活動預計有一位特別來賓：與市長合作的區域代表。他受邀表揚地方成就，不是來討論公司問題的。然而，新票券上他的名字旁也有那個奇怪符號。Mia 不明白，正式邀請為何會用上與假報名訊息相同的標記。"
      },
      {
        "en": "Victor checked the guest list. A governor’s office and a visiting ambassador had received similar invitations, but their contact information was safe. The suspicious tickets belonged to ordinary citizens who had registered through one particular link. It was another clue that the problem came from the registration system, not from the event itself.",
        "zh": "Victor 檢查來賓名單。州長辦公室與一位來訪大使收到相似邀請，但聯絡資訊沒有問題。可疑票券屬於透過某個特定連結報名的一般市民。這再次顯示問題源於報名系統，而非活動本身。"
      },
      {
        "en": "Mia explained the discovery to the manager before the next audience arrived. They quietly replaced the affected tickets and informed the guests. Nobody wanted an important visitor to become the reason that ordinary clients were forgotten.",
        "zh": "下一批觀眾抵達前，Mia 向主管說明發現。他們低調換掉受影響的票券並通知來賓。沒有人希望因為重要訪客到來，反而忘記了一般客戶。"
      }
    ],
    "quiz": [
      {
        "q": "Which tickets showed the suspicious symbol?",
        "opts": [
          "Tickets from one particular registration link",
          "All printed invitations",
          "Only the ambassador’s ticket",
          "Only the manager’s badge"
        ],
        "a": 0,
        "why": "正確答案：Tickets from one particular registration link。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why was the representative invited?",
        "opts": [
          "To honor a local achievement",
          "To investigate Victor",
          "To sell software",
          "To cancel the event"
        ],
        "a": 0,
        "why": "正確答案：To honor a local achievement。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Mia’s team do?",
        "opts": [
          "Replace affected tickets and inform guests",
          "Keep all tickets secret",
          "Close the campus",
          "Ask every citizen to leave"
        ],
        "a": 0,
        "why": "正確答案：Replace affected tickets and inform guests。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-15"
  },
  {
    "title": "When the Lights Went Out",
    "zh": "燈熄滅時",
    "blurb": "突如其來的意外，考驗的不只是英文。",
    "scene": "night",
    "words": [
      "leak",
      "electricity",
      "automatic",
      "emergency",
      "injury",
      "signal",
      "afterward"
    ],
    "pages": [
      {
        "en": "A strong breeze turned into heavy rain that afternoon. Water began to leak through an old window near the exhibition hall. The lights went out when the electricity failed. An automatic alarm sounded, and several visitors moved toward the wrong exit. Mia remembered the emergency plan the staff had reviewed that morning.",
        "zh": "那天下午，強風帶來大雨。展覽廳附近一扇老窗開始漏水，接著停電、燈全熄了。自動警報響起，幾位訪客朝錯誤出口走去。Mia 想起工作人員早上複習過的緊急應變計畫。"
      },
      {
        "en": "She gave a clear signal and asked everyone to use the safe door. There was a risk of injury if people ran through the wet hallway. The team had sufficient flashlights, but not enough staff to stand at every entrance. Victor helped prevent a crowd from gathering near the broken window.",
        "zh": "她發出清楚信號，請大家使用安全出口。若有人在濕滑走廊奔跑，可能受傷。團隊有足夠手電筒，卻沒有足夠人手守住每個入口。Victor 幫忙避免人群聚集在破窗附近。"
      },
      {
        "en": "Afterward, the manager thanked Mia for giving reliable directions. The event was paused, but nobody was hurt. As the rain weakened, Mia noticed that the registration computer had stayed on during the power failure. It had its own battery—and one more message was waiting.",
        "zh": "事後主管感謝 Mia 提供可靠指引。活動暫停了，但沒有人受傷。雨勢減弱時，Mia 注意到報到電腦在停電期間仍開著。它有自己的電池，螢幕上還等著一則新訊息。"
      }
    ],
    "quiz": [
      {
        "q": "What caused the lights to go out?",
        "opts": [
          "An electricity failure during heavy rain",
          "Mia unplugged the lights",
          "The event ended",
          "Victor turned them off"
        ],
        "a": 0,
        "why": "正確答案：An electricity failure during heavy rain。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did Mia ask visitors not to run?",
        "opts": [
          "The wet hallway created a risk of injury",
          "The mayor was speaking",
          "The tickets were missing",
          "The music was loud"
        ],
        "a": 0,
        "why": "正確答案：The wet hallway created a risk of injury。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What remained on during the outage?",
        "opts": [
          "The registration computer",
          "Every room light",
          "The office elevator",
          "The outdoor posters"
        ],
        "a": 0,
        "why": "正確答案：The registration computer。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-16"
  },
  {
    "title": "Across the Bay",
    "zh": "穿越海灣",
    "blurb": "一則訊息把調查帶到貨運碼頭。",
    "scene": "paper",
    "words": [
      "harbor",
      "dock",
      "crew",
      "captain",
      "aboard",
      "transport",
      "baggage",
      "bay",
      "fare",
      "overseas",
      "import",
      "export",
      "rough"
    ],
    "pages": [
      {
        "en": "The new message contained a shipping number. Victor recognized it from a transport company near the harbor. The next morning, Mia and Daniel traveled across the bay as passengers on a small boat. The captain asked them to keep their baggage beside their seats. The fare was cheap, but the ride was rough.",
        "zh": "新訊息帶著一組貨運編號。Victor 認出那是港口附近一家運輸公司的編號。隔天早上，Mia 與 Daniel 搭小船穿過海灣。船長要他們把行李放在座位旁。船票很便宜，航程卻顛簸。"
      },
      {
        "en": "At the dock, a crew member showed them a list of goods waiting to go aboard a larger ship. Some products were meant for overseas customers. The company handled both import and export orders. On one label, Mia found the same mark from the event tickets.",
        "zh": "到了碼頭，一名船員拿出待裝上大船的貨物清單。有些產品要送往海外客戶。這家公司同時處理進口與出口訂單。Mia 在一張標籤上發現和活動票券相同的標記。"
      },
      {
        "en": "The crew member explained that the mark belonged to a supplier that printed labels and managed registrations for several companies. Mia felt a familiar chill. The problem was not limited to her office. Other customers might also have received messages they believed were official.",
        "zh": "船員解釋，標記屬於一家供應商，替多家公司印製標籤並管理報名資料。Mia 感到一陣熟悉的寒意。問題不限於她的辦公室；其他公司的客戶也可能收到誤以為是官方寄出的訊息。"
      }
    ],
    "quiz": [
      {
        "q": "Why did Mia go to the harbor?",
        "opts": [
          "To investigate a shipping number",
          "To take a vacation",
          "To meet the mayor",
          "To buy event tickets"
        ],
        "a": 0,
        "why": "正確答案：To investigate a shipping number。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Where did Mia see the familiar symbol?",
        "opts": [
          "On a shipping label",
          "On the boat captain’s hat",
          "On her luggage",
          "On the fare sign"
        ],
        "a": 0,
        "why": "正確答案：On a shipping label。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the crew member explain?",
        "opts": [
          "The mark belonged to a supplier serving several companies",
          "The ship was going to sink",
          "Victor owned the harbor",
          "The event had been canceled"
        ],
        "a": 0,
        "why": "正確答案：The mark belonged to a supplier serving several companies。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-17"
  },
  {
    "title": "The Farmer’s Receipt",
    "zh": "農場的收據",
    "blurb": "一張普通收據，讓 Mia 看見資料如何跨越產業流動。",
    "scene": "paper",
    "words": [
      "agriculture",
      "harvest",
      "greenhouse",
      "organic",
      "dairy",
      "cattle",
      "barn",
      "barrel",
      "trader"
    ],
    "pages": [
      {
        "en": "One shipment belonged to a regional agriculture group. It carried organic vegetables from a greenhouse, dairy products from a small farm, and grain from the season’s harvest. A trader had used the same supplier to manage orders. Mia visited the farm because its receipt carried the suspicious mark.",
        "zh": "其中一批貨物屬於區域農業團體，運送溫室種植的有機蔬菜、來自小農場的乳製品，以及當季收成的穀物。一位貿易商也用同一家供應商管理訂單。Mia 因為農場收據印有可疑記號而前去拜訪。"
      },
      {
        "en": "The farmer showed them a barn where several cattle rested. Beside the door stood a barrel used to collect rainwater. “We do not have endless resources,” she said. “If an order goes to the wrong address, we may lose a whole day’s work.” Her complaint sounded painfully familiar to Mia.",
        "zh": "農夫帶他們看牛隻休息的穀倉，門邊有一個接雨水的桶子。她說：「我們的資源不是無限的。訂單如果送錯地址，可能浪費一整天的工作。」這段客訴讓 Mia 感到格外熟悉。"
      },
      {
        "en": "The farm had not received fake messages, but it had received two different delivery labels for the same order. Mia photographed both. Perhaps the supplier’s weak process had created more than one kind of error.",
        "zh": "農場並未收到假訊息，卻曾對同一筆訂單收到兩張不同的運送標籤。Mia 把兩張都拍下。也許供應商薄弱的流程造成的不只一種錯誤。"
      }
    ],
    "quiz": [
      {
        "q": "Why did Mia visit the farm?",
        "opts": [
          "Its receipt had the suspicious symbol",
          "She wanted to buy cattle",
          "The event had moved there",
          "Victor had become a farmer"
        ],
        "a": 0,
        "why": "正確答案：Its receipt had the suspicious symbol。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What problem had the farm experienced?",
        "opts": [
          "Two different labels for the same order",
          "A missing barn",
          "No rainwater",
          "An empty greenhouse"
        ],
        "a": 0,
        "why": "正確答案：Two different labels for the same order。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did wrong addresses matter to the farmer?",
        "opts": [
          "They could waste an entire day of work",
          "They improved the harvest",
          "They increased resources",
          "They made cattle healthier"
        ],
        "a": 0,
        "why": "正確答案：They could waste an entire day of work。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-18"
  },
  {
    "title": "The Laboratory Test",
    "zh": "實驗室的測試",
    "blurb": "同一家公司的一個錯誤，甚至可能影響研究樣本。",
    "scene": "night",
    "words": [
      "experiment",
      "scientist",
      "theory",
      "element",
      "substance",
      "bacteria",
      "reaction",
      "melt"
    ],
    "pages": [
      {
        "en": "A laboratory had also used the supplier. Its scientist showed Mia a set of boxes containing samples for an experiment. Each box held a different substance, and one needed to stay frozen. The delivery label had sent that box to the wrong building. By the time it arrived, the ice had started to melt.",
        "zh": "一家實驗室也用過這家供應商。科學家帶 Mia 看實驗樣本箱，每箱都有不同物質，其中一箱需要保持冷凍。錯誤標籤讓那箱送錯大樓；到貨時，冰已開始融化。"
      },
      {
        "en": "“We cannot assume the sample is safe,” the scientist explained. “Our theory means nothing without an accurate test.” She examined the material for bacteria and checked whether a chemical element had caused an unexpected reaction. Mia watched carefully. A label seemed small until it changed the result of someone’s work.",
        "zh": "科學家解釋：「不能假定樣本安全。沒有準確測試，理論就沒有意義。」她檢查材料是否含細菌，也查看是否有化學元素引起意外反應。Mia 仔細看著：標籤看似小事，卻可能改變別人的工作結果。"
      },
      {
        "en": "The test could not determine who made the original error, but it provided proof that the delivery mistake had real consequences. Mia added the laboratory’s report to the growing case file. She no longer thought of the incident as just a wrong address.",
        "zh": "測試無法判定最初是誰犯錯，卻證明了運送失誤有真實後果。Mia 把實驗室報告加入越來越厚的調查檔案。她不再覺得這件事只是地址寫錯而已。"
      }
    ],
    "quiz": [
      {
        "q": "What happened to a laboratory sample?",
        "opts": [
          "It was delivered to the wrong building and began to thaw",
          "It was used at the event",
          "Victor took it home",
          "It arrived before being ordered"
        ],
        "a": 0,
        "why": "正確答案：It was delivered to the wrong building and began to thaw。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did the scientist need a test?",
        "opts": [
          "To check whether the sample was still safe",
          "To find a new office",
          "To produce a headline",
          "To print tickets"
        ],
        "a": 0,
        "why": "正確答案：To check whether the sample was still safe。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What could the test NOT determine?",
        "opts": [
          "Who made the original error",
          "Whether there was a delivery problem",
          "Whether the sample had warmed",
          "Whether a report existed"
        ],
        "a": 0,
        "why": "正確答案：Who made the original error。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-19"
  },
  {
    "title": "A Difficult Conversation",
    "zh": "一場困難的對話",
    "blurb": "發現問題之後，怎樣談論責任才算公平？",
    "scene": "meeting",
    "words": [
      "moral",
      "sincere",
      "fairly",
      "conscious",
      "sensible",
      "practical"
    ],
    "pages": [
      {
        "en": "The scientist’s report forced the committee to meet again. Some members wanted to blame the supplier for every mistake. Mia thought that would be neither reasonable nor fair. The company had ignored Victor’s warning, and the supplier had failed to protect clients. More than one decision had caused harm.",
        "zh": "科學家的報告迫使委員會再度開會。有些成員想把所有錯誤都怪給供應商，Mia 認為那既不合理也不公平。公司忽視 Victor 的警告，供應商也沒有保護客戶。造成傷害的決定不只一個。"
      },
      {
        "en": "Victor made a sincere apology for staying silent. The manager admitted that his own judgment had been poor. “Honesty is not a way to escape responsibility,” Mia said. “It is where we begin.” Everyone became conscious of how much work remained. A moral question had turned into a practical one: how could they stop this from happening again?",
        "zh": "Victor 真誠地為自己的沉默道歉。主管承認判斷失當。「誠實不是逃避責任的方式，而是開始負責的地方。」Mia 說。大家意識到仍有很多事要做。道德問題變成實際問題：如何防止重演？"
      },
      {
        "en": "The committee reached a sensible conclusion. They would fairly review the supplier’s actions and their own process, publish clear findings, and offer help to affected clients. Mia still felt regret about the first announcement, but she finally saw a way forward.",
        "zh": "委員會得出務實的結論：公平檢查供應商與公司自身流程、公布清楚的結果，並協助受影響的客戶。Mia 仍對第一份公告感到懊悔，但終於看見了前進的方向。"
      }
    ],
    "quiz": [
      {
        "q": "Why did Mia reject blaming only the supplier?",
        "opts": [
          "The company had also ignored an earlier warning",
          "The supplier had never been involved",
          "Victor wanted a promotion",
          "The client had changed the address"
        ],
        "a": 0,
        "why": "正確答案：The company had also ignored an earlier warning。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Victor apologize for?",
        "opts": [
          "Remaining silent",
          "Canceling the exhibition",
          "Taking the boat",
          "Moving the laboratory"
        ],
        "a": 0,
        "why": "正確答案：Remaining silent。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the committee decide to do?",
        "opts": [
          "Review both the supplier and its own process",
          "Destroy every record",
          "Stop talking to clients",
          "Keep the findings secret"
        ],
        "a": 0,
        "why": "正確答案：Review both the supplier and its own process。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-20"
  },
  {
    "title": "A New Routine",
    "zh": "新的日常流程",
    "blurb": "真正的改變，是沒有人注意時也照樣做對。",
    "scene": "office",
    "words": [
      "routine",
      "inspect",
      "technical",
      "technique",
      "strategy",
      "junior",
      "guidance",
      "reduce",
      "learning"
    ],
    "pages": [
      {
        "en": "The company introduced a new routine. Every week, staff would inspect the registration settings, and every month a senior employee would review the results. A junior worker could ask for guidance without being blamed for not knowing something. Mia helped write instructions that people could actually follow.",
        "zh": "公司建立新例行流程：每週由員工檢查報名設定，每月由資深同仁複查結果。資淺員工可以尋求指導，不必因為不懂而被責怪。Mia 協助寫出大家真的能照做的說明。"
      },
      {
        "en": "Daniel explained a technical technique for keeping a record of each change. It required little extra time and could reduce the risk of losing information. The manager agreed to provide enough resources. “A strategy is only useful if somebody carries it out,” he said.",
        "zh": "Daniel 解釋一種保留每次修改紀錄的技術方法。它只需要多花一點時間，就能降低資訊遺失風險。主管同意提供足夠資源。「策略必須有人實行才有用。」他說。"
      },
      {
        "en": "At the end of the first week, Mia checked the old announcement again. Nothing had changed without a record. That small, boring result made her unexpectedly happy. She was learning that reliable work often looked ordinary from the outside.",
        "zh": "第一週結束時，Mia 再次查看舊公告，沒有任何變更漏了紀錄。這個小而無聊的結果，卻讓她意外開心。她開始明白，可靠的工作從外面看起來往往很平凡。"
      }
    ],
    "quiz": [
      {
        "q": "How often would staff inspect the settings?",
        "opts": [
          "Every week",
          "Every year",
          "Only when a client complained",
          "Only during events"
        ],
        "a": 0,
        "why": "正確答案：Every week。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Daniel’s technique help do?",
        "opts": [
          "Keep records of changes",
          "Increase the event budget",
          "Hide the old files",
          "Remove all passwords"
        ],
        "a": 0,
        "why": "正確答案：Keep records of changes。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why was Mia happy at the end?",
        "opts": [
          "Every change had a record",
          "Her manager had resigned",
          "The supplier had sent a gift",
          "There were no more clients"
        ],
        "a": 0,
        "why": "正確答案：Every change had a record。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-21"
  },
  {
    "title": "The Unexpected Offer",
    "zh": "意外的提議",
    "blurb": "Mia 得到一個機會，卻不確定自己準備好了沒有。",
    "scene": "office",
    "words": [
      "promote",
      "salary",
      "scholarship",
      "fund",
      "advantage",
      "benefit",
      "hourly"
    ],
    "pages": [
      {
        "en": "Two weeks later, the manager asked Mia to consider a new position. It would bring a higher salary and the chance to lead a small team. “I want to promote you,” he said. “Your work has been an achievement for this company.” Mia was excited, but she had only just begun her career.",
        "zh": "兩週後，主管請 Mia 考慮一個新職位：薪水更高，也有機會帶領小團隊。「我想升你職，你的工作是公司的重要成果。」主管說。Mia 很興奮，但她的職涯才剛開始。"
      },
      {
        "en": "She was still saving money for further study. A scholarship would help her after she graduated from a professional course, and the company offered to fund part of it. The advantage was clear, yet Mia did not want a new title to become more important than the people she served.",
        "zh": "她仍在為進修存錢。一筆獎學金能幫助她完成專業課程，公司的提議也包含部分資助。好處很明顯，但 Mia 不希望新頭銜變得比她服務的人更重要。"
      },
      {
        "en": "Daniel reminded her that hourly wages were not the only measure of a good job. “Think about the benefit of learning,” he said. Mia smiled. She asked for a day to decide—and then received an invitation to visit another office far from home.",
        "zh": "Daniel 提醒她，時薪並不是衡量工作的唯一標準。「想想學習帶來的好處。」他說。Mia 微笑著要求一天考慮，接著收到一份邀請：前往離家很遠的另一間辦公室。"
      }
    ],
    "quiz": [
      {
        "q": "What did the manager offer Mia?",
        "opts": [
          "A position with higher pay and team responsibility",
          "A free overseas vacation",
          "A job at the farm",
          "A place in the laboratory"
        ],
        "a": 0,
        "why": "正確答案：A position with higher pay and team responsibility。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What was Mia saving money for?",
        "opts": [
          "Further study",
          "A new boat",
          "A television interview",
          "An exhibition ticket"
        ],
        "a": 0,
        "why": "正確答案：Further study。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did Mia ask for time to decide?",
        "opts": [
          "She wanted to consider the offer carefully",
          "She had forgotten her own name",
          "The event was still happening",
          "The salary had been canceled"
        ],
        "a": 0,
        "why": "正確答案：She wanted to consider the offer carefully。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-22"
  },
  {
    "title": "A Letter from Home",
    "zh": "家裡來的信",
    "blurb": "一封信讓 Mia 想起自己的起點。",
    "scene": "paper",
    "words": [
      "hometown",
      "elderly",
      "neighborhood",
      "homesick",
      "comfort",
      "lifetime",
      "tender",
      "passport"
    ],
    "pages": [
      {
        "en": "Before leaving on the trip, Mia received a letter from her hometown. Her elderly neighbor had written it by hand. The woman had watched Mia grow up and remembered how she once helped younger children find their way home. Reading the familiar handwriting made Mia suddenly homesick.",
        "zh": "出差前，Mia 收到來自家鄉的一封信。年長鄰居親手寫的，她從小看著 Mia 長大，也記得 Mia 曾幫年幼孩子找回家的路。看到熟悉的字跡，Mia 突然想家了。"
      },
      {
        "en": "The letter offered comfort rather than advice. “A lifetime is not a race,” it said. “You can leave your neighborhood and still carry it with you.” Mia gave a sincere laugh at the last line: “And please eat something other than noodles.” The tender joke made the distance feel smaller.",
        "zh": "信中沒有說教，只有安慰：「人生不是比賽。你可以離開家鄉，卻仍把它帶在心裡。」最後一句讓 Mia 真心笑了出來：「拜託不要只吃麵。」溫柔的玩笑讓距離突然縮短。"
      },
      {
        "en": "She did not regret coming to the city. Still, she wanted to remain connected to the people who had believed in her before she had a job title or an award. Mia folded the letter and placed it beside her passport. It would travel with her.",
        "zh": "她並不後悔來城市工作，卻也想和那些在她尚無職稱、尚未得獎前就相信她的人保持連結。Mia 把信折好，放到護照旁，準備帶著它出發。"
      }
    ],
    "quiz": [
      {
        "q": "Who sent the letter?",
        "opts": [
          "An elderly neighbor from Mia’s hometown",
          "The mayor",
          "The supplier",
          "The laboratory scientist"
        ],
        "a": 0,
        "why": "正確答案：An elderly neighbor from Mia’s hometown。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did the letter remind Mia?",
        "opts": [
          "She could keep her roots while exploring a new place",
          "She must refuse the promotion",
          "She should leave the company immediately",
          "She had lost her passport"
        ],
        "a": 0,
        "why": "正確答案：She could keep her roots while exploring a new place。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Where did Mia put the letter?",
        "opts": [
          "Beside her passport",
          "Inside the registration computer",
          "Under Victor’s desk",
          "At the harbor"
        ],
        "a": 0,
        "why": "正確答案：Beside her passport。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-23"
  },
  {
    "title": "A Ticket Overseas",
    "zh": "飛往海外的機票",
    "blurb": "這次出差，Mia 終於要用英文親自處理問題。",
    "scene": "paper",
    "words": [
      "airline",
      "passenger",
      "luggage",
      "tourist",
      "journey"
    ],
    "pages": [
      {
        "en": "Mia accepted a short overseas assignment. At the airport, an airline employee checked her passport and asked whether she had any baggage to check. Mia kept her small luggage with her. She had reserved a seat beside the window, but her name was missing from the passenger list.",
        "zh": "Mia 接受了一趟短期海外任務。在機場，航空公司員工檢查護照，問她是否有行李要託運。她把小行李留在身邊。她預訂了靠窗座位，乘客名單卻找不到她的名字。"
      },
      {
        "en": "The employee checked her fare and found a spelling mistake in the reservation. It reminded Mia of her first week at work. This time, she remained calm and asked for the correct information in writing. A few minutes later, she was allowed aboard the plane.",
        "zh": "員工查了她的票價資訊，發現訂位姓名拼錯。這讓 Mia 想起到職第一週。這次她保持冷靜，要求對方以書面確認正確資訊。幾分鐘後，她順利登機。"
      },
      {
        "en": "During the journey, a tourist beside her asked why she was traveling. “I help companies make their information more reliable,” Mia replied. For the first time, she could explain her work simply. The world still felt large, but her voice no longer seemed so small.",
        "zh": "旅途中，鄰座遊客問她為何出國。「我協助公司把資訊做得更可靠。」Mia 回答。她第一次能簡單說清自己的工作。世界依然很大，但她的聲音不再那麼微小。"
      }
    ],
    "quiz": [
      {
        "q": "What was wrong with Mia’s reservation?",
        "opts": [
          "Her name was spelled incorrectly",
          "She had no passport",
          "Her luggage was too heavy",
          "The plane had no windows"
        ],
        "a": 0,
        "why": "正確答案：Her name was spelled incorrectly。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "How did Mia respond this time?",
        "opts": [
          "She stayed calm and asked for written confirmation",
          "She left the airport",
          "She accused another passenger",
          "She ignored the mistake"
        ],
        "a": 0,
        "why": "正確答案：She stayed calm and asked for written confirmation。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Mia tell the tourist?",
        "opts": [
          "She helps companies improve information",
          "She is a ship captain",
          "She is going on a honeymoon",
          "She owns the airline"
        ],
        "a": 0,
        "why": "正確答案：She helps companies improve information。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-24"
  },
  {
    "title": "The Trail Above the City",
    "zh": "城市上方的小徑",
    "blurb": "工作之外的短暫冒險，讓 Mia 學會另一種判斷。",
    "scene": "night",
    "words": [
      "canyon",
      "slope",
      "steep",
      "trail",
      "foggy",
      "lighthouse",
      "visible",
      "tough",
      "marker",
      "traveler",
      "whistle"
    ],
    "pages": [
      {
        "en": "On her free day, Mia joined a small group walking along a trail above the coastal city. The path followed a steep slope and passed a narrow canyon. A lighthouse was visible far below, but the morning soon turned foggy. The guide asked everyone to stay together.",
        "zh": "休假那天，Mia 和一小群人走上海濱城市上方的步道。小徑沿陡坡前進，經過狹窄峽谷。遠處下方原本看得見燈塔，但早晨很快起霧。嚮導請所有人保持同行。"
      },
      {
        "en": "A sudden breeze surrounded the group with cold air. One traveler realized that her friend was missing. The guide stopped and tried to locate him without sending everyone in different directions. It was a tough decision: rushing into the fog might create another problem.",
        "zh": "一陣風吹來，冷空氣包圍整隊。一位旅人發現朋友不見了。嚮導停下，試著找到他，卻沒有叫大家四散尋人。這是艱難決定：貿然衝入霧裡可能造成更多問題。"
      },
      {
        "en": "They finally heard a whistle near the lighthouse path. The missing traveler had waited beside a marker, exactly as the guide had advised. Mia smiled. In the office and on a mountain, the same lesson seemed to return: slow down, check the facts, then act.",
        "zh": "他們終於聽見燈塔小徑附近的哨聲。失蹤的旅人一直在路標旁等待，正如嚮導先前所說。Mia 笑了。無論在辦公室還是山上，教訓似乎一樣：慢下來、確認事實，再行動。"
      }
    ],
    "quiz": [
      {
        "q": "Why did the group stop walking?",
        "opts": [
          "A traveler’s friend was missing in the fog",
          "The lighthouse was closed",
          "Mia lost her passport",
          "The guide canceled the trip"
        ],
        "a": 0,
        "why": "正確答案：A traveler’s friend was missing in the fog。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Why did the guide avoid sending everyone out?",
        "opts": [
          "It might create another dangerous situation",
          "The slope was flat",
          "The fare was too high",
          "The group wanted to eat"
        ],
        "a": 0,
        "why": "正確答案：It might create another dangerous situation。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Where was the missing traveler found?",
        "opts": [
          "Beside a trail marker",
          "Inside the laboratory",
          "Aboard a ship",
          "At the airport"
        ],
        "a": 0,
        "why": "正確答案：Beside a trail marker。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-25"
  },
  {
    "title": "The Warehouse Basement",
    "zh": "倉庫的地下室",
    "blurb": "另一間辦公室的舊倉庫，藏著最後一份紀錄。",
    "scene": "night",
    "words": [
      "basement",
      "brick",
      "dust",
      "flashlight",
      "shadow",
      "hollow",
      "rust",
      "pile",
      "beneath"
    ],
    "pages": [
      {
        "en": "At the overseas office, the manager showed Mia an old warehouse. Its brick walls were damp, and dust covered most of the shelves. The registration system’s first paper records had been stored in the basement. A single flashlight was not enough to light the long room.",
        "zh": "抵達海外辦公室後，主管帶 Mia 到一座舊倉庫。磚牆潮濕，灰塵覆滿大部分架子。報名系統最早的紙本紀錄被放在地下室。一支手電筒不足以照亮整個長房間。"
      },
      {
        "en": "Daniel, who had joined the visit online, asked her to inspect the labels on the boxes. Behind a pile of empty folders, Mia found a hollow metal case. Rust covered its edges. Beneath it lay an old list bearing the familiar symbol. She knew the clue might explain how the supplier had gained access years earlier.",
        "zh": "透過網路參與調查的 Daniel 請她檢查箱子標籤。在一堆空資料夾後，Mia 發現一個中空金屬盒，邊緣生鏽。盒子下面壓著一張印有熟悉記號的舊清單。這項線索可能解釋供應商多年前如何取得權限。"
      },
      {
        "en": "A shadow crossed the doorway. Mia turned, suddenly anxious. It was the local manager, carrying a second flashlight. “Found something?” he asked. Mia nodded. The paper did not prove her suspicion, but it pointed to a date—and the person who had signed the first agreement.",
        "zh": "一道影子掠過門口，Mia 緊張地轉頭，原來是當地主管帶著第二支手電筒。「找到了嗎？」他問。Mia 點頭。紙張無法證明她的懷疑，卻指向一個日期，以及最早簽下協議的人。"
      }
    ],
    "quiz": [
      {
        "q": "Where were the old paper records kept?",
        "opts": [
          "In a warehouse basement",
          "On Mia’s plane",
          "At the exhibition hall",
          "Under a café table"
        ],
        "a": 0,
        "why": "正確答案：In a warehouse basement。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Mia find under the case?",
        "opts": [
          "An old list with the familiar symbol",
          "A box of passports",
          "An award",
          "A new computer"
        ],
        "a": 0,
        "why": "正確答案：An old list with the familiar symbol。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "Who made the shadow in the doorway?",
        "opts": [
          "The local manager carrying a flashlight",
          "A stranger with a weapon",
          "Victor",
          "The laboratory scientist"
        ],
        "a": 0,
        "why": "正確答案：The local manager carrying a flashlight。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-26"
  },
  {
    "title": "The Signature",
    "zh": "簽名",
    "blurb": "最後的線索不是一個意外的新犯人，而是一份被忽略的文件。",
    "scene": "meeting",
    "words": [
      "replacement",
      "release",
      "criminal",
      "neat"
    ],
    "pages": [
      {
        "en": "The signature belonged to the company’s former director, who had approved the original supplier agreement. It did not reveal a secret criminal. Instead, it showed that responsibility had been passed from one manager to another without a reliable process for checking access. Mia finally understood why the same mistake had appeared in different places.",
        "zh": "簽名屬於公司前任主管，他曾批准最初的供應商協議。文件並未揭露神祕罪犯，反而顯示責任在不同主管間轉來轉去，卻沒有可靠流程檢查權限。Mia 終於明白，為何同類錯誤出現在不同地方。"
      },
      {
        "en": "Her team prepared a truthful conclusion and a replacement system. They would release the findings to affected clients, accept responsibility, and record who owned each future decision. Mia hoped they could achieve more than a neat report: a process people would follow even when nobody was watching.",
        "zh": "團隊準備誠實的結論與替代系統。他們會向受影響客戶公布結果、承擔責任，並記錄未來每個決定由誰負責。Mia 希望成果不只是一份漂亮報告，而是即使沒人監督也會被遵守的流程。"
      },
      {
        "en": "When she returned home, a new assistant asked how to handle an unusual message. Mia did not give him an answer to memorize. She offered him an opportunity to investigate it with her. The first story had begun with a wrong address. This one ended with a better question: “What do we know, and what do we still need to check?”",
        "zh": "Mia 回家後，一位新助理問她怎麼處理一則奇怪訊息。Mia 沒給他一個要死背的答案，而是讓他有機會一起調查。最初的故事始於錯誤地址，最後卻以更好的問題收尾：「我們知道什麼？還需要查證什麼？」"
      }
    ],
    "quiz": [
      {
        "q": "What did the old signature establish?",
        "opts": [
          "The original supplier agreement had been approved by a former director",
          "Daniel was the sender",
          "The event had never existed",
          "Victor owned the laboratory"
        ],
        "a": 0,
        "why": "正確答案：The original supplier agreement had been approved by a former director。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What would the new system record?",
        "opts": [
          "Who was responsible for future decisions",
          "Only visitors’ names",
          "The airline fares",
          "The number of awards"
        ],
        "a": 0,
        "why": "正確答案：Who was responsible for future decisions。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      },
      {
        "q": "What did Mia teach the new assistant?",
        "opts": [
          "To investigate what is known and what still needs checking",
          "To guess immediately",
          "To ignore unusual messages",
          "To blame the newest worker"
        ],
        "a": 0,
        "why": "正確答案：To investigate what is known and what still needs checking。可對照上方完整中文翻譯與故事原文，確認這個細節。"
      }
    ],
    "id": "lv3-27"
  }
];
