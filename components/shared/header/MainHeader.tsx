"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "@/images/notionrecovery.png";
import Image from "next/image";

const MainHeader = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="main-header md-hidden sm-hidden">
      <div className="main-header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-wrap-table">
                <div
                  id="site-logo"
                  className="site-logo col-media-left col-media-middle"
                >
                  <a href="index.html">
                    <Image
                      className="logo-static"
                      src={logo}
                      alt="Notion Recovery"
                      style={{ maxWidth: "200px", marginLeft: "-30px" }}
                    />
                    <Image
                      className="logo-scroll"
                      src={logo}
                      alt="Notion Recovery"
                      style={{ maxWidth: "200px", marginLeft: "-30px" }}
                    />
                  </a>
                </div>
                <div className="col-media-body col-media-middle">
                  <ul className="info-list info_on_right_side fright">
                    <li>
                      <span>
                        Address:{" "}
                        <strong>
                          No 30B Greentown Business Centre <br />
                          Ipoh Perak 30450 Malaysia
                        </strong>
                      </span>
                    </li>
                    <li>
                      <span>
                        Free call:{" "}
                        <strong className="font-size18">(05) 241 7155</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-mainnav">
                <div className="search-cart-box fright">
                  <div
                    className="toggle_search fright"
                    onClick={() => setIsSearch(!isSearch)}
                  >
                    <FaSearch className="" />
                  </div>
                  <div
                    className={`${
                      isSearch ? "visibleimportant" : ""
                    } h-search-form-field `}
                  >
                    <form
                      role="search"
                      method="get"
                      id="search-form"
                      className="search-form max-w-[80%]"
                      action="#"
                    >
                      <input
                        type="search"
                        className="search-field "
                        placeholder="Enter keyword..."
                        name="s"
                        id="search-inputs"
                      />
                      <button type="submit" className="search-submit">
                        <FaSearch className="text-white fill-slate-500" />
                      </button>
                    </form>
                    <div
                      id="search-result"
                      className="search-result bg-light"
                    ></div>
                  </div>
                </div>
                <div id="site-navigation" className="main-navigation fleft">
                  <ul id="primary-menu" className="menu">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731">
                      <a href="#">Approach</a>
                      <ul className="sub-menu">
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
                      <a href="services.html">Services</a>
                      <ul className="sub-menu">
                        <li className="menu-item-1791">
                          <a href="debt-restructuring.html">
                            Debt Restructuring
                          </a>
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
                            Total Permanent Disability (TPD) & Death Claims
                          </a>
                        </li>
                        <li className="menu-item-1760">
                          <a href="debt-consolidation.html">
                            Debt Consolidation
                          </a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
