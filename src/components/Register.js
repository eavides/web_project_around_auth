import React from "react";
import * as auth from "../utils/auth.js";
import { Link, withRouter } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
    // this.isRegister = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleRegister() {
    this.props.handleRegister(true);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      console.log("es igual el password");
      let { password, email } = this.state;
      auth.register(password, email).then((res) => {
        if (res) {
          // this.setState({ isRegistered: true }, () => {

          // });
          this.handleRegister();
          this.props.history.push("/login");
        } else {
          console.log("o por aca aca");
          this.setState({
            message: "¡Algo salió mal!",
          });
        }
      });
    }
  }
  render() {
    return (
      <div className="register">
        <h3 className="register__title">Regístrate</h3>
        <form className="register__form form__format">
          <input
            name="email"
            type="email"
            className="register__format"
            value={this.state.email}
            placeholder="Correo Electrónico"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            className="register__format"
            placeholder="Contraseña"
          />
          <input
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            className="register__format"
            placeholder="Confirmar Contraseña"
          />
          <div className="register__button-container">
            <button onClick={this.handleSubmit} className="register__link">
              Regístrate
            </button>
          </div>
        </form>

        <div className="register__signin">
          <Link to="/login" className="register__login-link">
            ¿Ya eres miembro? Inicia sesión aquí
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
