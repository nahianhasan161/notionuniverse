import React from 'react'

const Contact = () => {
  return (
    <section className="wpb_row row-fluid section-padd bg-second row-has-fill">
      <div className="container">
        <div className="row">
          <div className="wpb_column column_container col-sm-6">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <h2 className="custom_heading text-light">Take the First step <br />Towards Financial Liberation</h2>
                <div className="wpb_text_column wpb_content_element  text-light">
                  <div className="wpb_wrapper">
                    <p>Sign up with us now and embark on your journey<br />to debt recovery and lasting peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column column_container col-sm-6">
            <div className="column-inner">
              <div className="wpb_wrapper">
                <div role="form" className="wpcf7" id="wpcf7-f1626-p1530-o1" lang="en-US" dir="ltr">
                  <div className="screen-reader-response"></div>
                  <form action="" method="post" className="wpcf7-form">
                    <div className="row">
                      <div className="col-md-6">
                        <span className="wpcf7-form-control-wrap your-name">
                          <input type="text" name="your-name"  size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" required aria-invalid="false" placeholder="Your Name" />
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span className="wpcf7-form-control-wrap your-service">
                          <select name="your-service" className="wpcf7-form-control wpcf7-select" aria-invalid="false">
                            <option value="Debt & Restructuring">Debt & Restructuring</option>
                            <option value="Debt Negotiation for Full Settlement">Debt Negotiation for Full Settlement</option>
                            <option value="Bankruptcy">Bankruptcy</option>
                            <option value="Total Permanent Disability (TPD) /Death Claims">Total Permanent Disability (TPD) /Death Claims</option>
                            <option value="Financial Projections">Financial Projections</option>
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="wpcf7-form-control-wrap your-email">
                          <input type="email" name="your-email"  size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" required placeholder="Email Address" />
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span className="wpcf7-form-control-wrap your-phone">
                          <input type="tel" name="your-phone"  size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" placeholder="Phone Number" />
                        </span>
                      </div>
                    </div>
                    <p>
                      <input type="submit" value="SUBMIT" className="wpcf7-form-control wpcf7-submit btn" />
                    </p>
                    <div className="wpcf7-response-output wpcf7-display-none"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact