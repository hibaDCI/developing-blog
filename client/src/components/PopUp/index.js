import React from "react";
import PropTypes from "prop-types";
import LoginPopUp from "./LoginPopUp";
import SignUpPopUp from "./SignUpPopUp";
import "./popUp.scss";
function renderContent(type) {
  switch (type) {
    case "LOGIN": {
      return <LoginPopUp />;
    }
    case "SIGNUP": {
      return <SignUpPopUp />;
    }
    default:
      return <loginPopUp />;
  }
}

function PopUp({type, onClose}) {
  const handleBackDrop = (e) => {
    // e.stopPropagation();
    onClose(false);
  };

  return (
    <>
      <div className="popup-backdrop" onClick={handleBackDrop} />
      <div className="popup">
        <div className="popup-container">
          <div className="popup-title-container">
            <button className="popup-close" onClick={() => onClose(false)}>
              X
            </button>
            <p className="popup-title">
              {type === "LOGIN" ? "lOGIN TO YOUR ACOUNT" : "SIGNUP"}
            </p>
          </div>
          <div className="popup-content-container">{renderContent(type)}</div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
