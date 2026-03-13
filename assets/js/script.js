(function () {
  /* ────────────────────────────
     Stato dell'applicazione
  ──────────────────────────── */
  let count   = 0;
  let step    = 1;
  const MAX_HIST = 12;
  const history  = [];

  /* ────────────────────────────
     Creazione dinamica del DOM
  ──────────────────────────── */

  // Wrapper principale
  const app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);

  // Label titolo
  const label = document.createElement('div');
  label.id = 'label';
  label.textContent = 'Counter';
  app.appendChild(label);

  // Card centrale
  const card = document.createElement('div');
  card.id = 'card';
  app.appendChild(card);

  // Wrapper del valore numerico
  const valueWrapper = document.createElement('div');
  valueWrapper.id = 'value-wrapper';
  card.appendChild(valueWrapper);

  const valueEl = document.createElement('div');
  valueEl.id = 'value';
  valueEl.textContent = '0';
  valueWrapper.appendChild(valueEl);

  // Divisore orizzontale
  const divider = document.createElement('div');
  divider.id = 'divider';
  card.appendChild(divider);

  // Riga pulsanti principali
  const controls = document.createElement('div');
  controls.id = 'controls';
  card.appendChild(controls);

  const btnDec = document.createElement('button');
  btnDec.id = 'btn-dec';
  btnDec.className = 'btn';
  btnDec.textContent = '−';
  btnDec.title = 'Decrementa (← o ↓)';

  const btnReset = document.createElement('button');
  btnReset.id = 'btn-reset';
  btnReset.className = 'btn';
  btnReset.textContent = 'RST';
  btnReset.title = 'Reset (R)';

  const btnInc = document.createElement('button');
  btnInc.id = 'btn-inc';
  btnInc.className = 'btn';
  btnInc.textContent = '+';
  btnInc.title = 'Incrementa (→ o ↑)';

  controls.appendChild(btnDec);
  controls.appendChild(btnReset);
  controls.appendChild(btnInc);

  // Selettore dello step
  const stepRow = document.createElement('div');
  stepRow.id = 'step-row';
  card.appendChild(stepRow);

  const stepLabel = document.createElement('span');
  stepLabel.id = 'step-label';
  stepLabel.textContent = 'Step:';
  stepRow.appendChild(stepLabel);

  [1, 5, 10].forEach(function (s) {
    const sb = document.createElement('button');
    sb.className = 'step-btn' + (s === 1 ? ' active' : '');
    sb.textContent = s;
    sb.dataset.step = s;
    sb.addEventListener('click', function () {
      step = s;
      document.querySelectorAll('.step-btn').forEach(function (b) {
        b.classList.toggle('active', parseInt(b.dataset.step) === s);
      });
    });
    stepRow.appendChild(sb);
  });

  // Sezione cronologia (sotto la card)
  const histWrap = document.createElement('div');
  histWrap.id = 'history-wrap';
  app.appendChild(histWrap);

  const histTitle = document.createElement('div');
  histTitle.id = 'history-title';
  histTitle.textContent = 'Cronologia';
  histWrap.appendChild(histTitle);

  const histList = document.createElement('div');
  histList.id = 'history-list';
  histWrap.appendChild(histList);

  // Hint scorciatoie da tastiera
  const hint = document.createElement('div');
  hint.id = 'hint';
  hint.innerHTML =
    '<kbd>↑ →</kbd> incrementa &nbsp;·&nbsp; ' +
    '<kbd>↓ ←</kbd> decrementa &nbsp;·&nbsp; ' +
    '<kbd>R</kbd> reset';
  app.appendChild(hint);

  /* ────────────────────────────
     Funzioni di logica
  ──────────────────────────── */

  /**
   * Aggiunge la classe di animazione al display del valore.
   * Rimuove prima le classi esistenti per poter riapplicarle
   * anche in chiamate consecutive.
   * @param {'up'|'down'|'zero'} direction
   */
  function animateValue(direction) {
    valueEl.classList.remove('bump-up', 'bump-down', 'flash-zero');
    void valueEl.offsetWidth; // forza il reflow per resettare l'animazione CSS
    if (direction === 'up')   valueEl.classList.add('bump-up');
    if (direction === 'down') valueEl.classList.add('bump-down');
    if (direction === 'zero') valueEl.classList.add('flash-zero');
  }

  /**
   * Aggiunge una voce alla cronologia e aggiorna il DOM.
   * @param {number} delta - il cambiamento applicato (positivo, negativo o 0)
   */
  function addHistory(delta) {
    history.unshift(delta);
    if (history.length > MAX_HIST) history.pop();

    histList.innerHTML = '';
    history.forEach(function (d) {
      const pill = document.createElement('div');
      pill.className = 'hist-pill ' + (d > 0 ? 'pos' : d < 0 ? 'neg' : '');
      pill.textContent = (d > 0 ? '+' : '') + d;
      histList.appendChild(pill);
    });
  }

  /** Incrementa il counter dello step corrente */
  function increment() {
    count += step;
    valueEl.textContent = count;
    animateValue('up');
    addHistory(+step);
  }

  /** Decrementa il counter dello step corrente */
  function decrement() {
    count -= step;
    valueEl.textContent = count;
    animateValue('down');
    addHistory(-step);
  }

  /** Azzera il counter (solo se non è già 0) */
  function reset() {
    if (count === 0) return;
    count = 0;
    valueEl.textContent = '0';
    animateValue('zero');
    addHistory(0);
  }

  /* ────────────────────────────
     Event listeners
  ──────────────────────────── */
  btnInc.addEventListener('click', increment);
  btnDec.addEventListener('click', decrement);
  btnReset.addEventListener('click', reset);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp'    || e.key === 'ArrowRight') { e.preventDefault(); increment(); }
    if (e.key === 'ArrowDown'  || e.key === 'ArrowLeft')  { e.preventDefault(); decrement(); }
    if (e.key === 'r'          || e.key === 'R')          { reset(); }
  });

})();