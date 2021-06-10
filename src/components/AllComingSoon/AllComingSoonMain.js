import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AllComingSoonMain extends Component {
  render() {
    return (
      <main>
        {/* <!-- services-area-start --> */}
        <div class="services-area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center ml-50 mr-50 mb-80">
                  <span className="border-left-1"></span>
                  <span>Coming Soon</span>
                  <span className="border-right-1"></span>
                  <h1>We are updating our website</h1>
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

export default AllComingSoonMain;
