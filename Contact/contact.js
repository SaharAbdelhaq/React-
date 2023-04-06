import React, { useState, useRef, useEffect } from "react";
import "./popup.css";
import $ from "jquery";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [popupRef]);

  return (
    <div>
      <div id="contact" onClick={() => setShowPopup(!showPopup)}>
        contact
      </div>
      {showPopup && (
        <div id="contactForm" ref={popupRef}>
          <h1>Keep in touch!</h1>
          <small>W'll get back to you as quickly as possible</small>
          <form action="#">
            <input placeholder="Name" type="text" required />
            <input placeholder="Email" type="email" required />
            <input placeholder="Subject" type="text" required />
            <textarea placeholder="Comment"></textarea>
            <input className="formBtn" type="submit" />
            <input className="formBtn" type="reset" />
          </form>
        </div>
      )}
    </div>
  );
}

export default Popup;
