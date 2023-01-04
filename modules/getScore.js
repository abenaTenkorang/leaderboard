const getScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/H6BdyOXeGm1KqT7Bneve/scores',
  );

  const info = await response.json();

  const scoreBoard = document.getElementById('container');
  const createIScores = (info) => {
    info.result.forEach((e) => {
      const personScore = document.createElement('p');
      personScore.innerText = `${e.user}: ${e.score}`;
      scoreBoard.append(personScore);
    });
  };
  createIScores(info);
};
export { getScores as default };