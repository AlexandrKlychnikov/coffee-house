import * as React from "react";
import "./about.sass";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__heading">
        Resource is
        <span className="about__accent">
          &nbsp;the perfect and cozy place&nbsp;
        </span>
        where you can enjoy a variety of hot beverages, relax, catch up with
        friends, or get some work done.
      </h2>
      <div className="about__images">
        {["one", "two", "three", "four"].map((img) => (
          <div className={`about__image ${img}`} key={img}></div>
        ))}
      </div>
    </section>
  );
};
export default About;
