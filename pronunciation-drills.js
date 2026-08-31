(() => {
  const synth = window.speechSynthesis;
  const toggle = document.querySelector('#speechToggle');
  const select = document.querySelector('#contrastSelect');
  const choices = document.querySelector('#answerChoices');
  const feedback = document.querySelector('#feedback');
  const score = document.querySelector('#score');
  const playPrompt = document.querySelector('#playPrompt');
  const newRoundButton = document.querySelector('#newRound');
  const revealButton = document.querySelector('#reveal');

  const sets = [
    { id: 'length', label: 'Vowel length', items: [
      { text: 'byt', gloss: 'apartment' }, { text: 'být', gloss: 'to be' },
      { text: 'pan', gloss: 'Mr.' }, { text: 'pán', gloss: 'gentleman' },
      { text: 'pas', gloss: 'passport / waist' }, { text: 'pás', gloss: 'belt / band' }
    ]},
    { id: 'r-rhacek', label: 'r vs ř', items: [
      { text: 'rada', gloss: 'advice' }, { text: 'řada', gloss: 'row / series' }
    ]},
    { id: 'sh-zh', label: 'š vs ž', items: [
      { text: 'šít', gloss: 'to sew' }, { text: 'žít', gloss: 'to live' }
    ]},
    { id: 'h-ch', label: 'h vs ch', items: [
      { text: 'hora', gloss: 'mountain' }, { text: 'chorý', gloss: 'ill' }
    ]},
    { id: 'spelling', label: 'Spelling traps', items: [
      { text: 'cena', gloss: 'price' }, { text: 'čeština', gloss: 'Czech language' },
      { text: 'jsem', gloss: 'I am' }, { text: 'chci', gloss: 'I want' }
    ]}
  ];

  let enabled = true;
  let target = null;
  let answered = false;
  let right = 0;
  let total = 0;

  function voice() {
    if (!synth) return null;
    return synth.getVoices().find(v => /^cs([-_]|$)/i.test(v.lang)) || null;
  }

  function speak(text) {
    if (!synth || !enabled || !text) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'cs-CZ';
    u.rate = 0.78;
    const v = voice();
    if (v) u.voice = v;
    synth.speak(u);
  }

  function currentSet() {
    return sets.find(s => s.id === select.value) || sets[0];
  }

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function renderScore() {
    score.textContent = `${right} / ${total}`;
  }

  function newRound() {
    const set = currentSet();
    const pool = shuffle(set.items);
    target = pool[Math.floor(Math.random() * pool.length)];
    answered = false;
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
    choices.innerHTML = '';

    const optionCount = Math.min(set.items.length, set.id === 'length' || set.id === 'spelling' ? 4 : 2);
    let options = shuffle(set.items.filter(x => x !== target)).slice(0, optionCount - 1);
    options = shuffle([target, ...options]);

    options.forEach(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-choice';
      button.textContent = item.text;
      button.title = item.gloss;
      button.addEventListener('click', () => answer(button, item));
      choices.appendChild(button);
    });
  }

  function answer(button, item) {
    if (answered) return;
    answered = true;
    total += 1;
    const correct = item.text === target.text;
    if (correct) right += 1;
    button.classList.add(correct ? 'correct' : 'wrong');
    [...choices.children].forEach(choice => {
      if (choice.textContent === target.text) choice.classList.add('correct');
    });
    feedback.textContent = correct
      ? `✓ ${target.text} — ${target.gloss}`
      : `That was ${target.text} — ${target.gloss}`;
    feedback.classList.add(correct ? 'good' : 'bad');
    renderScore();
  }

  sets.forEach(set => {
    const option = document.createElement('option');
    option.value = set.id;
    option.textContent = set.label;
    select.appendChild(option);
  });

  select.addEventListener('change', newRound);
  newRoundButton.addEventListener('click', newRound);
  playPrompt.addEventListener('click', () => speak(target?.text));
  revealButton.addEventListener('click', () => {
    if (!target) return;
    feedback.textContent = `${target.text} — ${target.gloss}`;
  });

  document.querySelectorAll('[data-say]').forEach(button => {
    button.addEventListener('click', () => speak(button.dataset.say));
  });

  if (!synth) {
    enabled = false;
    toggle.textContent = '🔇 TTS unavailable';
    toggle.disabled = true;
    playPrompt.disabled = true;
    document.querySelectorAll('[data-say]').forEach(button => button.disabled = true);
  } else {
    toggle.addEventListener('click', () => {
      enabled = !enabled;
      toggle.setAttribute('aria-pressed', String(enabled));
      toggle.textContent = enabled ? '🔊 Czech TTS on' : '🔇 Czech TTS off';
      if (!enabled) synth.cancel();
    });
  }

  renderScore();
  newRound();
})();
