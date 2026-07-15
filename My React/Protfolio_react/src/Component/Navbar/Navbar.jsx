import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Portfolio</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="hire-btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;