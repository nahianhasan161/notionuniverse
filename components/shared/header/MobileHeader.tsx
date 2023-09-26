"use client";
import Image from "next/image";
import React from "react";
import logo from "@/images/logo-white.svg";
import { FaPlus } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isApproch, setIsApproch] = React.useState(false);
  const [isService, setIsService] = React.useState(false);
  return (
    <div className="header_mobile">
      <div className="mlogo_wrapper clearfix">
        <div className="mobile_logo">
          <a href="#">
            <Image src={logo} alt="Consultax" />
          </a>
        </div>
        <div
          id="mmenu_toggle"
          className={isOpen ? "active" : ""}
          onClick={() => setIsOpen(!isOpen)}
        >
          <button> </button>
        </div>
      </div>
      <div className="mmenu_wrapper">
        <div
          className={`mobile_nav collapse transition-all ease-in-out duration-500 ${
            isOpen ? "visibleimportant" : ""
          }`}
        >
          <ul id="menu-main-menu" className="mobile_mainmenu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731">
              <a
                className=""
                onClick={() => {
                  setIsApproch(!isApproch);
                }}
              >
                <span className="flex justify-between">
                  Approach
                  <FaPlus />
                </span>
              </a>
              <ul className={`sub-menu ${isApproch ? "visibleimportant" : ""}`}>
                <li className="menu-item-1738">
                  <a href="about.html">About Us</a>
                </li>
                <li className="menu-item-1742">
                  <a href="how-it-work.html">How It Work</a>
                </li>
                <li className="menu-item-1746">
                  <a href="testimonials.html">Testimonials</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1789">
              <a
                onClick={() => {
                  setIsService(!isService);
                }}
              >
                <span className="flex justify-between ">
                  Services
                  <FaPlus />
                </span>
              </a>
              <ul className={`sub-menu ${isService ? "visibleimportant" : ""}`}>
                <li className="menu-item-1791">
                  <a href="debt-restructuring.html">Debt Restructuring</a>
                </li>
                <li className="menu-item-1791">
                  <a href="debt-negotiation.html">
                    Debt Negotiation for Full Settlement
                  </a>
                </li>
                <li className="menu-item-1758">
                  <a href="bankruptcy.html">Bankruptcy</a>
                </li>
                <li className="menu-item-1790">
                  <a href="tpd.html">
                    Total Permanent Disability (TPD)& Death Claims
                  </a>
                </li>
                <li className="menu-item-1760">
                  <a href="debt-consolidation.html">Debt Consolidation</a>
                </li>
                <li className="menu-item-1761">
                  <a href="insurance-claims.html">Insurance Claims</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
