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
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  console.log(response, "!@#$%^%$#@");
  const data = await response.json();
  return data;
};
