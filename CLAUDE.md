# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Build static site to dist/
npm run preview  # Preview production build locally
```

No test suite. Deployment is automatic via GitHub Actions on push to `main` (deploys to GitHub Pages).

## Architecture

Vanilla JS + Vite static site. No framework, no backend, no external runtime dependencies.

**Entry point**: `src/main.js` — implements the entire UI as a state machine rendering into `#app`.

**State machine screens**: `home` → `section` → `quiz` → `result` (or `home` → `section` → `guide` for non-quiz sections).

**Content pipeline**:
- `src/content.js` defines all sections with metadata and quiz questions/passages
- `src/questions.js` holds geography quiz questions (referenced by `content.js`)
- `buildQuizItems()` in `main.js` flattens passage+question pairs, annotating each with passage index and count so the UI can render "Text 1 of 3" progress
- `prepareQuestions()` handles shuffling — sections control this via `shuffleQuestions`/`shuffleOptions` flags (English delprov B disables both since order matters for reading comprehension)

**Section types**: `"quiz"` (answers evaluated, results shown) vs `"guide"` (structured content display, no evaluation).

**Key non-obvious behaviors**:
- Focus management uses `requestAnimationFrame` inside `focusElement()` to defer until DOM is stable after re-renders
- All dynamic content runs through `escapeHtml()` including radio button values
- Answer flow is event-driven: `change` on option → enables submit; `submit` → checks answer, enables next; next → increments or shows results

**Vite base path** is set to `"./"` in `vite.config.js` for GitHub Pages compatibility with relative asset paths.
