const missions = [
  { id: 'basics', label: 'First contact', icon: '👋' },
  { id: 'airport', label: 'Airport + transport', icon: '✈️' },
  { id: 'dorm', label: 'Kolej 17. listopadu', icon: '🏠' },
  { id: 'shopping', label: 'Buy setup stuff', icon: '🛒' },
  { id: 'food', label: 'Food + cafés', icon: '🍽️' },
  { id: 'travel', label: 'Back to the airport / Spain', icon: '🧳' },
];

const phrases = [
  { czech: 'Dobrý den.', english: 'Hello / good day.', missions: ['basics','dorm','shopping','food'], tags: ['hello','polite'], note: 'The safe default greeting with strangers, staff, reception, shops, etc.' },
  { czech: 'Prosím.', english: 'Please / here you go / you’re welcome.', missions: ['basics','dorm','shopping','food'], tags: ['please','polite'], note: 'One of the highest-return Czech words. Its exact meaning depends on context.' },
  { czech: 'Děkuji. / Díky.', english: 'Thank you. / Thanks.', missions: ['basics','dorm','shopping','food'], tags: ['thanks'], note: 'Děkuji is neutral/polite; díky is casual.' },
  { czech: 'Promiňte.', english: 'Excuse me / sorry.', missions: ['basics','airport','shopping'], tags: ['sorry','attention'], note: 'Useful for getting someone’s attention or apologising politely.' },
  { czech: 'Nerozumím.', english: 'I don’t understand.', missions: ['basics','airport','dorm','shopping','food'], tags: ['understand','communication'], note: 'ne- is the ordinary verbal negation prefix.' },
  { czech: 'Mluvíte anglicky?', english: 'Do you speak English?', missions: ['basics','airport','dorm','shopping'], tags: ['english','communication'], note: 'Mluvíte is the polite/plural “you speak”. Czech has no English-style do-support.' },
  { czech: 'Můžete to prosím zopakovat?', english: 'Could you repeat that, please?', missions: ['basics','airport','dorm'], tags: ['repeat','communication'], note: 'Můžete = can you / could you, polite or plural.' },
  { czech: 'Můžete mi prosím pomoct?', english: 'Could you please help me?', missions: ['basics','airport','dorm','shopping'], tags: ['help'], note: 'mi is a short dative pronoun: “to/for me”.' },

  { czech: 'Kde je zastávka autobusu?', english: 'Where is the bus stop?', missions: ['airport'], tags: ['bus','stop','where'], note: 'zastávka = stop. autobusu is genitive: “of the bus”.' },
  { czech: 'Kde je metro?', english: 'Where is the metro?', missions: ['airport'], tags: ['metro','where'], note: '' },
  { czech: 'Jak se dostanu na kolej 17. listopadu?', english: 'How do I get to the 17 November dorm?', missions: ['airport','dorm'], tags: ['kolej','dorm','directions'], note: 'na kolej uses accusative because it is a destination.' },
  { czech: 'Je to správný směr?', english: 'Is this the right direction?', missions: ['airport'], tags: ['direction','transport'], note: '' },
  { czech: 'Kde mám přestoupit?', english: 'Where should I change / transfer?', missions: ['airport'], tags: ['transfer','change','transport'], note: '' },
  { czech: 'Potřebuji jízdenku.', english: 'I need a ticket.', missions: ['airport','travel'], tags: ['ticket','transport'], note: 'jízdenku is accusative, because it is the object of potřebuji.' },
  { czech: 'Kde si můžu koupit jízdenku?', english: 'Where can I buy a ticket?', missions: ['airport','travel'], tags: ['ticket','buy'], note: 'si is a reflexive dative clitic; don’t worry about mastering it yet.' },
  { czech: 'Platí tahle jízdenka i v metru?', english: 'Is this ticket valid on the metro too?', missions: ['airport'], tags: ['ticket','valid','metro'], note: 'v metru is locative after v “in”.' },

  { czech: 'Mám rezervaci na koleji 17. listopadu.', english: 'I have a reservation at the 17 November dorm.', missions: ['dorm'], tags: ['reservation','kolej','dorm'], note: 'na koleji is locative: a static location.' },
  { czech: 'Jsem student Univerzity Karlovy.', english: 'I’m a Charles University student.', missions: ['dorm'], tags: ['student','university'], note: 'Univerzity Karlovy is the conventional genitive form in the university name.' },
  { czech: 'Tady je můj pas.', english: 'Here is my passport.', missions: ['dorm','travel'], tags: ['passport'], note: '' },
  { czech: 'Kde je recepce?', english: 'Where is reception?', missions: ['dorm'], tags: ['reception','where'], note: '' },
  { czech: 'Kde je prádelna?', english: 'Where is the laundry room?', missions: ['dorm'], tags: ['laundry','where'], note: '' },
  { czech: 'Kde je kuchyň?', english: 'Where is the kitchen?', missions: ['dorm'], tags: ['kitchen','where'], note: '' },
  { czech: 'Jak funguje Wi‑Fi?', english: 'How does the Wi‑Fi work?', missions: ['dorm'], tags: ['wifi','internet'], note: '' },
  { czech: 'Potřebuji klíč / kartu.', english: 'I need a key / card.', missions: ['dorm'], tags: ['key','card'], note: 'After potřebuji, the object is accusative; these forms happen to look like the dictionary forms.' },

  { czech: 'Kde najdu ručníky?', english: 'Where can I find towels?', missions: ['shopping'], tags: ['towel','find','shopping'], note: 'ručníky is plural accusative here.' },
  { czech: 'Potřebuji povlečení.', english: 'I need bed linen.', missions: ['shopping'], tags: ['bed','linen','shopping'], note: 'povlečení is neuter and has the same nominative/accusative shape.' },
  { czech: 'Potřebuji prací prostředek.', english: 'I need laundry detergent.', missions: ['shopping'], tags: ['laundry','detergent'], note: '' },
  { czech: 'Máte levnější variantu?', english: 'Do you have a cheaper option?', missions: ['shopping'], tags: ['cheap','price'], note: 'levnější is comparative: cheaper.' },
  { czech: 'Kolik to stojí?', english: 'How much does it cost?', missions: ['shopping','food'], tags: ['price','cost'], note: '' },
  { czech: 'Můžu platit kartou?', english: 'Can I pay by card?', missions: ['shopping','food'], tags: ['card','pay'], note: 'kartou is instrumental: “by/with card”.' },
  { czech: 'Potřebuji tašku.', english: 'I need a bag.', missions: ['shopping'], tags: ['bag'], note: 'taška → tašku: feminine -a nouns often take -u in accusative singular.' },
  { czech: 'Účtenku, prosím.', english: 'The receipt, please.', missions: ['shopping','food'], tags: ['receipt'], note: 'A compact shop phrase; účtenku is accusative.' },

  { czech: 'Dám si …', english: 'I’ll have …', missions: ['food'], tags: ['order','restaurant'], note: 'A very normal way to order food or drink.' },
  { czech: 'Vodu bez bublinek, prosím.', english: 'Still water, please.', missions: ['food'], tags: ['water','still'], note: 'Literally “water without bubbles”; bez governs genitive.' },
  { czech: 'Vodu s bublinkami, prosím.', english: 'Sparkling water, please.', missions: ['food'], tags: ['water','sparkling'], note: 's “with” governs instrumental here.' },
  { czech: 'Můžu dostat účet?', english: 'Can I get the bill?', missions: ['food'], tags: ['bill','restaurant'], note: 'účet is masculine inanimate; its accusative singular matches nominative.' },

  { czech: 'Potřebuji se dostat na letiště.', english: 'I need to get to the airport.', missions: ['travel'], tags: ['airport','directions'], note: 'na letiště is accusative because it is a destination.' },
  { czech: 'Odkud jede autobus na letiště?', english: 'Where does the airport bus leave from?', missions: ['travel'], tags: ['airport','bus','where from'], note: 'odkud = where from; na letiště = to the airport.' },
  { czech: 'Je to přímý spoj?', english: 'Is it a direct connection?', missions: ['travel'], tags: ['direct','connection'], note: '' },
  { czech: 'Kdy odjíždí poslední autobus?', english: 'When does the last bus leave?', missions: ['travel'], tags: ['last bus','time'], note: '' },
  { czech: 'Kde je odbavení?', english: 'Where is check-in?', missions: ['travel'], tags: ['check-in','airport'], note: '' },
  { czech: 'Kde je bezpečnostní kontrola?', english: 'Where is security control?', missions: ['travel'], tags: ['security','airport'], note: '' },
  { czech: 'Mám jen příruční zavazadlo.', english: 'I only have hand luggage.', missions: ['travel'], tags: ['luggage','hand luggage'], note: '' },
  { czech: 'Letím do Španělska.', english: 'I’m flying to Spain.', missions: ['travel'], tags: ['spain','flight'], note: 'do governs genitive: Španělsko → Španělska.' },
];

