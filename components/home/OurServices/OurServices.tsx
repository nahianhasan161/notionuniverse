import ServiceItem from '@/components/shared/Cards/ServiceItem'
import React from 'react'

const OurServices = () => {

    const data = [1,2,3,4,5,6
    ]
  return (
    <section className="wpb_row row-fluid section-padd row-has-fill row-o-equal-height row-o-content-middle row-flex bg-[#E5EEF6]">
    <div className="container">
      <div className="row">
        <div className="wpb_column column_container col-sm-12 col-md-9">
          <div className="column-inner">
            <div className="wpb_wrapper">
              <div className="section-head">
                <h6><span>OUR SERVICES</span></h6>
                <h2 className="section-title">What we bring to you</h2>
              </div>

              <div className="empty_space_30 md-hidden sm-hidden"><span className="empty_space_inner"></span></div>
            </div>
          </div>
        </div>
        <div className="wpb_column column_container col-sm-12 col-md-3">
          <div className="column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element text-right mobile-left">
                <div className="wpb_wrapper">
                  <p><a className="pagelink gray" href="services.html">All services</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add service items here */}
       <div>
        {data?.map((item) => {
            return  <ServiceItem link='fsdf' title='Debt Restructuring' key={item} description='To restructure outstanding debt with banks and creditors thus, creating a manageable financial arrangement for clients.' />
        })}
       </div>
      </div>
    </div>
  </section>
  )
}

export default OurServices