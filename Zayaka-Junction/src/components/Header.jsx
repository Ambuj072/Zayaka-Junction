import logo from "../assets/Zayaka-junction.png";
import "../main.css";
import "../cart.css";


const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Zayaka logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;