const learnedKey = 'birds-eye-czech:learned:v1';
const state = {
  selected: new Set(missions.map(m => m.id)),
  learned: new Set(JSON.parse(localStorage.getItem(learnedKey) || '[]')),
  search: '',
};

const missionFilters = document.querySelector('#missionFilters');
const phraseGrid = document.querySelector('#phraseGrid');
const phraseTemplate = document.querySelector('#phraseTemplate');
const summary = document.querySelector('#summary');
const emptyState = document.querySelector('#emptyState');
const search = document.querySelector('#search');
const translationsToggle = document.querySelector('#translationsToggle');
const learnedToggle = document.querySelector('#learnedToggle');
const progressText = document.querySelector('#progressText');
const progressBar = document.querySelector('#progressBar');

function saveLearned() {
  localStorage.setItem(learnedKey, JSON.stringify([...state.learned]));
}

function phraseId(phrase) {
  return phrase.czech;
}

function renderMissionFilters() {
  missionFilters.replaceChildren();
  for (const mission of missions) {
    const label = document.createElement('label');
    label.className = 'mission-chip';
    label.innerHTML = `<input type="checkbox" ${state.selected.has(mission.id) ? 'checked' : ''}><span><strong>${mission.icon} ${mission.label}</strong><small>${phrases.filter(p => p.missions.includes(mission.id)).length}</small></span>`;
    label.querySelector('input').addEventListener('change', event => {
      event.target.checked ? state.selected.add(mission.id) : state.selected.delete(mission.id);
      renderPhrases();
    });
    missionFilters.append(label);
  }
}

