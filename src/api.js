const apiBaseUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
const gameId = "xxluFQBeRwbN9ctGU2td";

const createUserData = async (data) => {
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

  return await response.json();
}

const getUsersData = async () => {
  const response = await fetch(apiBaseUrl + gameId + "/scores/")
  
  const usersData = await response.json();
  return usersData;
}

export {createUserData, getUsersData }