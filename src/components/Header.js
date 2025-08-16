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
              <img src={homeicon} alt="" />
              <span>Home</span>
            </Link>
            <Link to="/collection" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={collectionicon} alt="" />
              <span>Collections</span>
            </Link>
            <Link to="/about" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={abouticon} alt="" />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={contacticon} alt="" />
              <span>Contact</span>
            </Link>
            <Link to="/stores" className="sidebar-nav-link" onClick={closeSidebar}>
              <img src={storeicon} alt="" />
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
        
        <Link to="/" style={{textDecoration:"none"}}>
          <div className="logo-brand-container">
            <img
              src={mainlogo}
              alt="Latha Collections Logo"
              className="logo-image"
            />
            <Link to="/" style={{textDecoration:"none"}}>
              <h1 className="brand-title">Latha Collections</h1>
            </Link>  
          </div>
        </Link>

        <nav className="main-navigation">
          <Link to="/" className="nav-link">
            <img alt="home-icon" src={homeicon} style={{width:"18px", height:"18px"}} />
            Home
          </Link>
          <Link to="/collection" className="nav-link">
            <img alt="collection-icon" src={collectionicon} style={{marginRight:"3px"}} />
            Collections
          </Link>
          <Link to="/about" className="nav-link">
            <img alt="about-icon" src={abouticon} style={{width:"20px", height:"20px", marginRight:"-5px"}} />
            About Us
          </Link>
          <Link to="/contact" className="nav-link">
            <img alt="contact-icon" src={contacticon} style={{width:"20px", height:"20px"}} />
            Contact
          </Link>
          <Link to="/stores" className="nav-link">
            <img alt="store-icon" src={storeicon} style={{width:"18px", height:"18px"}} />
            Stores
          </Link>
        </nav>
      </header> 
    </>
  );
}

export default Header;
