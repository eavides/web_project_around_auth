import logo from "../images/Logo.png";
function Header() {
  return (
    <header className="header">
      <img alt="Page Logo" className="header__logo" src={logo} />
      <hr className="header__line" />
    </header>
  );
}

export default Header;
