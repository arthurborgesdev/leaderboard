import './style.css';
import { createUserData, getUsersData } from './api.js';

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
  const scoresDisplay = document.getElementById('scores-display');

  const usersData = getUsersData();

  usersData.forEach((entry) => scoresDisplay.insertAdjacentHTML('beforeend', `
    <div>${entry.name}: ${entry.score}</div>  
  `));
})

const userDataSubmit = document.getElementById('user-data-submit');

userDataSubmit.addEventListener('click', () => {
  const userName = document.getElementById('user-name');
  const userScore = document.getElementById('user-score');

  if (userName !== "" && userScore !== "") {
    const data = {
      name: userName,
      score: userScore
    }
    
    createUserData(data);

    userName.value = "";
    userScore.value = "";
  }
})