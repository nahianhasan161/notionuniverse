import React from "react";
import { IoIosBulb, IoIosMedal } from "react-icons/io";
import { IoCashSharp, IoHeadset } from "react-icons/io5";

const Features = () => {

  return (
    <section className="wpb_row row-fluid top-70 row-has-fill relative">
      <div className="container">
        <div className="row">
          <div className="wpb_column column_container col-sm-12">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div className="empty_space_70 lg-hidden">
                  <span className="empty_space_inner"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column column_container col-sm-6 col-md-3">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div className="service-box icon-box box-shadow-2 ionic">
                  <IoIosMedal className="w-[40px] h-[40px] text-[#f26522] mb-[20px]" />
                  <div className="content-box">
                    <h4>Client Focus</h4>
                    <p>
                      Understanding the needs of each client and provide
                      personalized solutions.
                    </p>
                  </div>
                </div>

                <div className="empty_space_30  lg-hidden">
                  <span className="empty_space_inner"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column column_container col-sm-6 col-md-3">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div className="service-box icon-box box-shadow-2 ionic">
                  <IoIosBulb className="w-[40px] h-[40px] text-[#f26522] mb-[20px]" />
                  <div className="content-box">
                    <h4>Financial Freedom</h4>
                    <p>
                      Help and support clients attain financial freedom with our
                      services.
                    </p>
                  </div>
                </div>

                <div className="empty_space_30 lg-hidden">
                  <span className="empty_space_inner"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column column_container col-sm-6 col-md-3">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div className="service-box icon-box box-shadow-2 ionic">
                  <IoCashSharp className="w-[40px] h-[40px] text-[#f26522] mb-[20px]" />
                  <div className="content-box">
                    <h4>Empowerment</h4>
                    <p>
                      To empower clients with financial knowledge for them to
                      make informed choices.
                    </p>
                  </div>
                </div>

                <div className="empty_space_30 lg-hidden">
                  <span className="empty_space_inner"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column column_container col-sm-6 col-md-3">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div className="service-box icon-box box-shadow-2 ionic">
                  <IoHeadset className="w-[40px] h-[40px] text-[#f26522] mb-[20px]" />
                  <div className="content-box">
                    <h4>Expertise</h4>
                    <p>
                      Experienced in the financial industry, guiding clients
                      towards financial decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
