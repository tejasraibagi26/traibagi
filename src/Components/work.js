import React, { useEffect } from "react";
import "../CSS/work.css";
import placeholder from "../app.png";

export default function Work() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.add("hide");
            entry.target.classList.remove("animated");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(document.querySelector(".work__title"));
    observer.observe(document.querySelector(".showcase__item"));
  });

  return (
    <section id="work">
      <div className="work__container">
        <h2 className="work__title anim hide">Work</h2>
        <div className="showcase">
          <div className="showcase__container">
            <div className="showcase__item hide">
              <div className="img">
                <img
                  src={placeholder}
                  alt="NotesUp project made with React and MongoDB"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
