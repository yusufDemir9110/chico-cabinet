import React from "react";
import Contact from "./Contact";
import styles from "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footerTop">
          <Contact />
          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79576.71715665206!2d-121.90481164399009!3d39.784552273048945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8082d846110e2e81%3A0x8b0e42abfa3873da!2s3080%20Thorntree%20Dr%2C%20Chico%2C%20CA%2095973%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2snl!4v1683900146382!5m2!1str!2snl" 
              width="450" 
              height="500" 
              style={{ border: "0" }} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <h4>
              <FontAwesomeIcon className="faPhone" icon={faLocationDot} />{" "}
              3080 Thorntree dr. Chico CA 95973
            </h4>
            <h4>
              <a href="tel:+15307333667">
                <FontAwesomeIcon className="faPhone" icon={faPhone} />
                <span>530 733 3667</span>
              </a>
            </h4>
            <h4>
              <a href="mailto:chicocabinetca@gmail.com">
                <FontAwesomeIcon className="faPhone" icon={faEnvelope} />
                chicocabinetca@gmail
              </a>
            </h4>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            ©2023 Chico Cabinet - This website has designed by&nbsp;
            <a
              href="https://www.linkedin.com/in/yusuf-demir-91439719b/"
              target="_blank"
            >
              Yusuf Demir
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://www.linkedin.com/in/fatih-sancaktar-2524691b1/"
              target="_blank"
            >
              Fatih Sancaktar
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
