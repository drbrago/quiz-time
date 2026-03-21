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

Projektet innehåller en GitHub Actions-workflow i `.github/workflows/deploy.yml` som bygger och publicerar sajten till GitHub Pages när du pushar till `main`.

Gör så här:

1. Lägg projektet i ett GitHub-repo.
2. Pusha koden till branchen `main`.
3. Gå till GitHub: `Settings` → `Pages`.
4. Under `Source`, välj `GitHub Actions`.
5. Nästa push till `main` bygger och deployar sajten automatiskt.

Viktigt: `vite.config.js` använder relativ `base` (`"./"`), så samma build fungerar både i lokal preview och på GitHub Pages.

## Ändra Vite base path om repo-namnet ändras

Med den nuvarande konfigurationen behöver du normalt inte ändra något när repo-namnet ändras, eftersom relativa asset-sökvägar fungerar oavsett om repot heter `quiz-time` eller något annat.

Om du i framtiden vill använda en absolut GitHub Pages-sökväg i stället, ändra `base` i `vite.config.js` till repo-namnet:

```js
export default defineConfig({
  base: "/mitt-nya-repo/",
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
