import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AllServicesMain from "../components/AllServices/AllServiceMain";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb pageTitle="Our Service" />
          {/* breadcrumb-area-start */}
          {/* About Main */}
          <AllServicesMain />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Services;
