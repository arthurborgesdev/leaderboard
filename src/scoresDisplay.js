export const showScores = (entries) => {
  const scoresDisplay = document.getElementById('scores-display');
  entries.forEach(entry => scoresDisplay.insertAdjacentHTML('beforeend',`
    <div>${entry.name}: ${entry.score}</div>  
  `))
}