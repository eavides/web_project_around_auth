import React from "react";
import closeIcon from "../images/Close.png";

function InfoTooltip({ isOpen }) {
  console.log(isOpen);
  return (
    <div className={`regconf ${isOpen ? "regconf_opened" : ""}`}>
      <div className="imgdisplay__container">
        <h2>Usuario registrado</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
