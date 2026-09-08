# Oslo Maraton Live Tracker

## Hva dette er
En første fungerende prototype som bruker iPhone-nettleserens Geolocation API til å hente GPS-posisjon, vise den på kartet og sende siste posisjon til en liten Node/Express-server. Alle som åpner siden kan motta posisjonen live via Server-Sent Events.

## Kjør lokalt
1. Installer Node.js 18+
2. Kjør `npm install`
3. Kjør `npm start`
4. Åpne `http://localhost:3000`

For ekte iPhone-testing må siden normalt ligge på HTTPS. Geolocation API krever en secure context og brukerens tillatelse.

## Testoppsett
- Åpne siden på PC: fungerer som live-kart.
- Åpne samme URL på iPhone: trykk Start GPS.
- iPhone sender posisjonen til `/api/location`.
- PC og andre telefoner mottar oppdateringene via `/api/stream`.

## Neste steg
- autentisert privat løper-ID
- beregne km langs GPX-ruten
- estimert sluttid basert på faktisk fart
- historikk/spor
- dele-lenke for publikum
- integrere Oslo Maraton sin live-data dersom vi finner et lovlig/tilgjengelig API eller datafeed.


## Deploy på Render

Denne versjonen er klargjort for Render som Node/Express Web Service.

- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`
- Serveren bruker Render sin `PORT`-variabel og lytter på `0.0.0.0`.

For Oslo Marathon anbefales en betalt always-on web service dersom serveren skal være klar uten kaldstart under løpet. Render Free kan sove etter 15 minutter uten innkommende trafikk.
