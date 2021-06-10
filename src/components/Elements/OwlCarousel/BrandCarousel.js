import React from "react";
import OwlCarousel from "react-owl-carousel2";

const BrandCarousel = () => {
  const navPrevIcon = () =>
    '<span><img src="assets/img/svg/long-arrow-left.svg" with="50"/></span>';
  const navNextIcon = () =>
    '<span><img src="assets/img/svg/long-arrow-right.svg" /></span>';

  const options = {
    items: 1,
    nav: true,
    dots: true,
    rewind: false,
    autoplay: true,
    stagePadding: 380,
    loop: true,
    center: true,
    navText: [navPrevIcon, navNextIcon],
    responsive: {
      0: {
        stagePadding: 0,
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        stagePadding: 0,
      },
      992: {
        items: 1,
        stagePadding: 0,
      },
      1200: {
        items: 1,
        stagePadding: 380,
      },
      1500: {
        items: 1,
        stagePadding: 430,
      },
    },
  };

  return (
    <React.Fragment>
      <OwlCarousel options={options}>
        <div className="col-12">
          <img src="assets/img/brand/skin-world.png" alt="" />
        </div>
        <div className="col-12">
          <img src="assets/img/brand/physiotherapy.png" alt="" />
        </div>
        <div className="col-12">
          <img src="assets/img/brand/creative-academy.png" alt="" />
        </div>
        <div className="col-12">
          <img src="assets/img/brand/dr-purva-shah.png" alt="" />
        </div>
      </OwlCarousel>
    </React.Fragment>
  );
};
export default BrandCarousel;