function matches(phrase) {
  if (!phrase.missions.some(mission => state.selected.has(mission))) return false;
  if (!learnedToggle.checked && state.learned.has(phraseId(phrase))) return false;
  const query = state.search.trim().toLowerCase();
  if (!query) return true;
  return [phrase.czech, phrase.english, phrase.note, ...phrase.tags, ...phrase.missions]
    .join(' ')
    .toLowerCase()
    .includes(query);
}

function renderPhrases() {
  phraseGrid.replaceChildren();
  const visible = phrases.filter(matches);

  for (const phrase of visible) {
    const card = phraseTemplate.content.firstElementChild.cloneNode(true);
    const id = phraseId(phrase);
    const learned = state.learned.has(id);
    card.classList.toggle('is-learned', learned);
    card.querySelector('.czech').textContent = phrase.czech;
    card.querySelector('.english').textContent = phrase.english;
    card.querySelector('.phrase-note').textContent = phrase.note;

    const badges = card.querySelector('.badges');
    for (const missionId of phrase.missions) {
      const mission = missions.find(m => m.id === missionId);
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = `${mission.icon} ${mission.label}`;
      badges.append(badge);
    }
    if (phrase.note) {
      const badge = document.createElement('span');
      badge.className = 'badge grammar';
      badge.textContent = 'grammar clue';
      badges.append(badge);
    }

    const checkbox = card.querySelector('.learned-control input');
    checkbox.checked = learned;
    checkbox.addEventListener('change', event => {
      event.target.checked ? state.learned.add(id) : state.learned.delete(id);
      saveLearned();
      renderPhrases();
      renderProgress();
    });

    phraseGrid.append(card);
  }

  summary.textContent = `${visible.length} of ${phrases.length} phrases visible`;
  emptyState.hidden = visible.length !== 0;
}

function renderProgress() {
  const learnedCount = phrases.filter(p => state.learned.has(phraseId(p))).length;
  progressText.textContent = `${learnedCount} / ${phrases.length}`;
  progressBar.style.width = `${(learnedCount / phrases.length) * 100}%`;
}

document.querySelector('#showAll').addEventListener('click', () => {
  state.selected = new Set(missions.map(m => m.id));
  renderMissionFilters();
  renderPhrases();
});

document.querySelector('#resetProgress').addEventListener('click', () => {
  state.learned.clear();
  saveLearned();
  renderPhrases();
  renderProgress();
});

search.addEventListener('input', event => {
  state.search = event.target.value;
  renderPhrases();
});

translationsToggle.addEventListener('change', () => {
  document.body.classList.toggle('hide-translations', !translationsToggle.checked);
});

learnedToggle.addEventListener('change', renderPhrases);

renderMissionFilters();
renderPhrases();
renderProgress();
