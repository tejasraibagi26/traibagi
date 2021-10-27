import React from "react";
import "../CSS/landing.css";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__container">
        <h1 className="landing__title anim">
          Hey there, <br></br>I'm Tejas Raibagi and welcome to my portfolio.
        </h1>
        <p className="landing__subtitle sub-anim">
          Scroll down to see what I've been up to.
        </p>
      </div>
    </section>
  );
}
