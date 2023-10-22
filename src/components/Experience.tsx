import React from "react";
import ExperienceEntries from "./../static/Experience";
import Timeline from "./Timeline";
import "./Experience.scss";
import "./Timeline.scss";

const Experience = () => {
  return (
    <div className="experience-container">
      <span className="heading">
        Total Software Engineering experience: 4.5 years+
      </span>
      <Timeline data={ExperienceEntries} />
    </div>
  );
};

export default Experience;
