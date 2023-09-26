import ServiceItem from '@/components/shared/Cards/ServiceItem'
import React from 'react'
import {IoUmbrella} from "react-icons/io5"
import {GiCube} from "react-icons/gi"
import {IoMdPodium} from "react-icons/io"
import {CgMenuBoxed} from "react-icons/cg"

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: IoUmbrella,
      title: "Debt Restructing",
      description: "To restructure outstanding debt with banks and creditors thus, creating a manageable financial arrangement for clients."
    },
    {
      id: 2,
      icon: GiCube,
      title: "Debt Negotiation",
      description: "To reduce outstanding debts through strategic negotiations for a full settlement with us."
    },
    {
      id: 3,
      icon: IoMdPodium,
      title: "Bankruptcy",
      description: "We analyze your finances, negotiate with banks and the MDI on your behalf, and guide you throughout the bankruptcy release process."
    },
    {
      id: 4,
      icon: CgMenuBoxed,
      title: "Total Permanent Disability (TPD) /Death Claims",
      description: "Professional TPD/Death claim insurance assistance, supporting clients, including communication with insurers and banks for full settlement."
    },
     {
      id: 5,
      icon: CgMenuBoxed,
      title: "Debt Consolidation",
      description: "This service provides a strategic financial solution by consolidating multiple debts, including credit card balances and personal loans, into a single loan with improved terms for individuals and businesses."
     },
     {
      id: 6,
      icon: CgMenuBoxed,
      title: "Insurance Claims",
      description: "We offer expert assistance for individuals and businesses navigating insurance claims, addressing documentation, policy understanding, and past rejection reconsideration."
     }
  ]

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
        {services?.map(({id, title, icon, description}) => {
            return  <ServiceItem link='www.google.com' title={title} key={id} description={description} icon={icon} />
        })}
       </div>
      </div>
    </div>
  </section>
  )
}

export default OurServices