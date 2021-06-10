import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  return (
    <div
      className="working-process-area pos-rel pt-120 pb-100"
      style={{ backgroundImage: `url(${"assets/img/bg/bg-6.jpg"})` }}
    >
      <div className="shape d-none d-xl-block">
        <div className="shape-item wor-01 rotateme">
          <img src="assets/img/shape/shape-2.png" alt="" />
        </div>
        <div className="shape-item wor-02 rotateme">
          <img src="assets/img/shape/shape-3.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
              <span className="border-left-1"></span>
              <span>working process</span>
              <span className="border-right-1"></span>
              <h1>How Does We Works</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper text-center mb-30">
              <div className="working-process-icon">
                <i>
                  <FontAwesomeIcon icon={["fal", "head-side-brain"]} />
                </i>
                <div className="angle-icon">
                  <img src="assets/img/shape/line.png" alt="" />
                </div>
              </div>
              <div className="working-process-text">
                <h3>Select Project</h3>
                <p>
                  We are an expert Design, Media, and Digital Marketing agency
                  handing out a full range of creative services designed to help
                  our clients stand out from the crowd.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper text-center mb-30">
              <div className="working-process-icon">
                <i>
                  <FontAwesomeIcon icon={["fal", "atom-alt"]} />
                </i>
                <div className="angle-icon">
                  <img src="assets/img/shape/line.png" alt="" />
                </div>
              </div>
              <div className="working-process-text">
                <h3>Project Analysis</h3>
                <p>
                  Our team will work with you to drive your business ahead by
                  creating websites that are built to last, memorable branding,
                  clever SEO techniques, and paid ad campaigns that work best.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper mb-30 text-center">
              <div className="working-process-icon">
                <i>
                  <FontAwesomeIcon icon={["fal", "gem"]} />
                </i>
              </div>
              <div className="working-process-text">
                <h3>Finished Project</h3>
                <p>
                  We can deliver the results your company needs by providing
                  innovative digital experiences for your target audience,
                  improving customer interactions, and offering authentic
                  engagement through market-leading campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
