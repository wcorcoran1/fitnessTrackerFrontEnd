// You can choose to import all your functions, and re-export them here
const apiURL = `https://fitnesstrac-kr.herokuapp.com/api/`;

export const registerUser = async (username, password) => {
  const response = await fetch(`${apiURL}users/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export const userLogin = async (username, password) => {
  const response = await fetch(`${apiURL}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export const myData = async (token) => {
  if (token) {
    try {
      const response = await fetch(`${apiURL}users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const userRoutine = async (username, token) => {
  if (token) {
    const response = await fetch(`${apiURL}users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.json();
    return data;
  } else {
    const response = await fetch(`${apiURL}users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json()
    return data
  }
};

export const getActivities = async ()=>{
  const response = await fetch(`${apiURL}activities`)
  const data = response.json()
  return data
}

