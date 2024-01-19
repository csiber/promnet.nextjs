Sziasztok! 👋

Köszöntelek a PromNET Portál repositoryjában! Ez a repository a portál kódját tartalmazza, ahol gondolataimat, projektjeimet és betekintéseimet osztom meg. Kérlek, böngészd át, és inspirálódj!

## ✨ Jellemzők

- ⚡️ Next.js 14 App Router (Turbo) használata
- 📝 MDX + Contentlayer
- 🎨 Tailwind CSS - stílushoz
- 🌈 Radix UI - hozzáférhető UI-komponensek
- 🛡 Szigorúan szabályozott TypeScript és ESLint konfiguráció
- 📱 Mobilbarát kialakítás
- 🌗 Sötét mód
- 📈 SEO metacímkékkel és JSON-LD-vel optimalizált
- 📰 RSS-feed
- 🗺 Sitemap
- 📊 Umami Analytics
- 📝 Blog kommentekkel, lájkokkal és bejegyzésnézetekkel
- 🔎 Blogbejegyzés keresés
- 📖 Blogbejegyzések tartalomjegyzék
- 📷 Kép-zoom - zoomoljon be a blogbejegyzések képeire
- 📝 Kód szintaxiskiemelés - a blogbejegyzések kódblokkjainak kiemeléséhez
- 🎨 Animáció - Framer Motion használatával
- 🤖 GitHub Actions CI/CD-hez
- 🏠 LightHouse-pontszám közel 100-hoz
- 🧪 Vitest - egység- és integrációs tesztek
- 🎭 Playwright - end-to-end tesztek
- ☂️ Codecov - kódlefedettség
- 🔨 Husky & Lint Staged - a kódot kódolás előtt ellenőrzi és formáz
- ✅ Hivatkozási commit lint - ellenőrizze, hogy a commitüzenetek megfelelnek a szokásos commit formátumnak
- 🔒 NextAuth.js - hitelesítés
- 💄 Prettier - kódformázás
- ◮ Prisma - ORM
- 👷🏻‍♂️ t3-env - ellenőrzi a környezeti változókat a build előtt

## 🔨 Követelmények

- Node Corepack-kel, ajánlott 18.x, minimális 16.9.0
- pnpm, ajánlott 8.14.0, minimális 8.x
- MySQL, ajánlott 8.0, minimális 5.6
- Visual Studio Code: https://code.visualstudio.com/ ajánlott bővítményekkel](.vscode/extensions.json)
- Opcionálisan React Developer Tools: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

## 👋 Elkezdés

A projekt helyi futtatásához kövesse az alábbi lépéseket:

```Bash
git clone https://github.com/tszhong0411/honghong.me.git <- EREDETI FORRÁS!!
cd weboldalneve
pnpm install
```

Legyél körültekintő a kód használatakor.
Hozz létre egy .env.local fájlt az előző .env.example fájl alapján, és töltsd ki az szükséges változókat.

```Bash
pnpm dev
```

Az alkalmazás a http://localhost:3000 címen lesz elérhető.

## ✈️ Források

github.com/fitcevents/webu-2016/blob/master/Real%20World%20React%20Debugging.md
github.com/sendwithus/competencieslicenchez kötött (MIT)

## ✈️ TODO

- Use strict content security policy - still not working in `14.0.4`
  - `next/image` - https://github.com/vercel/next.js/issues/45184
  - `nonces` - https://github.com/vercel/next.js/discussions/54907
  - `main-app.js` - https://github.com/vercel/next.js/issues/55129

## ✈️ 🔔 Fontos Megjegyzés

Helló! Bár örülök, hogy érdeklődsz az open-source projektjeim iránt, szívesen kérlek, hogy ne használd ezt a forráskódot az oldalad sablonjaként. Ehelyett arra buzdítalak, hogy használd tanulási forrásként és inspirációként, hogy valami egyedit hozz létre.

Eredetiség: A nulláról való építés lehetővé teszi, hogy bemutasd az eredetiséged és kreativitásod.
Tanulás: Saját projekt létrehozása segít tanulni és fejleszteni a készségeidet.
Ha kérdéseid vagy visszajelzésed van, kérlek, lépj kapcsolatba az eredeti szerzövel, tszhong0411 / [hong-hong.me](https://hong-hong.me). Köszönöm a megértésedet!

## ✈️ ❤️ Kredit

Ez a projekt a fantasztikus open-source közösség segítségével vált lehetségessé. Külön köszönet Hong-nak!

<hr>
