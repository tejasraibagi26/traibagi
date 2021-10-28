import React, { useEffect } from "react";
import "../CSS/contact.css";

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("text-transform");
          } else {
            entry.target.classList.add("hide");
            entry.target.classList.remove("text-transform");
          }
        },
        { threshold: 0.2 }
      );
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("hide");
            }, 600);
            entry.target.classList.add("text-transform-2");
          } else {
            entry.target.classList.add("hide");
            entry.target.classList.remove("text-transform-2");
          }
        },
        { threshold: 0.2 }
      );
    });

    observer.observe(document.querySelector(".contact-title"));
    observer2.observe(document.querySelector(".subtitle"));
  }, []);

  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact-title">Contact</h2>
        <p className="subtitle">
          You can contact me via{" "}
          <a href="mailto:traibagi@stevens.edu">email.</a>
        </p>
      </div>
    </section>
  );
}
