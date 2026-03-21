# Geografikollen

Ett enkelt statiskt geografiquiz byggt med Vite och vanilla JavaScript. Projektet fungerar som en vanlig statisk webbplats och kan publiceras på GitHub Pages.

## Installera beroenden

```bash
npm install
```

## Kör lokalt

```bash
npm run dev
```

Vite startar då en lokal utvecklingsserver, vanligtvis på `http://localhost:5173`.

## Bygg för produktion

```bash
npm run build
```

Den färdiga statiska webbplatsen skapas i mappen `dist/`.

## Förhandsgranska produktionsbygget

```bash
npm run preview
```

## Deploy till GitHub Pages

1. Lägg projektet i ett GitHub-repo.
2. Kör `npm install`.
3. Kör `npm run build`.
4. Publicera innehållet i `dist/` till GitHub Pages.

Två vanliga sätt:

- Använd en `gh-pages`-gren och ladda upp innehållet från `dist/`.
- Använd GitHub Actions och publicera mappen `dist/` som Pages-artifact.

Viktigt: `vite.config.js` använder relativ `base` (`"./"`), så samma build fungerar både i lokal preview och på GitHub Pages.

## Ändra Vite base path om repo-namnet ändras

Med den nuvarande konfigurationen behöver du normalt inte ändra något när repo-namnet ändras, eftersom relativa asset-sökvägar fungerar oavsett om repot heter `quize-time` eller något annat.

Om du i framtiden vill använda en absolut GitHub Pages-sökväg i stället, ändra `base` i `vite.config.js` till repo-namnet:

```js
export default defineConfig({
  base: "/mitt-nya-repo/"
});
```

Därefter bygger du om projektet med:

```bash
npm run build
```

## Byta frågor senare

Alla frågor finns i `src/questions.js`. Varje fråga använder samma enkla format:

```js
{
  question: "Vilken planet är närmast solen?",
  options: ["Venus", "Mars", "Merkurius", "Jorden"],
  correctAnswer: "Merkurius",
  explanation: "Merkurius är planeten som ligger närmast solen."
}
```

Du kan därför enkelt byta ut platshållarfrågorna utan att ändra resten av appen.
