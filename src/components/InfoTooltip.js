import React from "react";
import closeIcon from "../images/Close.png";
import checkIcon from "../images/check.png";

function InfoTooltip({ isOpen, setIsRegistered }) {
  function onClose(evt) {
    evt.preventDefault();

    if (isOpen === true) {
      setIsRegistered(false);
    }
  }
  return (
    <div className={`regconf ${isOpen ? "regconf_opened" : ""}`}>
      <div className="regconf_container">
        <div className="regconf__container-button">
          <img
            alt="closeIcon"
            className="imgdisplay__container-buttonimg"
            src={closeIcon}
            onClick={onClose}
          />
        </div>
        <div className="regconf__check">
          <img alt="Check" className="regconf__img-check" src={checkIcon} />
        </div>
        <h2>¡Correcto! Ya estás registrado.</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
