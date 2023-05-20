import "./NavBar.css";
import logo from "../../assets/navbar.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src={logo} alt=""
          width={200} 
          height={40}
          preserveAspectRatio="none"/>
          
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Services
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
