import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AllWebsiteDevelopmentMain from "../components/AllWebsiteDevelopment/AllWebsiteDevelopmentMain";

class WebsiteDevelopment extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb pageTitle="Website Development" />
          {/* breadcrumb-area-start */}
          {/* About Main */}
          <AllWebsiteDevelopmentMain />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default WebsiteDevelopment;
