// You can choose to import all your functions, and re-export them here
const apiURL = `http://fitnesstrac-kr.herokuapp.com/api`;

export const registerUser = async (username, password) => {
  const response = await fetch(`${apiURL}users/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      body: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  return data;
};
