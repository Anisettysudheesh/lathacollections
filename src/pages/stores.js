import React,{useEffect, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import collectionicon from "../logos/collectionicon.svg"
import abouticon from "../logos/abouticon.svg" 
import homeicon from "../logos/homeicon.svg"
import storeicon from "../logos/storeicon.svg"
import contacticon from "../logos/contacticon.svg"
import mainlogo from "../logos/m and t.png"
import whatsapp from "../logos/whatsapp-icon.svg"
import insta from "../logos/insta-icon.svg"
import utube from "../logos/utube-icon.svg"

function Stores() {
  const [scrolled, setScrolled] = useState(false);
       const [hideHeader, setHideHeader] = useState(false);
      const lastScrollY = useRef(0);
             const [sidebarOpen, setSidebarOpen] = useState(false); // Add this state
      
  const stores = [
    {
      id: 1,
      name: "LathaCollections Kapuveedhi",
      address:
        "123 Fashion Street, Textile District, Mumbai, Maharashtra 400001",
      phone: "+91 98765 43210",
      email: "mumbai@lathacollections.com",
      hours: "Mon-Sat: 10:00 AM - 9:00 PM, Sun: 11:00 AM - 7:00 PM",
      features: [
        "Full Collection",
        "Personal Styling",
        "Custom Orders",
        "Alterations",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Latha Collections -     R.K Nagar",
      address: "456 Karol Bagh, Central Delhi, New Delhi 110005",
      phone: "+91 98765 43211",
      email: "delhi@lathacollections.com",
      hours: "Mon-Sat: 10:00 AM - 8:30 PM, Sun: 11:00 AM - 7:00 PM",
      features: ["Curated Collection", "Personal Styling", "Gift Wrapping"],
      image: "/api/placeholder/400/300",
    }
  ];
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
        const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
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
      

      <main className="store-main-content">
        {/* Hero Section */}
        <section className="store-hero-section">
          <div className="hero-content fade-in">
            <div className="hero-title">Visit Our Stores</div>
            <div className="hero-subtitle">
              Experience our exquisite collection in person at any of our
              locations across India. Our knowledgeable staff is ready to help
              you find the perfect saree.
            </div>
          </div>
        </section>

        {/* Store Locator */}
        <section className="section">
          <div className="section-title">Find a Store Near You</div>
          {/* <p className="section-subtitle">
            We have stores in major cities across India. Each location offers a
            unique selection of sarees and personalized service to help you find
            exactly what you're looking for.
          </p> */}

          <div className="grid grid-2" style={{ gap: "32px" }}>
            {stores.map((store) => (
              <div
                key={store.id}
                className="card"
                style={{ display: "flex", overflow: "hidden" }}
              >
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1365.9476446144822!2d80.00393090462443!3d14.45691110538225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8be02756374f%3A0x1f0f54832b13b8f1!2sLatha%20Collections!5e0!3m2!1sen!2sin!4v1751309052772!5m2!1sen!2sin"
                width="600" height="450" 
                allowfullscreen="" 
                loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"
                 className="store-map"></iframe>
                <div className="card-content" style={{ flex: 1 }}>
                  <div
                    className="store-card-title"
                   
                  >
                    {store.name}
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ color: "#d4af37", fontSize: "1.1rem" }}>
                        📍
                      </span>
                      <p
                        style={{
                          margin: 0,
                          color: "#6d5d52",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        {store.address}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ color: "#d4af37", fontSize: "1.1rem" }}>
                        📞
                      </span>
                      <a
                        href={`tel:${store.phone}`}
                        style={{
                          color: "#6d5d52",
                          textDecoration: "none",
                          fontSize: "0.95rem",
                        }}
                      >
                        {store.phone}
                      </a>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ color: "#d4af37", fontSize: "1.1rem" }}>
                        ✉️
                      </span>
                      <a
                        href={`mailto:${store.email}`}
                        style={{
                          color: "#6d5d52",
                          textDecoration: "none",
                          fontSize: "0.95rem",
                        }}
                      >
                        {store.email}
                      </a>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#d4af37", fontSize: "1.1rem" }}>
                        🕒
                      </span>
                      <p
                        style={{
                          margin: 0,
                          color: "#6d5d52",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        {store.hours}
                      </p>
                    </div>
                  </div>

                  
                    {/* <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                        color: "#2c1810",
                      }}
                    >
                      Store Features:
                    </h4> */}
                    {/* <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {store.features.map((feature, index) => (
                        <span
                          key={index}
                          style={{
                            background: "rgba(212, 175, 55, 0.1)",
                            color: "#d4af37",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "0.8rem",
                            fontWeight: "500",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div> */}
                 
                </div>
              </div>
            ))}
          </div>
        </section>

      
{/* 
        Store Policies
        <section className="section">
          <h2 className="section-title">Store Policies & Information</h2>
          <div className="grid grid-2">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">💳 Payment Options</h3>
                <p className="card-description">
                  We accept cash, all major credit cards, debit cards, UPI
                  payments, and digital wallets. EMI options are available for
                  purchases above ₹10,000.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3 className="card-title">🔄 Exchange Policy</h3>
                <p className="card-description">
                  Exchanges are accepted within 7 days of purchase for unworn
                  items with original tags. Store credit is valid for 6 months.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3 className="card-title">📅 Appointment Booking</h3>
                <p className="card-description">
                  Book a personal styling session or custom consultation online
                  or by calling any store directly. Advance booking recommended
                  for weekends.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3 className="card-title">🚗 Parking Information</h3>
                <p className="card-description">
                  Most stores offer validated parking. Check with individual
                  store locations for specific parking arrangements and any
                  associated costs.
                </p>
              </div>
            </div>
          </div>
        </section> */}

     

        {/* Store Features */}
        <section className="section">
          <h2 className="section-title">What Makes Our Stores Special</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="about-card-content">
                <div className="store-card-title">🌟 Curated Collections</div>
                <div className="card-description">
                  Each store features carefully selected sarees that represent
                  the best of regional and traditional styles, ensuring you find
                  unique pieces not available elsewhere.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="about-card-content">
                <div className="store-card-title">🎓 Expert Staff</div>
                <div className="card-description">
                  Our trained staff understands the nuances of different saree
                  styles, fabrics, and occasions, providing informed guidance
                  for your selection.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="about-card-content">
                <div className="store-card-title">🏪 Comfortable Environment</div>
                <div className="card-description">
                  Spacious, well-lit stores with comfortable seating areas and
                  trial rooms designed to make your shopping experience pleasant
                  and relaxed.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

        {/* <div className="store-home-footer">
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
           </div>  */}
           <div className="home-footer">
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
                     </div>
    
    </div>
  );
}

export default Stores;
