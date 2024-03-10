import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src="/logo.png" alt="our site logo image" />
          <p style={{fontSize: '12px', color: '#4B1382'}}>WebCanvas</p>
        </div>
        <p>Home</p>
        <p>Templates</p>
        <p>Contact Us</p>
      </nav>
    </header>
  );
};

export default Navbar;
