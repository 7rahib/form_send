import React, { useRef, useState } from "react";
import logo from "../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import "./Message.css";

const Messsage = () => {
  return (
    <div>
      <div className="navbar grid">
        <div className="place-content-center">
          <img className="w-24 h-24" src={logo} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center message-container ml-3">
        <div className="mb-16 mt-4">
          <h1>Thank you for your time!</h1>
        </div>
        <div className="mb-8">
          <h2>
            Our customer service team will contact you soon to discuss your
            requirment
          </h2>
        </div>
        <div className="links mb-4">
          <ul>
            <li>
              <a>Visit our Youtube channel</a>
            </li>
          </ul>
        </div>
        <div className="mb-16">
          <h4>
            Thank you for signing up.You can now share with your network about
            our service offering
          </h4>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/">
                <i class="fab fa-linkedin mr-4"></i>LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <i class="fab fa-twitter mr-4"></i>Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <i class="fab fa-facebook mr-4"></i>Facebook
              </a>
            </li>
            <li>
              <a href="mailto: info@loansdirect.capital">
                <i class="fas fa-envelope mr-4"></i>Via Email
              </a>
            </li>
            <li>
              <a href="https://telegram.org/">
                <i class="fab fa-telegram mr-4"></i>Telegram
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?text=https://loansdirect.capital/">
                <i class="fab fa-whatsapp mr-4"></i>Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messsage;
