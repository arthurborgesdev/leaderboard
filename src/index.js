import './style.css';
import { createUserData, getUsersData } from './api.js';
import { createGame } from './api';

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', async () => {
  const scoresDisplay = document.getElementById('scores-display');

  while(scoresDisplay.firstChild) {
    scoresDisplay.removeChild(scoresDisplay.firstChild);
  }

  const usersData = await getUsersData();

  usersData.result.forEach((entry) => scoresDisplay.insertAdjacentHTML('beforeend', `
    <div>${entry.user}: ${entry.score}</div>  
  `));
})

const userDataSubmit = document.getElementById('user-data-submit');

userDataSubmit.addEventListener('click', async () => {
  let userName = document.getElementById('user-name').value;
  let userScore = document.getElementById('user-score').value;

  if (userName !== "" && userScore !== "") {
    const data = {
      user: userName,
      score: userScore
    }
    
    await createUserData(data);

    userName = "";
    userScore = "";
  }
})

document.addEventListener("DOMContentLoad", () => createGame(`Game created at: ${new Date()}`));