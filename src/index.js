import './style.css';

import getScores from './modules/getScore.js';
import setScores from './modules/setScore.js';

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  setScores();
});

const refresh = document.getElementById('refreshBtn');
refresh.addEventListener('click', async () => {
  window.location.reload();
});

getScores();