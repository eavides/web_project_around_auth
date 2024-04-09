import logo from "../images/Logo.png";
import React from "react";
import CurrentLoginContext from "../contexts/CurrentLoginContext";
function Header() {
  const loginContext = React.useContext(CurrentLoginContext);
  return (
    <header className="header">
      <img alt="Page Logo" className="header__logo" src={logo} />
      <hr className="header__line" />
      <h2>el correo es:{} </h2>
    </header>
  );
}

export default Header;
