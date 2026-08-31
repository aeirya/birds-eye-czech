(() => {
  const synth = window.speechSynthesis;
  const toggle = document.querySelector('#speechToggle');
  const buttons = [...document.querySelectorAll('[data-say]')];
  let enabled = true;
  let activeButton = null;

  function czechVoice() {
    if (!synth) return null;
    const voices = synth.getVoices();
    return voices.find(v => /^cs([-_]|$)/i.test(v.lang)) || null;
  }

  function clearActive() {
    if (activeButton) activeButton.classList.remove('is-speaking');
    activeButton = null;
  }

  function speak(button) {
    if (!synth || !enabled) return;
    synth.cancel();
    clearActive();

    const utterance = new SpeechSynthesisUtterance(button.dataset.say);
    utterance.lang = 'cs-CZ';
    utterance.rate = 0.82;
    const voice = czechVoice();
    if (voice) utterance.voice = voice;

    activeButton = button;
    button.classList.add('is-speaking');
    utterance.onend = clearActive;
    utterance.onerror = clearActive;
    synth.speak(utterance);
  }

  buttons.forEach(button => button.addEventListener('click', () => speak(button)));

  if (!synth) {
    if (toggle) {
      toggle.textContent = '🔇 TTS unavailable';
      toggle.disabled = true;
      toggle.setAttribute('aria-pressed', 'false');
    }
    buttons.forEach(button => button.disabled = true);
    return;
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      enabled = !enabled;
      toggle.setAttribute('aria-pressed', String(enabled));
      toggle.textContent = enabled ? '🔊 Czech TTS on' : '🔇 Czech TTS off';
      if (!enabled) {
        synth.cancel();
        clearActive();
      }
    });
  }
})();
