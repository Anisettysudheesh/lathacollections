import React,{useEffect, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import collectionicon from "../logos/collectionicon.svg"
import abouticon from "../logos/abouticon.svg" 
import homeicon from "../logos/homeicon.svg"
import storeicon from "../logos/storeicon.svg"
import contacticon from "../logos/contacticon.svg"
import mainlogo from "../logos/m and t.png"
import utube from "../logos/utube-icon.svg"
import insta from "../logos/insta-icon.svg"
import whatsapp from "../logos/whatsapp-icon.svg"

import tzyn from "../TZYN MARK.png"
function Contact() {
  const [scrolled, setScrolled] = useState(false);
     const [hideHeader, setHideHeader] = useState(false);
    const lastScrollY = useRef(0);
      const [hovered, setHovered] = useState(null);
       const [slideIndex, setSlideIndex] = useState(0);
              const [sidebarOpen, setSidebarOpen] = useState(false); // Add this state
       

         const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
     useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
  
        if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
          // Scrolling down
          setHideHeader(true);
        } else {
          // Scrolling up
          setHideHeader(false);
        }
        lastScrollY.current = window.scrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div>
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
      
            
      
   

      <div className="layout-container">
          {/* Header with Hamburger Menu */}
              <header className={`home-header${scrolled ? " scrolled" : ""}${hideHeader ? " hide" : ""}`}>
                {/* Hamburger Menu Button */}
                <button className="hamburger-menu" onClick={toggleSidebar}>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
      
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
      
                <nav className="main-navigation">
                  {/* Existing navigation links */}
                  <Link to="/" className="nav-link">
                    <img src={homeicon} style={{width:"18px", height:"18px"}} />
                    Home
                  </Link>
                  <Link to="/collection" className="nav-link">
                    <img src={collectionicon} style={{marginRight:"3px"}} />
                    Collections
                  </Link>
                  <Link to="/about" className="nav-link">
                    <img src={abouticon} style={{width:"20px", height:"20px", marginRight:"-5px"}} />
                    About Us
                  </Link>
                  <Link to="/contact" className="nav-link">
                    <img src={contacticon} style={{width:"20px", height:"20px"}} />
                    Contact
                  </Link>
                  <Link to="/stores" className="nav-link">
                    <img src={storeicon} style={{width:"18px", height:"18px"}} />
                    Stores
                  </Link>
                </nav>
              </header> 
           

            <MainContent />
            <Footer />
    
    </div>
  </div>
  );
}

function MainContent() {
  return (
    <main className="content">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out via WhatsApp or social media.</p>
        <a
          className="whatsapp-btn"
          href="https://wa.me/7989214262"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          Message us on WhatsApp
        </a>
      </section>
      <section className="contact-info">
        <h3>Connect with Us</h3>
        <p>Email: support@lathacollections.com</p>
        <p>Phone: +91 98765 43210</p>
        <SocialIcons />
      </section>
      <Testimonials />
      <FAQ />
      {/* <StoreLocation /> */}
    </main>
  );
}

function Footer() {
  return (
          <div className="contact-footer">
         <div className="foot-1-section">
           <h3>Privacy Policy</h3>
             <h3>Terms of Service</h3>
               <h3>Shipping & Returns</h3>
   
         </div>
         <div className="foot-2-section">
          <a href="https://www.instagram.com/latha_collections9"><img src={insta}></img></a>
          <a href="https://www.youtube.com/@lathaCollections9"><img src={utube}></img></a> 
          <a href="https://chat.whatsapp.com/BMUUUdo0Fyi00X08fYepAu"><img src={whatsapp}></img></a> 
   
         </div>
         <div className="foot-3-section">
               © 2024 Latha Collections. All rights reserved.
           </div>
           <div className="footer-4-section">
          <a href="https://tzynstudio.com"> <img src={tzyn} className="tzyn"></img></a>
         

        </div>
   
       </div>
  );
}

// Utility components (icons, testimonials, etc.)
function IconButton({ children }) {
  return <button className="icon-button">{children}</button>;
}

function LogoIcon() { 
  return <div className="logo-icon">Logo</div>; 
}

function SearchIcon() { 
  return <svg className="icon">/* ... */</svg>; 
}

function CartIcon() { 
  return <svg className="icon">/* ... */</svg>; 
}

function SocialIcons({ size = "20px" }) {
  const icons = [
    { src: insta, alt: "Instagram", link: "https://www.instagram.com/latha_collections9" },
    { src: utube, alt: "YouTube", link: "https://www.youtube.com/@lathaCollections9" },
    { src: whatsapp, alt: "WhatsApp", link: "https://chat.whatsapp.com/BMUUUdo0Fyi00X08fYepAu" }
  ];

  return (
    <div className="social-icons">
      {icons.map(({ src, alt, link }) => (
        <a href={link} key={alt} target="_blank" rel="noopener noreferrer">
          <div className="social-bubble" style={{ width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={src} alt={alt} style={{ width: "30px", height: "30px" }} />
          </div>
        </a>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h3>Customer Testimonials</h3>
      {[
        {
          name: "Priya Sharma",
          time: "2 months ago",
          rating: 5,
          text: "I absolutely love the saree ... Highly recommend!"
        },
        {
          name: "Anjali Patel",
          time: "3 months ago",
          rating: 5,
          text: "The customer service ... I'm thrilled with my purchase!"
        }
      ].map((t, i) => (
        <div key={i} className="testimonial">
          <p className="name">{t.name}</p>
          <p className="time">{t.time}</p>
          <p className="stars">{Array(t.rating).fill("★").join("")}</p>
          <p className="text">{t.text}</p>
        </div>
      ))}
    </section>
  );
}

function FAQ() {
  return (
    <section className="faq">
      <h3>Frequently Asked Questions</h3>
      {[
        { q: "What is your return policy?", a: "We offer a 30‑day return policy..." },
        { q: "How long does shipping take?", a: "Shipping times vary by location..." }
      ].map((f, i) => (
        <details key={i} open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

// function StoreLocation() {
//   return (
//     <section className="store-location">
//       <h3>Our Store Location</h3>
//       <div className="map-placeholder">[Map Image]</div>
//     </section>
//   );
// }

export default Contact;