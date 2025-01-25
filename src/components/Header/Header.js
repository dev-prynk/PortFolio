import React, { useState, useEffect } from 'react';
import './Header.css';
import { MenuOutlined } from '@ant-design/icons'; // Import MenuOutlined icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="portfolio-title">Priyank Suthar</h1>
      </div>
      <nav className="header-center">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <a href="#contact">
          <button className="theme-btn hire-me-btn">
            Hire Me
          </button>
        </a>
        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <MenuOutlined style={{ fontSize: '24px', color: '#fff' }} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
