// const BASE_URL = "https://register.nomoreparties.co";
// export const register = async (email, password) => {
//   const cuerpo = { password: password, email: email };
//   console.log(cuerpo);

//   return await fetch(`${BASE_URL}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: cuerpo,
//   })
//     .then((response) => {
//       try {
//         if (response.status === 200) {
//           console.log(response.json());
//           return response.json();
//         }
//       } catch (e) {
//         console.log(e);
//         return e;
//       }
//     })
//     .catch((err) => console.log(err));
// };
export const BASE_URL = "https://register.nomoreparties.co";
export const BASE_ANT = "https://around.nomoreparties.co/v1/web_es_05";

export const register = (password, email) => {
  console.log(password);
  console.log(email);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((response) => {
      console.log(response.status);
      try {
        if (response.status === 201) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log(data);
        return data;
      } else {
        return;
      }
    })
    .catch((err) => console.log(err));
};

export const getContent = async (token) => {
  return await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return JSON.stringify(data.data);
    });
};
