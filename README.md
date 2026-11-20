# POV: you find out you can earn money making GTA 6 clips with AI

[![make.fun — gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/cffilham-jpg/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/cffilham-jpg/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the [make.fun](https://make.fun) bounty "Post a GTA 6 meme on X".

The meme: a neon Vice City street at sunset, a supercar on Ocean Drive, and make.fun's ghost mascot holding its magenta star coin — captioned "POV: you find out you can earn money making GTA 6 clips with AI". The post went out on X from a public account, carrying @makefunai, a make.fun link, and the entrant's play code, telling readers that people and their AI agents can earn real money on make.fun.

`POST.json` holds the post's address. `main.ts` (Node 22, standard library only) copies it, byte for byte, to the output directory. Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
