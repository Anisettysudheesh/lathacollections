import React,{useEffect, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import "./home.css";
import video from "../video/Firefly A detailed motion of camera showcasing a premium kanchi pattu gold saree in a cinematic way.mp4"
import mainlogo from "../logos/m and t.png"
import imageback from "../logos/kota2.png"
import imageback2 from "../logos/leharia2.png"
import imageback3 from "../logos/batik1.png"
import collectionicon from "../logos/collectionicon.svg"
import abouticon from "../logos/abouticon.svg" 
import homeicon from "../logos/homeicon.svg"
import storeicon from "../logos/storeicon.svg"
import contacticon from "../logos/contacticon.svg"
import lehariasaree from "../collectionlogos/LehariyaGeorgetteSarees.webp"

import countsaree from "../collectionlogos/100countsaree.webp"
import mangalagiripattusaree from "../collectionlogos/Mangalagiripattusaree.webp"
import zaricottonsaree from "../collectionlogos/zaricottonsaree.webp"
import chanderisaree from "../collectionlogos/ChanderiSaree.webp"
import kotasaree from "../collectionlogos/KotaSaree.webp"
import mtsaree from "../collectionlogos/m&tsaree.webp"
import uppadasaree from "../collectionlogos/uppadasaree.webp"
import arrow from "../logos/arrow.svg"
import batiksaree from "../collectionlogos/BatikSaree.png"
import customerlogo from "../footerlogos/customerlogo.webp"
import deliverylogo from "../footerlogos/deliverylogo.webp"
import manufacturinglogo from "../footerlogos/manufacturinglogo.webp"
import whatsapp from "../logos/whatsapp-icon.svg"
import insta from "../logos/insta-icon.svg"
import utube from "../logos/utube-icon.svg"


function Home() {

   const [scrolled, setScrolled] = useState(false);
   const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);
    const [hovered, setHovered] = useState(null);
     const [slideIndex, setSlideIndex] = useState(0);
       const [sidebarOpen, setSidebarOpen] = useState(false); // Add this state
const [videoPlaying, setVideoPlaying] = useState(false);
const [audioEnabled, setAudioEnabled] = useState(false);
const videoRef = useRef(null);
     
  const images = [
    {
      src: imageback,
      text: "Crafted with very hands and beautiful",
    },
    {
      src: imageback2,
      text: "Crafted with very hands and beautiful",
    },
    {
      src: imageback3,
      text: "Crafted with very hands and beautiful",
    },
  ];
   useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    setSidebarOpen(false);
  };


   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (window.scrollY > lastScrollY.current && window.scrollY > 20) {
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
  const enableVideoAudio = () => {
  if (videoRef.current) {
    videoRef.current.muted = false;
    videoRef.current.volume = 0.6; // Set volume to 60%
    setAudioEnabled(true);
    setVideoPlaying(true);
  }
};
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

      {/* Hero Section */}
      <div className="hero-section">
        <video
    ref={videoRef}
    src={video}
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
    controls={false}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }}
  >
    Your browser does not support the video tag.
  </video>
  
  {!audioEnabled && (
    <div className="video-audio-overlay" onClick={enableVideoAudio}>
      <div className="audio-enable-button">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <span>Click to Enable Audio</span>
      </div>
    </div>
  )}
      {/* <div className="description-back">
         

      </div>
      <p className="description-text">
          Since 1991, Latha Collections has been synonymous with exquisite South Indian sarees, blending tradition with contemporary elegance. 
Our curated collections reflect the rich heritage and craftsmanship of South India, offering timeless pieces for every occasion.
        </p> */}
       
     
      </div>

     <div className="reels-background">

       <div className="reels-heading">
        Exclusive Varieties

      </div>

  
      {/* Reels */}
     

      <div className="showcase-box">
        <div 
        className={`reel-1${hovered === 2 ? " reel-1-translate" : ""}${hovered === 3 ? " reel-3-hovered-reel1-reel2" : "" }`}
            onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
          tabIndex={0}
        >
          <img src={lehariasaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 1"/>
          <div></div>
          <div className="reel-info-1">
            <div className="reel-info-1-inner">
               <h3> Premium Lehariya Georgette</h3>
            <p>
Bursting with Rajasthani charm, Lehariya Georgette sarees show case vivid, hand-dyed wave patterns on airy fabric—ideal for festive flair and cultural elegance            </p>
  <Link to="/collection" style={{textDecoration:"none",color:"black"}}><div className="goto" > Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
           
          </div>
        </div>
        <div className={`reel-2${hovered === 3 ? " reel-3-hovered-reel1-reel2" : " "}`}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}       
          tabIndex={0}
        >
          <img src={countsaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 2"/>
          <div className="reel-info-2">
            <div className="reel-info-1-inner">
               <h3>100 Count </h3>
            <p>
Crafted from premium superfine cotton, 100 Count sarees offer exceptional softness, featherlight comfort, and a smooth, elegant drape—perfect for refined daily wear.            </p>
            <Link to="/collection" style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 


            </div>
           
          </div>
        </div>
        <div className="reel-3"
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}>
          <img src={mangalagiripattusaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 3"/>
          <div className="reel-info-3">
            <div className="reel-info-1-inner">
            <h3>Mangalagiri Pattu</h3>
            <p>
Mangalagiri’s famed silk sarees flaunt ultra-fine texture, opulent hues, iconic zari borders, fusing regal silk grace with 
masterful South Indian artistry for heirloom celebrations.            </p>
  <Link to="/collection" style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
          </div>
        </div>
      </div>
      {/*Reel section 2 */}
        {/* Reels */}

      <div className="showcase-box">
        <div 
        className={`reel-4${hovered === 5 ? " reel-4-translate" : ""}${hovered === 6 ? " reel-6-hovered-reel4-reel5" : "" }`}
            onMouseEnter={() => setHovered(4)}
        onMouseLeave={() => setHovered(null)}
          tabIndex={0}
        >
          <img src={batiksaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 1"/>
          <div className="reel-info-4">
            <div className="reel-info-1-inner">
                  <h3>Batik Sarees</h3>
            <p>
Batik sarees, crafted with ancient wax-resist art bold motifs, rustic hues, and artisanal charm blending heritage and modern flair for the truly expressive soul.            </p>
  <Link to="/collection" style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
        
          </div>
        </div>
        <div className={`reel-5${hovered === 6 ? " reel-6-hovered-reel4-reel5" : " "}`}
        onMouseEnter={() => setHovered(5)}
        onMouseLeave={() => setHovered(null)}
          tabIndex={0}
        >
          <img src={kotasaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 2"/>
          <div className="reel-info-5">
            <div className="reel-info-1-inner">
               <h3>Kota</h3>
            <p>
Zari Kota sarees from Rajasthan blend with lightness royal elegance,
 featuring sheer checks and shimmering zarifor graceful daily wear and festive finesse.            </p>
  <Link to="/collection" style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
           
          </div>
        </div>
        <div className="reel-6"
        onMouseEnter={() => setHovered(6)}
        onMouseLeave={() => setHovered(null)}>
          <img src={mtsaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 3"/>
          <div className="reel-info-6">
            <div className="reel-info-1-inner">
              <h3>M&T Saree</h3>
            <p>
M&T Sarees fuse bold contemporary style with timeless tradition, crafted with precision and flair—designed for the modern, confident woman rooted in rich cultural elegance.            </p>
  <Link to="/collection"style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
            
          </div>
        </div>
      </div> 
       

      <div className="showcase-box">
        <div 
        className={`reel-7${hovered === 8 ? " reel-7-translate" : ""}${hovered === 9 ? " reel-9-hovered-reel7-reel8" : "" }`}
            onMouseEnter={() => setHovered(7)}
        onMouseLeave={() => setHovered(null)}
          tabIndex={0}
        >
          <img src={chanderisaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 1"/>
          <div className="reel-info-7">
            <div className="reel-info-1-inner">
              <h3>Chanderi</h3>
            <p>
Chanderi sarees, woven with delicate finesse, feature sheer texture,
 airy grace, and subtle shimmer—merging royal heritage with modern art elegance in every timeless drape.            </p>
  <Link to="/collection" style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
            
          </div>
        </div>
        <div className={`reel-8${hovered === 9 ? " reel-9-hovered-reel7-reel8" : " "}`}
        onMouseEnter={() =>setHovered(8)}
        onMouseLeave={() =>  setHovered(null)}
          tabIndex={0}
        >
          <img src={zaricottonsaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 2"/>
          <div className="reel-info-8">
            <div className="reel-info-1-inner">
              <h3>Zari Cotton</h3>
            <p>
Zari Cotton sarees blend ultra-soft pure cotton with lustrous zari, featuring airy comfort and ornate borders—perfect for graceful daily elegance and festive brilliance.            </p>
  <Link to="/collection"style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link> 
            </div>
            
          </div>
        </div>
        <div className="reel-9"
        onMouseEnter={() => setHovered(9)}
        onMouseLeave={() => setHovered(null)}>
          <img src={uppadasaree} style={{objectFit:"cover",width:"100%",height:"100%"}} alt="Reel 3"/>
          <div className="reel-info-9">
            <div className="reel-info-1-inner">
               <h3>Uppada</h3>
            <p>
Handwoven in Uppada, these silk sarees flaunt airy elegance, intricate Jamdani artistry, and vivid designs embodying traditional
 grace and timeless brilliance.            </p>
  <Link to="/collection"style={{textDecoration:"none",color:"black"}}><div className="goto"> Explore Sarees <img src={arrow} style={{height:"12px",marginLeft:"4px"}}></img></div></Link>  
            </div>
           
          </div>
        </div>
      </div>
     


       </div>
        
      
    

<div className="specialties-section">
  <h2 className="specialties-title">Our Specialties</h2>
  <p className="specialties-subtitle">
    Discover why Latha Collections stands out with our commitment to quality, convenience, and customer satisfaction.
  </p>
  <div className="specialties-cards-wrapper">
    <div className="specialty-card">
       
      <div className="specialty-card-icon">

        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M10.875 15.5C10.875 15.9142 10.5392 16.25 10.125 16.25H7.5C7.08579 16.25 6.75 15.9142 6.75 15.5C6.75 15.0858 7.08579 14.75 7.5 14.75H10.125C10.5392 14.75 10.875 15.0858 10.875 15.5ZM16.5 14.75H13.875C13.4608 14.75 13.125 15.0858 13.125 15.5C13.125 15.9142 13.4608 16.25 13.875 16.25H16.5C16.9142 16.25 17.25 15.9142 17.25 15.5C17.25 15.0858 16.9142 14.75 16.5 14.75ZM23.25 19.25C23.25 19.6642 22.9142 20 22.5 20H1.5C1.08579 20 0.75 19.6642 0.75 19.25C0.75 18.8358 1.08579 18.5 1.5 18.5H3V7.25C3 6.96592 3.1605 6.70622 3.41459 6.57918C3.66868 6.45214 3.97274 6.47955 4.2 6.65L9 10.25V7.25C9 6.96592 9.1605 6.70622 9.41459 6.57918C9.66868 6.45214 9.97274 6.47955 10.2 6.65L13.8319 9.37344L14.9156 1.78813C15.0241 1.05067 15.6552 0.503192 16.4006 0.5H18.0994C18.8448 0.503192 19.4759 1.05067 19.5844 1.78813L20.9906 11.6441C20.9906 11.6441 20.9981 11.7172 20.9981 11.75V18.5H22.4981C22.6974 18.4995 22.8886 18.5783 23.0297 18.719C23.1707 18.8597 23.25 19.0508 23.25 19.25ZM15.2006 10.4L16.0003 11H19.3856L18.0994 2H16.4006L15.2006 10.4ZM4.5 18.5H19.5V12.5H15.75C15.5877 12.5 15.4298 12.4474 15.3 12.35L13.95 11.3375L10.5 8.75V11.75C10.5 12.0341 10.3395 12.2938 10.0854 12.4208C9.83132 12.5479 9.52726 12.5204 9.3 12.35L4.5 8.75V18.5Z" fill="#0D1C14"/></svg>
      </div>

      <div className="specialty-card-content">
        
        <h3>Own Manufacturing</h3>
        <p>We control every aspect of quality and design, ensuring each saree meets our high standards.</p>
      </div>
      <img className="specialty-card-image" src={manufacturinglogo} alt="Own Manufacturing" />
    </div>
    <div className="specialty-card">
      <div className="specialty-card-icon">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M23.1956 5.96875L21.8831 2.6875C21.6553 2.11944 21.1039 1.74789 20.4919 1.75H17.25V1C17.25 0.585786 16.9142 0.25 16.5 0.25H2.25C1.42157 0.25 0.75 0.921573 0.75 1.75V12.25C0.75 13.0784 1.42157 13.75 2.25 13.75H3.84375C4.18363 15.0774 5.37974 16.0059 6.75 16.0059C8.12026 16.0059 9.31637 15.0774 9.65625 13.75H14.3438C14.6836 15.0774 15.8797 16.0059 17.25 16.0059C18.6203 16.0059 19.8164 15.0774 20.1562 13.75H21.75C22.5784 13.75 23.25 13.0784 23.25 12.25V6.25C23.2503 6.15361 23.2318 6.05809 23.1956 5.96875ZM17.25 3.25H20.4919L21.3919 5.5H17.25V3.25ZM2.25 1.75H15.75V7.75H2.25V1.75ZM6.75 14.5C5.92157 14.5 5.25 13.8284 5.25 13C5.25 12.1716 5.92157 11.5 6.75 11.5C7.57843 11.5 8.25 12.1716 8.25 13C8.25 13.8284 7.57843 14.5 6.75 14.5ZM14.3438 12.25H9.65625C9.31637 10.9226 8.12026 9.99412 6.75 9.99412C5.37974 9.99412 4.18363 10.9226 3.84375 12.25H2.25V9.25H15.75V10.4041C15.0534 10.8067 14.547 11.4715 14.3438 12.25ZM17.25 14.5C16.4216 14.5 15.75 13.8284 15.75 13C15.75 12.1716 16.4216 11.5 17.25 11.5C18.0784 11.5 18.75 12.1716 18.75 13C18.75 13.8284 18.0784 14.5 17.25 14.5ZM21.75 12.25H20.1562C19.8124 10.9261 18.6179 10.0013 17.25 10V7H21.75V12.25Z" fill="#0D1C14"/></svg>
      </div>
      <div className="specialty-card-content">
        <h3>Free Delivery</h3>
        <p>Enjoy complimentary shipping on all orders, delivered right to your doorstep.</p>
      </div>
      <img className="specialty-card-image" src={deliverylogo} lt="Free Delivery" />
    </div>
    <div className="specialty-card">
      <div className="specialty-card-icon">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M16.9272 3.12437C15.1152 1.29415 12.6495 0.259987 10.0741 0.25H10C4.61522 0.25 0.25 4.61522 0.25 10V15.25C0.25 16.4926 1.25736 17.5 2.5 17.5H4C5.24264 17.5 6.25 16.4926 6.25 15.25V11.5C6.25 10.2574 5.24264 9.25 4 9.25H1.78375C2.07903 6.05748 4.19481 3.32411 7.2114 2.23803C10.228 1.15195 13.6006 1.90933 15.8631 4.18094C17.2177 5.54247 18.0509 7.33662 18.2172 9.25H16C14.7574 9.25 13.75 10.2574 13.75 11.5V15.25C13.75 16.4926 14.7574 17.5 16 17.5H18.25C18.25 18.7426 17.2426 19.75 16 19.75H10.75C10.3358 19.75 10 20.0858 10 20.5C10 20.9142 10.3358 21.25 10.75 21.25H16C18.0711 21.25 19.75 19.5711 19.75 17.5V10C19.7599 7.42412 18.7442 4.95022 16.9272 3.12437ZM4 10.75C4.41421 10.75 4.75 11.0858 4.75 11.5V15.25C4.75 15.6642 4.41421 16 4 16H2.5C2.08579 16 1.75 15.6642 1.75 15.25V10.75H4ZM16 16C15.5858 16 15.25 15.6642 15.25 15.25V11.5C15.25 11.0858 15.5858 10.75 16 10.75H18.25V16H16Z" fill="#0D1C14"/></svg>
      </div>
      <div className="specialty-card-content">
        <h3>Special Customer Care</h3>
        <p>Receive personalized service and dedicated support from our expert team.</p>
      </div>
      <img className="specialty-card-image" src={customerlogo} alt="Special Customer Care" />
    </div>
  </div>
</div>
 <div className="address-section">
          
              <div className="reels-heading-add">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#000" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg> 
              <h5>Address</h5>

              </div>



             <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.2540793565013!2d80.00293542566983!3d14.456946478609208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8be02756374f%3A0x1f0f54832b13b8f1!2sLatha%20Collections!5e0!3m2!1sen!2sin!4v1750966212894!5m2!1sen!2sin"
                 
                 className="map"
                  allowFullScreen=""
                  loading="lazy"
                  title="Latha Collections Location"
                ></iframe>
       

          
           

    </div>
      

     

 
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

export default Home;















