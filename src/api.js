const apiBaseUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
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

  return response.json();
}

const getUsersData = async () => {
  const usersData = await fetch(apiBaseUrl + gameId + "/scores/")
  
  return JSON.parse(usersData);
}

export {createUserData, getUsersData }