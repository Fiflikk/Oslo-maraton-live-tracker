# Oslo Maraton – Live Tracker v8

Live GPS-tracker for two runners: Fredrik and Tommy.

## Funksjon
- To løpere vises samtidig på kartet.
- Fredrik har rødt ikon.
- Tommy har blått ikon.
- En løpetelefon velger kun sin egen løper når **Start GPS** trykkes.
- Seere trenger ikke velge hvem de er.
- Trykk på **Fredrik**- eller **Tommy**-kortet for å følge den løperen på kartet.
- Aktivt løperkort markeres.

## Lokal kjøring
```bash
npm install
npm start
```
Åpne http://localhost:3000/.

## Render
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`
- Serveren lytter på `PORT` og `0.0.0.0`.

## GPS
GPS på iPhone krever HTTPS (unntatt localhost). La siden være åpen mens du løper.
