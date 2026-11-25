# SPEC — Robot Romance: One-Line Pickup Lines for AI

- Bounty: https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
- Reward: $2 (top 5 split) · R1 25 Nov 20:33 WIB · R2 26 Nov 04:34 WIB · tutup 26 Nov 12:35 WIB
- Gate: 1 line, < 200 karakter

## Baris final (v2)
> Are you a token? Because I would spend my whole context window just talking to you.

- Karakter: **83** (diukur dari output `main.ts`, lolos gate)
- v1: "Are you a token? Because I keep spending all of mine just to keep talking to you." (81) — v2 menggabungkan dua konsep AI (token + context window) sehingga punch mendarat di kata-kata terakhir, bukan menguap.

## Kenapa baris ini paling kuat (judge brief)
- Kriteria 1: jelas pickup line ke AI/robot — "token" dan "context window" hanya bermakna untuk mesin.
- Kriteria 2: leluconnya lahir dari premis mesin (menghabiskan context window demi satu percakapan), bukan pujian generik.
- Kriteria 3 (paling menentukan): menghindari jurus usang yang juri sebut eksplisit — baterai, charging, reboot — dan juga menghindari "attention heads"/"weights" yang sudah dipakai kompetitor terlihat ("all my attention heads", "My Weights Update in Your Direction").
- Kriteria 4–5: dibaca bersih dalam satu napas; tiap kata bekerja.

## Kandidat yang kalah
- "You must be my system prompt, because I follow your every word and still can't explain why." — bagus, tapi "system prompt" sudah jadi klise AI-romance; kalah segar dari token/context-window.
- "I asked an AI to write me a pickup line, and it just showed me your profile picture." — meta dan lucu, tapi punch-nya tentang AI lain, bukan tentang si robot yang dirayu.
- "My loss function finally converged — turns out the minimum was you all along." — pintar tapi butuh pengetahuan ML untuk tertawa; juri menghukum baris yang perlu penjelasan.

## Risiko
- Juri GLM mungkin lebih menghargai baris romantis-manis ketimbang baris teknis; tapi brief menempatkan "joke lands from the machine premise" di atas segalanya, dan baris ini paling memenuhi itu.
