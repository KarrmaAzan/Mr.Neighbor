import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import Logo3 from "../assets/Logo Final.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const dropdownRef = useRef(null);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 50 && currentScrollPos > lastScrollPos) {
        setIsHidden(true);  // Hide when scrolling down
      } else {
        setIsHidden(false); // Show when scrolling up
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Toggle dropdown menu visibility
  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
      {/* Left Section: Hamburger Menu with Title */}
      <div className="hamburger-title-container">
        <div className="hamburger" onClick={handleHamburgerClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
     
      </div>

      {/* Center Section: Logo */}
      <div className="navbar-logo">
        <button onClick={() => (window.location.href = '/')}>
          <img src={Logo3} alt="Logo" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <ul className="dropdown-menu" ref={dropdownRef}>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
          <li><Link to="/quote" onClick={() => setMenuOpen(false)}>Quote</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
