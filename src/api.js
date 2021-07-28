const apiBaseUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
const gameId = "xxluFQBeRwbN9ctGU2td";

const createGame = async (name) => {
  const response = await fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(`{name: ${name}`),
  });

  return await response.json();
}


const createUserData = async (data) => {
  const response = await fetch(apiBaseUrl + gameId + "/scores/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

const getUsersData = async () => {
  const response = await fetch(apiBaseUrl + gameId + "/scores/")
  
  const usersData = await response.json();
  return usersData;
}

export {createGame, createUserData, getUsersData }