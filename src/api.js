const showScores = (entries) => {
  const scoresDisplay = document.getElementById('scores-display');

  entries.forEach((entry) => scoresDisplay.insertAdjacentHTML('beforeend', `
    <div>${entry.name}: ${entry.score}</div>  
  `));
};

const apiBaseUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
const gameId = "xxluFQBeRwbN9ctGU2td";

async const createUserData = (data) => {
  const response = await fetch(apiBaseUrl + gameId + "/scores/", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return response.json();
}

async const getUsersData = () => {
  const usersData = await fetch(apiBaseUrl + gameId + "/scores/")
  
  return JSON.parse(usersData);
}

exports.module = {
  createUserData: createUserData,
  getUsersData: getUsersData,
};