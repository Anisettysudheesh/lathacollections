import React from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./collection.css";
import "../App.css";
// import collection1 from "../logos/collection1.png";
// import collection2 from "../logos/collection2.png";
// import collection3 from "../logos/collection3.png";
// import kota1 from "../logos/kota1.png";
import mainlogo from "../logos/m and t.png";

import { useEffect, useState,useRef } from "react";
import collectionicon from "../logos/collectionicon.svg"
import abouticon from "../logos/abouticon.svg" 
import homeicon from "../logos/homeicon.svg"
import storeicon from "../logos/storeicon.svg"
import contacticon from "../logos/contacticon.svg"
import kota from "../collectionlogos/KotaSaree.webp"
import zaricotton from "../collectionlogos/zaricottonsaree.webp"
import count from "../collectionlogos/100countsaree.webp"
import mangalagiri from "../collectionlogos/Mangalagiripattusaree.webp"
import lehariya from "../collectionlogos/LehariyaGeorgetteSarees.webp"
import chanderi from "../collectionlogos/ChanderiSaree.webp"
import batik from "../collectionlogos/BatikSaree.webp"
import mt from "../collectionlogos/m&tsaree.webp"
import uppada from "../collectionlogos/uppadasaree.webp"
import kotahover from "../collectionlogos/kota-hover.webp"
import lehariyahover from "../collectionlogos/lehariya-hover.webp"
import chanderihover from "../collectionlogos/chanderi-hover.webp"
import zarihover from "../collectionlogos/zari-hover.webp"
import counthover from "../collectionlogos/count-hover.webp"
import uppadahover from "../collectionlogos/uppada-hover.webp"
import mangalagirihover from "../collectionlogos/mangalagiri-hover.webp"
import batikhover from "../collectionlogos/batik-hover.webp"
import mthover from "../collectionlogos/m&t-hover.webp"
import kota1 from "../carasollogos/kota1.webp"
import kota2 from "../carasollogos/kota2.webp"
import kota3 from "../carasollogos/kota3.webp"
import kota4 from "../carasollogos/kota4.webp"
import collectionsback from "../video/collections-back.mp4"
import batik1 from "../carasollogos/batik1.webp"
import batik2 from "../carasollogos/batik2.webp"  
import batik3 from "../carasollogos/batik3.webp"
import batik4 from "../carasollogos/batik4.webp"
import chan1 from "../carasollogos/chan1.webp"
import chan2 from "../carasollogos/chan2.webp"
import chan3 from "../carasollogos/chan3.webp"
import chan4 from "../carasollogos/chan4.webp"
import mp1 from "../carasollogos/mp1.webp"
import mp2 from "../carasollogos/mp2.webp"
import mp3 from "../carasollogos/mp3.webp"
import mp4 from "../carasollogos/mp4.webp"
import mt1 from "../carasollogos/mt1.webp"
import mt2 from "../carasollogos/mt2.webp"
import mt3 from "../carasollogos/mt3.webp"
import mt4 from "../carasollogos/mt4.webp"
import zc1 from "../carasollogos/zc1.webp"
import zc2 from "../carasollogos/zc2.webp"
import zc3 from "../carasollogos/zc3.webp"
import zc4 from "../carasollogos/zc4.webp"
import up1 from "../carasollogos/up1.webp"
import up2 from "../carasollogos/up2.webp"
import up3 from "../carasollogos/up3.webp"
import up4 from "../carasollogos/up4.webp"


const CARD_IMAGES1 = [
kota1,
kota2,
kota3,
kota4
];
const CARD_IMAGES2 = [
zc1,
zc2,
zc3,
zc4

];
const CARD_IMAGES3 = [
 kota1,
kota2,
kota3,
kota4
];
const CARD_IMAGES4 = [
up1,
up2,
up3,
up4
];
const CARD_IMAGES5 = [
mp1,
mp2,
mp3,  
mp4
];
const CARD_IMAGES6 = [
  kota1,
kota2,
kota3,
kota4
];
const CARD_IMAGES7 = [
 chan1,
chan2,
chan3,
chan4
];
const CARD_IMAGES8 = [
batik1,
batik2,
batik3,
batik4
];const CARD_IMAGES9 = [
mt1,
mt2,
mt3,
mt4
];
const MAX_VISIBILITY = 3;

