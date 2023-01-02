import './style.css';

const array = [
  {
    name: 'Abi',
    score: 100,
  },
  {
    name: 'Jane',
    score: 90,
  },
  {
    name: 'James',
    score: 100,
  },
  {
    name: 'Mimi',
    score: 100,
  },
  {
    name: 'Jude',
    score: 100,
  },
];
const scoresBoard = document.getElementById('container');

array.forEach((e) => {
  const score = document.createElement('p');
  score.innerText = `${e.name}: ${e.score}`;
  scoresBoard.append(score);
});
