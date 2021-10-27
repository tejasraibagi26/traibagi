import React, { useEffect } from "react";
import "../CSS/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Yes");
            entry.target.classList.remove("hide");
            entry.target.classList.add("text-transform");
          } else {
            console.log("No");
            entry.target.classList.add("hide");
            entry.target.classList.remove("text-transform");
          }
        });
      },
      { threshold: 0.0 }
    );

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //Add
          entry.target.classList.add("text-transform-2");
          setTimeout(() => {
            entry.target.classList.remove("hide");
          }, 600);
        } else {
          //Remove
          entry.target.classList.add("hide");
          entry.target.classList.remove("text-transform-2");
        }
      });
    });

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //Add
          entry.target.classList.add("text-transform-3");
          setTimeout(() => {
            entry.target.classList.remove("hide");
          }, 800);
        } else {
          //Remove
          entry.target.classList.add("hide");
          entry.target.classList.remove("text-transform-3");
        }
      });
    });

    observer.observe(document.querySelector(".title"));
    observer2.observe(document.querySelector(".about-me"));
    observer3.observe(document.querySelector(".links"));
  });

  return (
    <section id="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="about-me">
          Hey! I'm a 21 year old developer currently pursuing Master's in
          Computer Science from Stevens Institute of Technology. <br />I love
          creating mobile apps and websites. I've been working with ReactJs and
          Flutter for the past 2 years and growing stronger everyday!
        </div>
        <div className="links">
          <a
            href="https:www.github.com/tejasraibagi26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/tejasraibagi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}
