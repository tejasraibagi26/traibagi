import React from "react";
import About from "../Components/about";
import Contact from "../Components/contact";
import Footer from "../Components/footer";
import Landing from "../Components/Landing";
import Work from "../Components/work";

export default function Main() {
  return (
    <div>
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
