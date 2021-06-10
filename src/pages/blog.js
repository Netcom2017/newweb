import React from "react";
import Header from "../components/Layout/Header/Header";
import BlogMain from "../components/Blog/BlogMain";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import Footer from "../components/Layout/Footer/Footer";

class Blog extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb />
          {/* breadcrumb-area-start */}

          {/* Blog Main */}
          <BlogMain />
          {/* Blog Main End */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
