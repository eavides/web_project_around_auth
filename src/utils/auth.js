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

export const register = (password, email) => {
  console.log(password);
  console.log(email);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      // Accept: "application/json",
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
      //Accept: "application/json",
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

// export const authorize = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ password, email }),
//   })
//     .then((response) => {
//       console.log(response.json());
//       return response.json();
//     })
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         return data;
//       }
//     })
//     .catch((err) => console.log(err));
// };

export const getContent = (token) => {
  return fetch("https://around.nomoreparties.co/v1/web_es_10/users/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        return data;
      } else {
        return; // debemos hacer esto para evitar errores ESLint
      }
    })
    .catch((err) => console.log(err));
  // console.log(`${localStorage.getItem("token")}`);
  // return fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // })
  //   .then((response) => response.json())
  //   .catch((err) => {
  //     console.log(err);
  //     return false;
  //   });
};
