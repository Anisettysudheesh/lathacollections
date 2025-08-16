import React from 'react';
import popupimage from "./Community Tab (2).webp"
function Popup() {
    return (
    <div className="popup">
        <img src={popupimage} className="popup-image" alt="popup-image"></img>
        <button
            className="into"
            type="button"
            aria-label="Close popup"
            data-testid="close-popup"
        >
            ×
        </button>
    </div>
    );
}

export default Popup;
