import React, { useRef } from "react";
import Hero from "../components/hero";
import Featured_services from "../components/featured_services";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import SignUpForm from "../components/login";

import ListingsPage from "../components/listingpage";
import LoginForm from "../components/login1";
import Navbar from "../components/navbar";
const Home = () => {
  const heroRef = useRef(null);
  const featuredServicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      {" "}
      <Navbar
        heroRef={heroRef}
        featuredServicesRef={featuredServicesRef}
        testimonialRef={testimonialRef}
        footerRef={footerRef}
      />{" "}
      <div ref={heroRef}>
        {" "}
        <Hero />{" "}
      </div>{" "}
      <div ref={featuredServicesRef}>
        {" "}
        <Featured_services />{" "}
      </div>{" "}
      <div ref={testimonialRef}>
        {" "}
        <Testimonial />{" "}
      </div>{" "}
      <div ref={footerRef}>
        {" "}
        <Footer />{" "}
      </div>{" "}
    </>
  );
};

export default Home;
