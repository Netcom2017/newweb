import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="header-top-area d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 align-items-center">
            <div className="header-info header-left d-none d-lg-block ">
              <span className="header-ph">
                <i>
                  <FontAwesomeIcon icon={["far", "phone"]} />
                </i>{" "}
                <a href="tel:917620665635">+91 76206 65635</a>
              </span>
              <span className="header-en">
                <i>
                  <FontAwesomeIcon icon={["far", "envelope-open"]} />
                </i>{" "}
                <a href="mailto:sales@netcom-india.com">
                  sales@netcom-india.com
                </a>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 align-items-center">
            <div className="header-right d-none d-lg-block">
              <Link href="coming-soon" as="coming-soon">
                <a>Careers</a>
              </Link>
              <Link href="/blog" as="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/contact" as="/contact">
                <a>Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
