import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaChevronUp } from "react-icons/fa";
import notionLogo from "@/images/notionlogo.png";

function Footer() {
  return (
    <footer id="site-footer" className="site-footer bg-second">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div id="media_image-1" className="widget widget_media_image">
                <a href="index.html">
                  <Image src={notionLogo} alt="" />
                </a>
              </div>
              <div
                id="custom_html-1"
                className="widget_text widget widget_custom_html"
              >
                <div className="textwidget custom-html-widget">
                  <p>
                    Your partner in comprehensive and compassionate debt
                    recovery solutions, dedicated to rebuilding financial
                    stability and guiding you towards a debt-free future.
                  </p>
                  <p>
                    <a href="about.html" className="pagelink gray">
                      About us
                    </a>
                  </p>
                  <div className="ot-socials ">
                    <a
                      target="_blank"
                      className="w-full h-full flex justify-center items-center svg border-[#00387a]"
                      href="https://www.facebook.com/notionuniverse/?locale=ms_MY"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="fill-[#00387a]  bg-white w-full border-transparent h-full flex justify-center items-center" />
                    </a>
                    <a
                      className="svg"
                      target="_blank"
                      href="https://www.linkedin.com/company/notion-universe-sdn-bhd/"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-full bg-white fill-[#00387a]   h-full flex justify-center items-center" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <section
                id="custom_html-2"
                className="widget_text widget widget_custom_html padding-left"
              >
                <h4 className="widget-title">Services</h4>
                <div className="textwidget custom-html-widget">
                  <ul className="padd-left">
                    <li>
                      <a href="debt-restructuring.html">Debt Restructuring</a>
                    </li>
                    <li>
                      <a href="debt-negotiation.html">
                        Debt Negotiation for Full Settlement
                      </a>
                    </li>
                    <li>
                      <a href="bankruptcy.html">Bankruptcy</a>
                    </li>
                    <li>
                      <a href="tpd.html">
                        Total Permanent Disability (TPD)& Death Claims
                      </a>
                    </li>
                    <li>
                      <a href="debt-consolidation.html">Debt Consolidation</a>
                    </li>
                    <li>
                      <a href="insurance-claims.html">Insurance Claims</a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="col-md-3 col-sm-6">
              <section
                id="custom_html-3"
                className="widget_text widget widget_custom_html padding-left"
              >
                <h4 className="widget-title">Company</h4>
                <div className="textwidget custom-html-widget">
                  <ul className="padd-left">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="col-md-3 col-sm-6">
              <section
                id="mc4wp_form_widget-1"
                className="widget widget_mc4wp_form_widget"
              >
                <h4 className="widget-title">Subscribe</h4>
                <form
                  id="mc4wp-form-1"
                  className="mc4wp-form mc4wp-form-1696"
                  method="post"
                  data-id="1696"
                  data-name="Consultax Subscribe"
                >
                  <div className="mc4wp-form-fields">
                    <div className="footer-sub">
                      <input
                        type="text"
                        name="NAME"
                        placeholder="Name"
                        required
                      />
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Email Address"
                        required
                      />
                      <input type="submit" className="btn" value="Subscribe" />
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="_mc4wp_timestamp"
                    value="1560227031"
                  />
                  <input type="hidden" name="_mc4wp_form_id" value="1696" />
                  <input
                    type="hidden"
                    name="_mc4wp_form_element_id"
                    value="mc4wp-form-1"
                  />
                  <div className="mc4wp-response"></div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-dark_blue">
        <div className="max-w-[1200px] h-[40px] mx-auto flex justify-between items-center">
          <div>
            <p className="h-full items-center">
              @2023 Notion Debt Recovery by Notion Universe Sdn Bhd
            </p>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <a href="" className="text-white" style={{ color: "white" }}>
              Terms and Conditions
            </a>
            <a href="" className="text-white" style={{ color: "white" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