const Card = ({ image, alt }) => (
  <div className="card">
    <img src={image} alt={alt} style={{ width: "100%", borderRadius: "12px" }} />
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 3000); // Change 3000 to your preferred interval (ms)
    return () => clearInterval(interval);
  }, [count]);
  

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

function Collection() {
  const [scrolled, setScrolled] = useState(false);
     const [hideHeader, setHideHeader] = useState(false);
    const lastScrollY = useRef(0);
     const [hovered, setHovered] = useState(null);
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
  
        if (window.scrollY > lastScrollY.current && window.scrollY > 350) {
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
           
            <div className="collections-section">
              
                   <video src={collectionsback} className="col-video-back"   
                   autoPlay
                 muted
                  loop>
                     
                   </video>
                   <h3 className="collections-heading">Collections</h3>
                  
              

                  <div className="col-saree1-box">
                      <img className="col-saree9-img" src={mt}></img>
                      <img className="col-saree9-img-hover" src={mthover}></img>
                    

                      <div className="col-saree1-matter">
                                <h4> M&T Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES9.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
              <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree8-img" src={batik}></img>
                      <img className="col-saree8-img-hover" src={batikhover}></img>

                      <div className="col-saree1-matter">
                                <h4> Batik Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES8.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
            <div className="collections-section">
         


                  <div className="col-saree1-box">
                      <img className="col-saree1-img" src={kota}></img>
                        <img className="col-saree1-img-hover" src={kotahover}></img>

                      <div className="col-saree1-matter" >
                                <h4> Kota Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES1.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
              <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree2-img" src={zaricotton}></img>
                      <img className="col-saree2-img-hover" src={zarihover}></img>

                      <div className="col-saree1-matter">
                                <h4> Zari Cotton Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES2.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
                
                   <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree4-img" src={uppada}></img>
                      <img className="col-saree4-img-hover" src={uppadahover}></img>

                      <div className="col-saree1-matter">
                                <h4> Uppada Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES4.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
                   <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree5-img" src={mangalagiri}></img>
                      <img className="col-saree5-img-hover" src={mangalagirihover}></img>

                      <div className="col-saree1-matter">
                                <h4> Mangalagiri Pattu Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES5.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
                   <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree6-img" src={lehariya}></img>
                      <img className="col-saree6-img-hover" src={lehariyahover}></img>

                      <div className="col-saree1-matter">
                                <h4> Lehariya Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES6.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
                   <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree7-img" src={chanderi}></img>
                      <img className="col-saree7-img-hover" src={chanderihover}></img>
                      


                      <div className="col-saree1-matter">
                                <h4> Chanderi Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES7.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
                    <div className="collections-section">
              {/* <h3 className="collections-heading">Collections</h3> */}


                  <div className="col-saree1-box">
                      <img className="col-saree3-img" src={count}></img>
                      <img className="col-saree3-img-hover" src={counthover}></img>

                      <div className="col-saree1-matter">
                                <h4> 100 Count Sarees</h4>
                                <p>Woven with finesse in the heart of Madhya Pradesh, Chanderi sarees are known for their sheer texture, lightweight feel, and 
                                  rich, handwoven elegance. Adorned with traditional motifs and a subtle shimmer, these timeless drapes blend heritage with contemporary charm.</p>
                      </div>

                  </div>

                          <Carousel>
                              {CARD_IMAGES3.map((img, i) => (
                                <Card key={i} image={img}  alt={`Collection ${i + 1}`} />
                              ))}
                            </Carousel>


            </div>
                   
            
     
    
    </div>
  );
}

export default Collection;
