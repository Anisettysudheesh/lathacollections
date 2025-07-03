import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from "./pages/collection";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Stores from "./pages/stores";
import ScrollToTop from "./ScrollToTop"; // <-- Import the ScrollToTop component

function RoutesHandler() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop /> {/* <-- Add this line above your Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/stores" element={<Stores />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesHandler;