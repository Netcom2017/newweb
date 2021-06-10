import React, { Component } from "react";
import SliderDefault from "../Elements/Slider/SliderDefault";
import About from "./AboutSection";
import Service from "./ServiceSection";
import WhyChooseUs from "./WhyChooseUs";
import Cta from "./CtaSection";
import Testimonial from "./TestimonialSection";
import Brand from "../Common/Brand";
import CounterDefault from "../Elements/Counter/CounterDefault";
import WorkSection from "../HomeTwo/WorkSection";

class HomeMain extends Component {
  render() {
    return (
      <main>
        {/* slider-start */}
        <SliderDefault />
        {/* slider-start */}

        {/* about-area-start */}
        <About />
        {/* about-area-end */}

        {/* services-area-start */}
        <Service />
        {/* services-area-end */}
        {/* working-start */}
        <WorkSection />
        {/*choose-area-start*/}
        <WhyChooseUs />
        {/*choose-area-start*/}

        {/* counter-area-start */}
        <CounterDefault />
        {/* counter-area-end */}
        {/* testmonial-area-start */}
        <Testimonial />
        {/* testmonial-area-end */}
        {/* cta-area-start */}
        <Cta />
        {/* cta-area-end */}
        {/* brand-area-start */}
        <Brand />
        {/* brand-area-end */}
      </main>
    );
  }
}

export default HomeMain;
