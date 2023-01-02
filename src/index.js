import './style.css';

const arr = [
  {
    name: 'abi',
    score: 100,
  },
  {
    name: 'jane',
    score: 90,
  },
  {
    name: 'james',
    score: 100,
  },
  {
    name: 'mimi',
    score: 100,
  },
  {
    name: 'jude',
    score: 100,
  },
];
const scoresBoard = document.getElementById('container');

arr.forEach((e) => {
  const score = document.createElement('p');
  score.innerText = `${e.name}: ${e.score}`;
  scoresBoard.append(score);
});
