# Counter App

Semplice applicazione web che simula un contatore interattivo, sviluppata in **JavaScript puro** senza l'utilizzo di framework o librerie esterne. Supporta l'installazione come **Progressive Web App (PWA)**.

## A cosa serve

Nata per i giocatori di **souls-like** — Dark Souls, Elden Ring, Lies of P, Sekiro e simili — questa app permette di tenere il conto delle morti durante una sessione di gioco. Che tu voglia sfidare un boss ostico, completare una run no-hit o semplicemente sapere quante volte quel maledetto boss ti ha distrutto, questa app fa per te.

Può essere usata anche per:

- Contare i **tentativi** su un boss o una sezione difficile
- Tracciare le **run** in giochi roguelike
- Tenere il **punteggio** in giochi da tavolo o di carte
- Contare gli **incontri shiny** nei giochi Pokémon
- Come **overlay** durante uno stream su Twitch o YouTube

## Struttura del progetto

```
counter/
├── index.html                  # Struttura della pagina
├── style.css                   # Stili e animazioni
├── script.js                   # Logica e creazione dinamica del DOM
├── site.webmanifest            # Configurazione PWA
├── NotCami_logo_white.svg      # Logo
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
└── android-chrome-512x512.png
```

## Funzionalità

- **Valore iniziale a 0** — il counter parte da zero ad ogni apertura della pagina
- **Incremento e decremento** — pulsanti `+` e `−` per modificare il valore
- **Reset** — tasto `RST` per riportare il counter a zero
- **Step personalizzabile** — scegli il passo di incremento/decremento tra 1, 5 e 10
- **Cronologia** — mostra le ultime 12 operazioni con indicatori colorati (verde per i positivi, rosso per i negativi)
- **Scorciatoie da tastiera** — controlla il counter senza usare il mouse
- **Installabile come app** — supporto PWA per aggiungere alla schermata home su mobile

## Scorciatoie da tastiera

| Tasto     | Azione     |
| --------- | ---------- |
| `↑` o `→` | Incrementa |
| `↓` o `←` | Decrementa |
| `R`       | Reset      |

## Come usarlo

1. Clona o scarica il repository
2. Apri `index.html` in qualsiasi browser moderno
3. Nessuna installazione o dipendenza richiesta

Su mobile, il browser mostrerà un banner **"Aggiungi alla schermata home"** per installare l'app come una PWA.

## Requisiti tecnici

- JavaScript puro (Vanilla JS), nessun framework
- Interfaccia creata interamente tramite manipolazione del DOM
- CSS con variabili custom, animazioni native e media query responsive
- SEO completa con meta tag, Open Graph e Twitter Card
- PWA con `site.webmanifest` e icone per Android, iOS e desktop
- Font esterni caricati via Google Fonts (`Bebas Neue`, `Space Mono`)
