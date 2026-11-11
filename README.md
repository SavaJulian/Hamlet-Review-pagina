# Review pagina — Hamlet Gitaar

Reviewpagina voor de leerlingen van Hamlet Gitaar, gebaseerd op
[review-pagina](https://github.com/SavaJulian/review-pagina) (France Eco Concept).

- [Site op GitHub Pages](https://savajulian.github.io/Hamlet-Review-pagina/)

GitHub Pages publiceert de branch `gh-pages`; hou die gelijk met `main`
(`git push origin main:gh-pages`).

`index.html` is de hoofdpagina. `config.js` bevat de Google-reviewlink en het
e-mailadres voor privéberichten. Er is geen vestigingskeuze. Na de sterrenkeuze
gaat de knop bij elke score naar hetzelfde Google-reviewformulier;
`prive-bericht.html` is een optionele extra die een e-mail klaarzet in de
mailapp van de bezoeker, en verschijnt alleen als `email` is ingevuld.

Lokaal bekijken: `python3 -m http.server 8097` in deze map, daarna
`http://localhost:8097/`.
