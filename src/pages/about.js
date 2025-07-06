import React,{useEffect, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import "./about.css";
import aboutjourney1 from "../logos/about-journey-1.png"
import aboutjourney2 from "../logos/about-journey-2.png"
import craft1 from "../logos/craft1 (1).png"
import craft2 from "../logos/craft2.png"
import collectionicon from "../logos/collectionicon.svg"
import abouticon from "../logos/abouticon.svg" 
import homeicon from "../logos/homeicon.svg"
import storeicon from "../logos/storeicon.svg"
import contacticon from "../logos/contacticon.svg"
import mainlogo from "../logos/m and t.png"
import aboutpic from "../logos/about-pic.webp"
import whatsapp from "../logos/whatsapp-icon.svg"
import insta from "../logos/insta-icon.svg"
import utube from "../logos/utube-icon.svg"
import tzyn from "../TZYN MARK.png"
function About() {

     const [scrolled, setScrolled] = useState(false);
     const [hideHeader, setHideHeader] = useState(false);
     const [slideIndex, setSlideIndex] = useState(0);
       const lastScrollY = useRef(0);
         const [sidebarOpen, setSidebarOpen] = useState(false); 
  
     
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
               <div className="about-pic-back">
               <a href="https://www.youtube.com/@lathaCollections9"> <img src={aboutpic} className="about-pic"></img></a>
               </div>
  

    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-content-wrapper">
           

          {/* Main Content */}
          <div className="about-main-content">
            <div className="about-content-container">
              {/* Title Section */}
              <div className="about-title-section">
                <div className="about-title-wrapper">
                  <h2 className="about-main-title">About Latha Collections</h2>
                </div>
              </div>

              {/* Introduction */}
              <div className="about-text-section">
                <p className="about-intro-text">
                  Established in Nellore in 1991, Latha Collections has grown
                  from a small family business into a renowned saree
                  manufacturer with two branches. Our journey is rooted in a
                  passion for preserving the rich heritage of South Indian
                  textiles while embracing contemporary designs. We are excited
                  to announce our upcoming expansion into Vijayawada, bringing
                  our exquisite collections to a new audience.
                </p>
              </div>

              {/* Our Philosophy */}
              <div className="about-section-title-wrapper">
                <h3 className="about-section-title">Our Philosophy</h3>
              </div>

              <div className="about-section-content">
                <p className="about-section-text">
                  At Latha Collections, we believe in the timeless elegance of
                  sarees and the artistry behind their creation. Our philosophy
                  centers on three core principles: <b>1.Craftsmanship:</b> We are
                  committed to preserving traditional weaving techniques, passed
                  down through generations, while innovating with modern designs
                  and materials. <b>2.Quality:</b> We use only the finest
                  materials, ensuring that each saree is a masterpiece of
                  quality and durability. <b>3.Customer Satisfaction:</b> We
                  strive to provide exceptional customer service, ensuring that
                  every purchase is a delightful experience.
                </p>
              </div>

              {/* Our Journey */}
              <div className="about-section-title-wrapper">
                <h3 className="about-section-title">Our Journey</h3>
              </div>

              <div className="about-section-content">
                <p className="about-section-text">
                  From our humble beginnings in Nellore, Latha Collections has
                  evolved into a trusted name in sarees. Our growth is a
                  testament to our dedication to quality and customer
                  satisfaction. We have expanded to two branches, serving a
                  wider clientele, and are now preparing to open a new store in
                  Vijayawada. This expansion marks a significant milestone in
                  our journey, allowing us to share our passion for sarees with
                  more customers.
                </p>
              </div>

              {/* Image Gallery 1 */}
              <div className="about-image-gallery">
                <div className="about-gallery-container">
                  <div className="about-gallery-row">
                    <img
                    src={aboutjourney1}
                      alt="Latha Collections Store Interior"
                      className="about-gallery-image-large"
                    />
                    <img
                       src={aboutjourney2}                     
                        alt="Elegant Store Display"
                      className="about-gallery-image-small"
                    />
                  </div>
                </div>
              </div>

              {/* Our Craftsmanship */}
              <div className="about-section-title-wrapper">
                <h3 className="about-section-title">Our Craftsmanship</h3>
              </div>

              <div className="about-section-content">
                <p className="about-section-text">
                  Our sarees are crafted by skilled artisans who pour their
                  heart and soul into every weave. From the selection of the
                  finest silk and cotton to the intricate detailing of the
                  designs, each saree is a testament to our commitment to
                  excellence. We blend traditional techniques with contemporary
                  aesthetics, creating sarees that are both timeless and modern.
                </p>
              </div>

              {/* Image Gallery 2 */}
              <div className="about-image-gallery">
                <div className="about-gallery-container">
                  <div className="about-gallery-row">
                    <img
                      src={craft1}
                      alt="Traditional Weaving Process"
                      className="about-gallery-image-large"
                    />
                    <img
                      src={craft2}
                      alt="Artisan at Work"
                      className="about-gallery-image-small"
                    />
                  </div>
                </div>
              </div>

              {/* Our Commitment */}
              <div className="about-section-title-wrapper">
                <h3 className="about-section-title">Our Commitment</h3>
              </div>

              <div className="about-section-content">
                <p className="about-section-text">
                  We are dedicated to ethical and sustainable practices. Our
                  artisans work in a safe and fair environment, and we strive to
                  minimize our environmental impact. We believe in giving back
                  to the community that has supported us throughout our journey.
                  Our vision for the future includes expanding our reach while
                  maintaining our core values of quality, craftsmanship, and
                  customer satisfaction.
                </p>
              </div>

              {/* CTA Button */}
              <div className="about-cta-section">
                <Link to="/collection" className="about-cta-button">
                  <div className="about-cta-content">
                    <span className="about-cta-text">
                      Explore Our Collections
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-home-footer">
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
         
 {/* <div className="home-footer">
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
          </div> */}
    </div>
  );
}

export default About;
