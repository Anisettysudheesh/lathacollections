import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesHandler from "./route.js";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Popup from "./decorations/popups.js"
import Header from "./components/Header.js"
import mothersDay from "./decorations/GIST Mother's Day .gif"
import ScrollToTop from "./ScrollToTop";
import "./global.css"

function App() {

  useEffect(() => {
    // Set initial state: popup active, main hidden
    const popup = document.querySelector(".popup");
    const main = document.querySelector(".main");
    
    if (popup && main) {
      popup.classList.add("active");
      popup.classList.remove("hidden");
      main.classList.add("hidden");
      main.classList.remove("active");
    }

    // Add click and touch handlers for the close button
    const closeButton = document.querySelector(".into");
    if (closeButton) {
      // Add multiple event listeners for better mobile support
      closeButton.addEventListener("click", handleClosePopup);
      closeButton.addEventListener("touchend", handleClosePopup);
      closeButton.addEventListener("touchstart", (e) => e.preventDefault());
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", handleClosePopup);
        closeButton.removeEventListener("touchend", handleClosePopup);
        closeButton.removeEventListener("touchstart", (e) => e.preventDefault());
      }
    };
  }, []);

  const handleClosePopup = () => {
    const popup = document.querySelector(".popup");
    const main = document.querySelector(".main");
    
    if (popup && main) {
      // Hide popup
      popup.classList.remove("active");
      popup.classList.add("hidden");
      
      // Show main content
      main.classList.remove("hidden");
      main.classList.add("active");
    }
  };

  return (
    <div>
      {/* left and right pots decorations */}
      {/* <img src={mothersDay} alt="Mother's Day" className="global-gif-left" />
      <img src={mothersDay} alt="Mother's Day" className="global-gif-right" /> */}

      <BrowserRouter>
        <ScrollToTop />
        {/* Global Fixed Header */}
        <Header />

        {/* the popup window is displayed first on website */}
        {/* <Popup /> */}
        <RoutesHandler />
      </BrowserRouter>

      <SpeedInsights />
    </div>
  );
}

export default App;
