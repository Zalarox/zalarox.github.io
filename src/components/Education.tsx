import React from "react";
import EducationEntries from "./../static/Education";
import Timeline from "./Timeline";
import "./Education.scss";
import "./Timeline.scss";

const Education = () => {
  return (
    <div className="education-container">
      <Timeline data={EducationEntries} />
    </div>
  );
};

export default Education;
