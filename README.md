# Counter App

Semplice applicazione web che simula un contatore interattivo, sviluppata in **JavaScript puro** senza l'utilizzo di framework o librerie esterne.

## Struttura del progetto

```
counter/
├── index.html   # Struttura della pagina
├── style.css    # Stili e animazioni
└── script.js    # Logica e creazione dinamica del DOM
```

## Funzionalità

- **Valore iniziale a 0** — il counter parte da zero ad ogni apertura della pagina
- **Incremento e decremento** — pulsanti `+` e `−` per modificare il valore
- **Reset** — tasto `RST` per riportare il counter a zero
- **Step personalizzabile** — scegli il passo di incremento/decremento tra 1, 5 e 10
- **Cronologia** — mostra le ultime 12 operazioni con indicatori colorati (verde per i positivi, rosso per i negativi)
- **Scorciatoie da tastiera** — controlla il counter senza usare il mouse

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

## Requisiti tecnici

- JavaScript puro (Vanilla JS), nessun framework
- Interfaccia creata interamente tramite manipolazione del DOM
- CSS con variabili custom e animazioni native
- Font esterni caricati via Google Fonts (`Bebas Neue`, `Space Mono`)
