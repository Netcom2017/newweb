import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cta = () => {
  return (
    <div
      className="cta-area pt-125 pb-95"
      style={{ "background-image": "url(assets/img/bg/bg-2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="cta-text mb-30">
              <span>do you have any project ?</span>
              <h1>Let’s Talk About Business Solutions With Us</h1>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="cta-button text-lg-right mb-30">
              <a
                className="btn btn-white btn-none"
                href="/contact"
                as="/contact"
              >
                <span className="btn-text">
                  Let's Chat{" "}
                  <i>
                    <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                  </i>
                </span>{" "}
              </a>
              <a className="cta-link" href="tel:917620665635">
                <i>
                  <FontAwesomeIcon icon={["far", "phone"]} />
                </i>{" "}
                <a href="tel:917620665635">+91-7620665635</a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
