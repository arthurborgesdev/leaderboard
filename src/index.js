import './style.css';
import { createGame, createUserData, getUsersData } from './api.js';

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
  const scoresDisplay = document.getElementById('scores-display');

  const usersData = getUsersData();

  usersData.forEach((entry) => scoresDisplay.insertAdjacentHTML('beforeend', `
    <div>${entry.name}: ${entry.score}</div>  
  `));
})

const userName = document.getElementById

document.addEventListener('DOMContentLoaded', () => showScores(entries));