import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

class AllServiceMain extends Component {
  render() {
    return (
      <main>
        {/* <!-- services-area-start --> */}
        <div
          class="services-area pt-120 pb-100"
          style={{ backgroundImage: `url(${"assets/img/bg/bg-1.jpg"})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center ml-50 mr-50 mb-80">
                  <span className="border-left-1"></span>
                  <span>Our Services</span>
                  <span className="border-right-1"></span>
                  <h1>We provide exclusive services for your business</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src="assets/img/icon/icon-01.png" alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Web Development</h3>
                    <div className="services-text-button">
                      <Link href="/coming-soon" as="/coming-soon">
                        <span className="services-button">
                          read more
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src="assets/img/icon/icon-2.png" alt="" />
                  </div>
                  <div className="services-text">
                    <h3>E-Commerce Solutions</h3>
                    <div className="services-text-button">
                      <Link href="/coming-soon" as="/coming-soon">
                        <span className="services-button">
                          read more
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src="assets/img/icon/icon-3.png" alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Mobile App Development</h3>
                    <div className="services-text-button">
                      <Link href="/coming-soon" as="/coming-soon">
                        <span className="services-button">
                          read more
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src="assets/img/icon/icon-4.png" alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Digital Marketing</h3>
                    <div className="services-text-button">
                      <Link href="/coming-soon" as="/coming-soon">
                        <span className="services-button">
                          read more
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src="assets/img/icon/icon-5.png" alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Social Media Advertising</h3>
                    <div className="services-text-button">
                      <Link href="/coming-soon" as="/coming-soon">
                        <span className="services-button">
                          read more
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src="assets/img/icon/icon-6.png" alt="" />
                  </div>
                  <div className="services-text">
                    <h3>UX/UI Strategy</h3>
                    <div className="services-text-button">
                      <Link href="/coming-soon" as="/coming-soon">
                        <span className="services-button">
                          read more
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- services-area-end --> */}
      </main>
    );
  }
}

export default AllServiceMain;
