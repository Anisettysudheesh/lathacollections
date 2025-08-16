import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import utube from "../logos/utube-icon.svg"
import insta from "../logos/insta-icon.svg"
import whatsapp from "../logos/whatsapp-icon.svg"
import tzyn from "../TZYN MARK.png"

function Contact() {
  const [hovered, setHovered] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div>
      <div className="layout-container">
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
          href="https://wa.me/6303195946"
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
        <p>Phone: +91 63031 95946</p>
        <SocialIcons />
      </section>
      <Testimonials />
      <FAQ />
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
        <a href="https://tzynstudio.com">
          <img src={tzyn} className="tzyn"></img>
        </a>
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

export default Contact;
