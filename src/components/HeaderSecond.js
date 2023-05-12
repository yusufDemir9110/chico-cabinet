import React from "react";
import chicoLogo from "../assets/chicoLogo.jpg";
import whatsappLogo from "../assets/whatsapp.png";
import styles from "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function HeaderSecond() {
  return (
    <header className="spaceBetween">
      <div className="headerLeft">
        <Link to={"/"}>
          <img className="headerLogo" src={chicoLogo} alt="chicoLogo" />
        </Link>
      </div>
      <div className="headerRight">
        <div className="headerTopRight">
          <a href="mailto:paradisecabinetca@gmail.com">
            <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} />
          </a>
          <a href="tel:+15307333667">
            <FontAwesomeIcon className="faPhone" icon={faPhone} />
            <span>530 733 3667</span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=15307333667">
            <img className="whatsappLogo" src={whatsappLogo} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeaderSecond;
