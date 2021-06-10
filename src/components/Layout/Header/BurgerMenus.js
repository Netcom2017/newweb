import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setService(false);
      setBlog(false);
      setPages(false);
    } else if (menu == "service") {
      setHome(false);
      setService(!service);
      setBlog(false);
      setPages(false);
    } else if (menu == "blog") {
      setHome(false);
      setService(false);
      setBlog(!blog);
      setPages(false);
    } else if (menu == "pages") {
      setHome(false);
      setService(false);
      setBlog(false);
      setPages(!pages);
    }
  };

  return (
    <div className={menuOpen ? "side-mobile-menu open" : "side-mobile-menu"}>
      <div className="close-mobile-menu" onClick={() => setMenuOpen(false)}>
        <a>
          <i>
            <FontAwesomeIcon icon={["far", "times"]} />
          </i>
        </a>
      </div>
      <div className="mm-menu">
        <ul>
          <li>
            <Link href="/about" as="/about">
              <a>Who We Are</a>
            </Link>
          </li>
          <li className={service ? "has-droupdown active" : "has-droupdown"}>
            <a
              onClick={() => {
                openMobileMenu("service");
              }}
            >
              Our Services
            </a>
            <ul className={service ? "sub-menu active" : "sub-menu"}>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Website Development</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>E-Commerce Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Applications Development</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Digital Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>UI/UX Designing</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Other Services</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pages ? "has-droupdown active" : "has-droupdown"}>
            <a
              onClick={() => {
                openMobileMenu("pages");
              }}
            >
              Our Solutions
            </a>
            <ul className={pages ? "sub-menu active" : "sub-menu"}>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Industry Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Integrated Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>CRM Solution</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>SaaS Solution</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" as="/coming-soon">
                  <a>Software Solution</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
        <div className="header-button-btn d-lg-none">
          <a className="btn" href="/contact" as="/contact">
            <span className="btn-text">
              Request A Demo{" "}
              <i>
                <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
              </i>
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenus;
