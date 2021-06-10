import React, { Component } from "react";
import AccordionDefault from "../Elements/Accordion/AccordionDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyChooseUs = () => {
  return (
    <div>
      <main>
        {/* choose-area-start */}
        <div
          className="choose-area pt-130 pb-130"
          style={{
            "background-image": "url(assets/img/bg/whychooseus-bg.jpg)",
          }}
        >
          <div className="choose-bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="faq-wrapper">
                    <div className="section-title mb-45">
                      <span className="b-sm-left-1"></span>
                      <span className="b-sm-left-2"></span>
                      <span className="sub-t-left">why choose us</span>
                      <h1>We Are Expert In Our Domain Sector</h1>
                    </div>
                    <p>
                      Our creative, marketing and digital in-house team offer
                      professional web design and development, Search Engine
                      Optimisation (SEO), comprehensive campaign planning,
                      content marketing, Pay-Per-Click (PPC) advertising, Social
                      Media Strategy, and all aspects of branding and Logo
                      Designing Solutions.
                    </p>
                    <p>
                      Strengthening all our work is our commitment to clients to
                      always provide the best possible service and finding the
                      right ideas to accomplish all business goals.
                    </p>
                    <p>
                      We feel proud to have helped hundreds of fascinating and
                      diverse companies of small and medium sizes and industries
                      realize their online growth potential. Many of our clients
                      use us year after year, forging a strong relationship
                      built on trust, integrity, and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* choose-area-end */}
      </main>
    </div>
  );
};

export default WhyChooseUs;
