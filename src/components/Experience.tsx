import React from "react";
import ExperienceEntries from "./../static/Experience";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div className="flex flex-col mt-8 items-center justify-center w-full">
      <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 px-4 text-center">
        Total Software Engineering experience: 4.5 years+
      </span>
      <Timeline data={ExperienceEntries} />
    </div>
  );
};

export default Experience;
