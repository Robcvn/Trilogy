# Trilogy

Portfolio rebuild of the Trilogy Real Estate Group site — React 18 + Vite 5, `react-router-dom` (HashRouter) and plain CSS, deployed to GitHub Pages at <https://Robcvn.github.io/Trilogy/>.

## Setup & deploy

Run `npm install` once, then `npm run dev` for a local dev server with hot reload (served at `/Trilogy/`). `npm run lint` checks the code, `npm run build` produces the production bundle in `dist/`, and `npm run preview` serves that bundle locally. To publish, run `npm run deploy` — it builds and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves. The contact form has no backend yet; set `VITE_CONTACT_ENDPOINT` in a `.env` file to point it at a real endpoint (e.g. Formspree).
