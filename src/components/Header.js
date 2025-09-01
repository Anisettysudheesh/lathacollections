import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainlogo from "../logos/m and t.png";
import collectionicon from "../logos/collectionicon.svg";
import abouticon from "../logos/abouticon.svg";
import homeicon from "../logos/homeicon.svg";
import storeicon from "../logos/storeicon.svg";
import contacticon from "../logos/contacticon.svg";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <img src={mainlogo} alt="Logo" className="sidebar-logo" />
            <h2 className="sidebar-title">Latha Collections</h2>
            <button className="sidebar-close" onClick={closeSidebar}>×</button>
          </div>
          <nav className="sidebar-navigation">
            <Link to="/" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={homeicon} alt="Home" />
              <span>Home</span>
            </Link>
            <Link to="/collection" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={collectionicon} alt="Collections" />
              <span>Collections</span>
            </Link>
            <Link to="/about" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={abouticon} alt="About Us" />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={contacticon} alt="Contact" />
              <span>Contact</span>
            </Link>
            <Link to="/stores" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={storeicon} alt="Stores" />
              <span>Stores</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Fixed Header */}
      <header className="fixed-header">
        {/* Hamburger Menu Button */}
        <button className="hamburger-menu" onClick={toggleSidebar}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <Link to="/" className="brand-link">
          <div className="logo-brand-container">
            <img
              src={mainlogo}
              alt="Latha Collections Logo"
              className="logo-image"
            />
            <h1 className="brand-title">Latha Collections</h1>
          </div>
        </Link>

        <nav className="main-navigation">
          <Link to="/" className="nav-link">
            <img alt="Home" src={homeicon} className="nav-icon nav-icon--18" />
            Home
          </Link>
          <Link to="/collection" className="nav-link">
            <img alt="Collections" src={collectionicon} className="nav-icon nav-icon--mr-3" />
            Collections
          </Link>
          <Link to="/about" className="nav-link">
            <img alt="About Us" src={abouticon} className="nav-icon nav-icon--20 nav-icon--tight" />
            About Us
          </Link>
          <Link to="/contact" className="nav-link">
            <img alt="Contact" src={contacticon} className="nav-icon nav-icon--20" />
            Contact
          </Link>
          <Link to="/stores" className="nav-link">
            <img alt="Stores" src={storeicon} className="nav-icon nav-icon--18" />
            Stores
          </Link>
        </nav>
      </header> 
    </>
  );
}

export default Header;
