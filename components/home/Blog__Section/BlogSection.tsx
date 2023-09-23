import React from 'react'
import Blogs from './Blogs'

const BlogSection = () => {
  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="row">
          <div className="wpb_column column_container col-sm-12 col-md-9">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div className="section-head">
                  <h6><span>our blog</span></h6>
                  <h2 className="section-title">Our latest news</h2>
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
                    <p><a className="pagelink gray" href="blog.html">View all posts</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column column_container col-sm-12">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <Blogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection