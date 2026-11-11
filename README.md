# Review pagina — Hamlet Gitaar

Reviewpagina voor de leerlingen van Hamlet Gitaar, gebaseerd op
[review-pagina](https://github.com/SavaJulian/review-pagina) (France Eco Concept).

- [Site op GitHub Pages](https://savajulian.github.io/Hamlet-Review-pagina/)

GitHub Pages publiceert de branch `gh-pages`; hou die gelijk met `main`
(`git push origin main:gh-pages`).

`index.html` is de hoofdpagina. `config.js` bevat de Google-reviewlink en het
e-mailadres voor privéberichten. Er is geen vestigingskeuze. Net als in het
voorbeeld gaat de knop bij 4 of 5 sterren naar het Google-reviewformulier en
bij 1 tot 3 sterren naar `prive-bericht.html`, dat een e-mail klaarzet in de
mailapp van de bezoeker. Zolang `email` in `config.js` leeg is, gaat elke
score naar Google.

Lokaal bekijken: `python3 -m http.server 8097` in deze map, daarna
`http://localhost:8097/`.
