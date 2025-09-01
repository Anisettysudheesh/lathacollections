import React from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./collection.css";
import "../App.css";
import { useEffect, useState } from "react";
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
import whatsapp from "../logos/whatsapp-icon.svg"
import insta from "../logos/insta-icon.svg"
import utube from "../logos/utube-icon.svg"
import tzyn from "../TZYN MARK.png"
import mg1 from "../carasollogos/mg (1).webp"
import mg2 from "../carasollogos/mg (2).webp"
import mg3 from "../carasollogos/mg (3).webp"
import mg4 from "../carasollogos/mg (4).webp"

const CARD_IMAGES1 = [kota1, kota2, kota3, kota4];
const CARD_IMAGES2 = [zc1, zc2, zc3, zc4];
const CARD_IMAGES3 = [kota1, kota2, kota3, kota4];
const CARD_IMAGES4 = [up1, up2, up3, up4];
const CARD_IMAGES5 = [mg1, mg2, mg3, mg4];
const CARD_IMAGES6 = [kota1, kota2, kota3, kota4];
const CARD_IMAGES7 = [chan1, chan2, chan3, chan4];
const CARD_IMAGES8 = [batik1, batik2, batik3, batik4];
const CARD_IMAGES9 = [mt1, mt2, mt3, mt4];
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
  const [hovered, setHovered] = useState(null);

  return (
    <div className="app">
       <div className="col-video-heading">
          <video src={collectionsback} className="col-video-back" autoPlay muted loop>
           
        </video>
        <h3 className="collections-heading">Collections</h3>
        </div>
        
      <div className="collections-section" style={{marginTop:"5%"}}>
       
       

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

      <div className="collections-section" style={{marginBottom:"2rem"}}>
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
        <div className="footer-4-section">
          <a href="https://tzynstudio.com">
            <img src={tzyn} className="tzyn"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collection;
