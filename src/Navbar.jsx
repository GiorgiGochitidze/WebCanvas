import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src="/logo.png" alt="our site logo image" />
          <p style={{fontSize: '12px', color: '#4B1382'}}>WebCanvas</p>
        </div>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/'><p>Home</p></Link>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/TechWorks'><p>Templates</p></Link>
        <p>Contact Us</p>
      </nav>
    </header>
  );
};

export default Navbar;
