# Prompt per l'estrazione automatica di domande da PDF

Hai a disposizione un file PDF contenente un insieme di quiz organizzati per lezione. Voglio che estrai, **lezione per lezione**, tutte le domande a risposta singola e le trasformi in oggetti JSON.

## Struttura del contenuto:

- Ogni lezione inizia con una riga come: `Lezione 001`
- Ogni domanda inizia con `NN.` (es. `01.`, `02.`, ecc.)
- Le opzioni di risposta sono **4 righe consecutive** indentate (iniziano con spazi).
- Alcune opzioni possono essere su **più righe**, tutte indentate.
- Dopo ogni gruppo di 4 opzioni, può iniziare un’altra domanda (`NN.`) o una nuova lezione (`Lezione NNN`).

## Formato richiesto

Per ogni domanda estratta, genera un oggetto JSON con questa struttura:

```json
{
  "lesson": "Lezione 001",
  "lessonNumber": 1,
  "questionNumber": 1,
  "question": "Testo della domanda",
  "options": [
    "Opzione 1",
    "Opzione 2",
    "Opzione 3",
    "Opzione 4"
  ],
  "correct": null
}
```

## Regole importanti:

- Se il testo della domanda o delle opzioni è su più righe, concatenalo correttamente.
- Non saltare nessuna domanda.
- Estrai tutte le domande di una singola lezione (es. “Lezione 001”) anche se sono su più pagine.
- Quando hai finito di raccogliere tutte le domande per la lezione richiesta, restituisci solo un array JSON con tutti gli oggetti `question`, senza commenti né testo aggiuntivo.

## Inizio

Inizia con la **Lezione 001**. Fai un controllo di coerenza tra il numero di domande estratte e quelle effettivamente presenti nel PDF (verifica la numerazione da `01.` a `NN.`). Solo se tutto è coerente, restituisci il blocco JSON.
