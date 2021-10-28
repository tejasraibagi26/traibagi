import React, { useEffect, useState } from "react";
import "../CSS/work.css";
import resume from "../Downloads/Raibagi_Tejas.pdf";

export default function Work() {
  useEffect(() => {
    const observer = new IntersectionObserver((entires) => {
      entires.forEach(
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

    const observer2 = new IntersectionObserver((entires) => {
      entires.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("hide");
            }, 600);
            entry.target.classList.add("text-transform-2");
          } else {
            console.log("hide");
            entry.target.classList.add("hide");
            entry.target.classList.remove("text-transform-2");
          }
        },
        { threshold: 0.4 }
      );
    });

    const observer3 = new IntersectionObserver((entires) => {
      entires.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("hide");
            }, 1100);
            entry.target.classList.add("text-transform-3");
          } else {
            console.log("hide");
            entry.target.classList.add("hide");
            entry.target.classList.remove("text-transform-3");
          }
        },
        { threshold: 0.4 }
      );
    });

    observer.observe(document.querySelector(".work-title"));
    observer2.observe(document.querySelector(".work-details"));
    observer3.observe(document.querySelector(".resume"));
  });

  let descArr = [
    {
      key: "CP",
      desc: "I interned at CP Converger as a Web Developer for the span of Dec 2020 - Jan 2021. During the course of the internship i worked on creating the Front-end of their portal using HTML , CSS, JavaScript. As this was my very first internship i learned lot of things. How to collaborate with other interns / team-members. Time management skills became a priority during my internship to delivery daily task on time!",
    },
    {
      key: "AP",
      desc: "Worked as technical lead for my final year project for my undergraduate. Developed a cross-platform application to allow ordering canteen facility on campus. Implemented analytics to plan and strategize to make profits and find user reviews on dishes to improve. Used Flutter, NodeJs, PostgreSQL as the tech stack.",
    },
  ];
  const [desc, setDesc] = useState(descArr[0]["desc"]);

  const changeTextOnClick = (e) => {
    let details = document.getElementById("details");
    console.log(details);
    if (e.target.id === "CP") {
      let ap = document.getElementById("AP");
      ap.classList.remove("active");
      e.target.classList.add("active");
      details.classList.add("fadeIn");
      setDesc(descArr[0]["desc"]);
      setTimeout(() => {
        details.classList.remove("fadeIn");
      }, 1000);
    } else {
      let cp = document.getElementById("CP");
      cp.classList.remove("active");
      e.target.classList.add("active");
      details.classList.add("fadeIn");
      setDesc(descArr[1]["desc"]);
      setTimeout(() => {
        details.classList.remove("fadeIn");
      }, 1000);
    }
  };

  return (
    <section id="work">
      <div className="work-container">
        <div className="work-title">Work</div>
        <div className="work-details">
          <div className="left-titles">
            <ul>
              <li className="active" id="CP" onClick={changeTextOnClick}>
                CP Converge
              </li>
              <li id="AP" onClick={changeTextOnClick}>
                A.P Shah Institute of Technology
              </li>
            </ul>
          </div>
          <div className="right-desc">
            <div className="details" id="details">
              {desc}
            </div>
          </div>
        </div>
        <div className="resume">
          <a href={resume} download="Raibagi_Tejas">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
