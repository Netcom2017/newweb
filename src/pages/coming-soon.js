import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import Brand from "../components/Common/Brand";
import AllComingSoonMain from "../components/AllComingSoon/AllComingSoonMain";

class ComingSoon extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb pageTitle="Coming Soon" />
          {/* breadcrumb-area-start */}
          {/* About Main */}
          <AllComingSoonMain />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ComingSoon;
