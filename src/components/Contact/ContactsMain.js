import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";

const ContactMain = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9hosfvy",
        "template_v7s23l5",
        e.target,
        "user_MHBhoW8magUPVzVnzfJGo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <main>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3004101720653!2d73.91049221436933!3d18.560490372797528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c95861694675%3A0xbac360080a18183e!2sNetcom%20business%20Solutions!5e0!3m2!1sen!2sin!4v1577679688274!5m2!1sen!2sin"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen=""
      ></iframe>

      {/* <!-- contact-area start --> */}
      <section
        className="contact-info-area"
        style={{ backgroundImage: `url(${"assets/img/bg/bg-map.png"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div
                className="contact text-center mb-30"
                style={{
                  backgroundImage: `url(${"assets/img/bg/contact-bg.png"})`,
                }}
              >
                <i>
                  <FontAwesomeIcon icon={["far", "envelope-open"]} />
                </i>
                <h3>Mail Here</h3>
                <a href="mailto:sales@netcom-india.com">
                  sales@netcom-india.com
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div
                className="contact text-center mb-30"
                style={{
                  backgroundImage: `url(${"assets/img/bg/contact-bg.png"})`,
                }}
              >
                <i>
                  <FontAwesomeIcon icon={["far", "map-marker-alt"]} />
                </i>
                <h3>Visit Here</h3>
                <p>
                  Office No 201 & 202, Premlok Complex, Near HP Petrol Pump,
                  Above Banana Leaf Restaurant, Visharant Wadi, Pune, 411015.
                </p>
              </div>
            </div>
            <div className="col-xl-4  col-lg-4 col-md-4 ">
              <div
                className="contact text-center mb-30"
                style={{
                  backgroundImage: `url(${"assets/img/bg/contact-bg.png"})`,
                }}
              >
                <i>
                  <FontAwesomeIcon icon={["far", "phone"]} />
                </i>
                <h3>Call Us Now</h3>
                <a href="tel:917620665635">+91 76206 65635</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-area end --> */}

      {/* <!-- contact-us-area-start --> */}
      <div className="contact-2-area pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>contact us</span>
                <span className="border-right-1"></span>
                <h1>Don't Hesitate To Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="appointment-wrapper contact-form-page">
              <form className="appointment-form" onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-30">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-30">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-30">
                      <input
                        type="number"
                        name="number"
                        placeholder="Number Here"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-30">
                      <input
                        type="text"
                        name="business-location"
                        placeholder="Business Location"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-30">
                      <input
                        type="text"
                        name="website-url"
                        placeholder="Website Url"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-30">
                      <select class="form-control" name="service">
                        <option>Digital Marketing</option>
                        <option>Content Marketing (Buyers Funnel)</option>
                        <option>SEO (Search Engine Optimization)</option>
                        <option>Social Media Marketing (SMM & SMO)</option>
                        <option>PPC Advertising (Google, Yahoo & Bing)</option>
                        <option>
                          Facebook Marketing (Facebook, Insta & WhatsApp)
                        </option>
                        <option>Email Marketing</option>
                        <option>Web Development (CMS, Custom & Portal)</option>
                        <option>
                          Graphics Designing (Social Media, Ads Banners, Logo,
                          Flyers, Brouchers etc)
                        </option>
                        <option>
                          Mobile Application (For both - Android & iOS)
                        </option>
                        <option>
                          Copywriting (Blogs, Articles, Products Descriptions,
                          Reviews etc)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-30">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-30">
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <div className="contact-btn contact-2-btn text-center">
                      <button className="btn" type="submit" value="submit">
                        <span className="btn-text">
                          send message
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact-us-area-end --> */}
    </main>
  );
};

export default ContactMain;
