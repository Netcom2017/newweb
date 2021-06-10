import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialDefault = () => {
  function TestiNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" onClick={onClick} className={className}>
        <i>
          <FontAwesomeIcon icon={["fas", "chevron-right"]} />
        </i>
      </button>
    );
  }

  function TestiPrevArrow(props) {
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

  const testimonialSettings = {
    className: "testimonial-active",
    dots: false,
    centerMode: false,
    infinite: true,
    arrows: true,
    nextArrow: <TestiNextArrow />,
    prevArrow: <TestiPrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="testimonial-area">
      <Slider {...testimonialSettings}>
        <div className="testimonial-wrapper col">
          <div className="testimonial-text">
            <p>
              Working with NBS is the best decision I have ever made. I'd
              personally like to thank Mr. Ramit for guiding me throughout the
              process. They have a team of expert professionals who work so
              hard. They valued my opinions, needs and try their best to meet my
              business requirements. Thank you very much guys and keep it up!
            </p>
            <h4>Nilesh Ghadi</h4>
          </div>
        </div>
        <div className="testimonial-wrapper col">
          <div className="testimonial-text">
            <p>
              I got really good support from Netcom Business Solutions. My
              decision to build a website was right from them and I get good
              support from them from time to time.
            </p>
            <h4>Amrendra v Katkar</h4>
          </div>
        </div>

        <div className="testimonial-wrapper col">
          <div className="testimonial-text">
            <p>
              One wonderful group of people who are always on top of any
              activity and get things done proactively. I am very happy about
              them handling all my social media and also google ads. They go a
              step ahead of you to provide optimized solution before you think
              of it.
            </p>
            <h4>Saurabh Singh</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialDefault;
