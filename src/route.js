import { Route, Routes } from 'react-router-dom';
import Collection from "./pages/collection";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Stores from "./pages/stores";

function RoutesHandler() {
    return (
        <div className='main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stores" element={<Stores />} />
            </Routes>
        </div>
    );
}

export default RoutesHandler;
