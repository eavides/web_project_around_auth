import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as auth from "../utils/auth.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(state) {
    return state;
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      return;
    }
    console.log(this.state);
    let { password, email } = this.state;
    auth
      .authorize(password, email)
      .then((data) => {
        console.log(data);
        if (data.token) {
          this.setState(
            {
              email: "",
              password: "",
            },
            () => {
              this.props.setIsLoggedIn(true);
              //this.handleLogin(true);
              this.props.history.push("/");
            }
          );
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="login">
        <h3 className="login__title">Inicia Sesión</h3>
        <form onSubmit={this.handleSubmit} className="login__form form__format">
          <input
            id="email"
            className="login__format"
            required
            name="email"
            type="email"
            value={this.state.username}
            placeholder="Correo Electronico"
            onChange={this.handleChange}
          />
          <input
            id="password"
            className="login__format"
            required
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Contraseña"
            onChange={this.handleChange}
          />
          <div className="login__button-container">
            <button type="submit" className="login__link">
              Inicia Sesión
            </button>
          </div>
        </form>

        <div className="login__signup">
          <Link to="/register" className="signup__link">
            ¿Aún no eres miembro? Regístrate aquí
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as auth from "../utils/auth.js";

// function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       return;
//     }
//     auth
//       .authorize(password, email)
//       .then((res) => {
//         //console.log(res);
//         setIsLoggedIn(true);
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch(console.log);
//   };
//   return (
//     <div className="login">
//       <h3 className="login__title">Inicia Sesión</h3>
//       <form onSubmit={handleSubmit} className="login__form form__format">
//         <input
//           id="email"
//           className="login__format"
//           required
//           name="email"
//           type="email"
//           value={email}
//           placeholder="Correo Electronico"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           id="password"
//           className="login__format"
//           required
//           name="password"
//           type="password"
//           value={password}
//           placeholder="Contraseña"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <div className="login__button-container">
//           <button type="submit" className="login__link">
//             Inicia Sesión
//           </button>
//         </div>
//       </form>

//       <div className="login__signup">
//         <Link to="/register" className="signup__link">
//           ¿Aún no eres miembro? Regístrate aquí
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
