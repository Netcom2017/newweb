import React from "react";
import FooterBottom from "./FooterBottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="footer-area grey-bg pt-80 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 text-center">
              <div className="footer-wrapper mb-30">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="assets/img/logo/logo.png"
                      alt="netcom-business-solution-logo"
                    />
                  </a>
                </div>
                <div className="footer-icon">
                  <h5 className="text-center">Follow Us</h5>
                  <a href="https://www.facebook.com/netcombusinesssolutions/">
                    <i>
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/company/netcombusinesssolutions">
                    <i>
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                  <a href="https://www.instagram.com/netcomindia/">
                    <i>
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </i>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918766550668">
                    <i>
                      <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                    </i>
                  </a>
                </div>
                <div className="google-partner mt-3">
                  <img
                    src="assets/img/logo/google.png"
                    alt="netcom-business-solution-logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="footer-wrapper mb-30">
                <h4 className="footer-title">Our Services</h4>
                <ul className="fotter-menu">
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      E-Commerce Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Applications Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      UI/UX Designing
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Other Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="footer-wrapper mb-30">
                <h4 className="footer-title">Our Solutions</h4>
                <ul className="fotter-menu">
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Industry Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Integrated Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      CRM Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      SaaS Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Software Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon" as="/coming-soon">
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="footer-wrapper mb-30">
                <h4 className="footer-title">Contact Us</h4>
                <ul className="contact-link">
                  <li>
                    <div className="contact-address-icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="contact-address-text">
                      <a href="tel:917620665635">+91-76206 65635</a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-address-icon">
                      <i className="far fa-envelope-open"></i>
                    </div>
                    <div className="contact-address-text">
                      <a href="mailto:sales@netcom-india.com">
                        sales@netcom-india.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-address-icon">
                      <i className="far fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-address-text">
                      <h4>
                        Office No 201 & 202, Premlok Complex, Near HP Petrol
                        Pump, Above Banana Leaf Restaurant, Visharant Wadi,
                        Pune, 411015.
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
