import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StaticWebsiteDevelopment from "./StaticWebsiteDevelopment";
import DynamicWebsiteDevelopment from "./DynamicWebsiteDevelopment";

class AllWebsiteDevelopmentMain extends Component {
  render() {
    return (
      <main>
        {/* <!-- website-development-start --> */}
        <div className="container website-development">
          <div className="row static">
            <div className="col-md-12">
              <StaticWebsiteDevelopment />
            </div>
            <div className="col-md-12">
              <DynamicWebsiteDevelopment />
            </div>
          </div>
        </div>
        {/* <!-- website-development-end --> */}
      </main>
    );
  }
}

export default AllWebsiteDevelopmentMain;
