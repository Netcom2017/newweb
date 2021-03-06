import React, { Component, useState } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SliderDefault = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" onClick={onClick} className={className}>
        <i>
          <FontAwesomeIcon icon={["fas", "chevron-right"]} />
        </i>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" onClick={onClick} className={className}>
        {" "}
        <i>
          <FontAwesomeIcon icon={["fas", "chevron-left"]} />
        </i>
      </button>
    );
  }

  const settings = {
    className: "slider-active",
    autoplay: true,
    dots: false,
    slidesToShow: 1,
    speed: 500,
    fade: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-area">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openModal();
        }}
      />
      <Slider {...settings}>
        <div className="single-slider">
          <div
            className="slider-height slider-overlay d-flex align-items-center"
            style={{
              backgroundImage: `url(${"assets/img/slider/it-solutions-banner.jpg"})`,
            }}
          >
            <div className="container">
              <div className="row ">
                <div className="col-xl-8 col-lg-8">
                  <div className="slider-content">
                    <h1 data-animation="fadeInLeft" data-delay=".3s">
                      Perfect IT Solutions For Your Business
                    </h1>
                    <div
                      className="slider-button"
                      data-animation="fadeInUp"
                      data-delay=".7s"
                    >
                      <Link href="/about" as="/about">
                        <a className="btn">
                          <span className="btn-text">
                            learn more{" "}
                            <i>
                              <FontAwesomeIcon
                                icon={["fas", "long-arrow-right"]}
                              />
                            </i>{" "}
                          </span>
                        </a>
                      </Link>
                      <Link href="/about" as="/about">
                        <a className="text-link">
                          <span>
                            How It Works{" "}
                            <i>
                              <FontAwesomeIcon
                                icon={["fas", "long-arrow-right"]}
                              />
                            </i>{" "}
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider">
          <div
            className="slider-height slider-overlay d-flex align-items-center"
            style={{
              backgroundImage: `url(${"assets/img/slider/digital-marketing-solutions.jpg"})`,
            }}
          >
            <div className="container">
              <div className="row ">
                <div className="col-xl-8 col-lg-8">
                  <div className="slider-content">
                    <h1 data-animation="fadeInLeft" data-delay=".3s">
                      Perfect Digital Marketing Solutions For Your Business
                    </h1>

                    <div
                      className="slider-button"
                      data-animation="fadeInUp"
                      data-delay=".7s"
                    >
                      <a className="btn" href="/about" as="/about">
                        <span className="btn-text">
                          learn more{" "}
                          <i>
                            <FontAwesomeIcon
                              icon={["fas", "long-arrow-right"]}
                            />
                          </i>{" "}
                        </span>{" "}
                      </a>
                      <a className="text-link" href="/about" as="/about">
                        How It Works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderDefault;
