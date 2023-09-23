import React from 'react'
import {FaLinkedin, FaFacebook} from "react-icons/fa"

const Topbar = () => {
  return (
    <div id="header_topbar" className="header-topbar md-hidden sm-hidden clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Social icons */}
            <ul className="social-list fleft">
              <li>
                <a href="https://www.facebook.com/notionuniverse/?locale=ms_MY" target="_blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/notion-universe-sdn-bhd/" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
            {/* Social icons close */}
            <div className="topbar-text fright">Opening hours: Monday to Friday (9am to 9pm)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar