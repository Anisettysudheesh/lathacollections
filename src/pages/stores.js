import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import whatsapp from "../logos/whatsapp-icon.svg"
import insta from "../logos/insta-icon.svg"
import utube from "../logos/utube-icon.svg"
import tzyn from "../TZYN MARK.png"

function Stores() {
  const stores = [
    {
      id: 1,
      name: "Latha Collections - Kapuveedhi",
      address:"Kapu St, Ramji Nagar, Nellore, Andhra Pradesh-524001, India",
      phone: "+91 63031 95946",
      email: "lathacollections9@gmail.com",
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
      name: "Latha Collections - R.K Nagar",
      address: "R.K Nagar, Nellore, Andhra Pradesh-524001, India",
      phone: "+91 63031 95946",
      email: "lathacollections9@gmail.com",
      hours: "Mon-Sat: 10:00 AM - 8:30 PM, Sun: 11:00 AM - 7:00 PM",
      features: ["Curated Collection", "Personal Styling", "Gift Wrapping"],
      image: "/api/placeholder/400/300",
    }
  ];

  return (
    <div className="app">
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
                  className="store-map"
                  title="map"></iframe>
                <div className="card-content" style={{ flex: 1 }}>
                  <div className="store-card-title">
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
                </div>
              </div>
            ))}
          </div>
        </section>

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

      <div className="home-footer">
        <div className="foot-1-section">
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Shipping & Returns</h3>
        </div>
        <div className="foot-2-section">
          <a href="https://www.instagram.com/latha_collections9"><img alt="insta-icon" src={insta}></img></a>
          <a href="https://www.youtube.com/@lathaCollections9"><img alt="youtubr-icon" src={utube}></img></a> 
          <a href="https://chat.whatsapp.com/BMUUUdo0Fyi00X08fYepAu"><img alt="whatsapp-icon" src={whatsapp}></img></a> 
        </div>
        <div className="foot-3-section">
          © 2024 Latha Collections. All rights reserved.
        </div>
        <div className="footer-4-section">
          <a href="https://tzynstudio.com">
            <img alt="tzyn" src={tzyn} className="tzyn"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stores;
