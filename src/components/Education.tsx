import React from "react";
import EducationEntries from "./../static/Education";
import Timeline from "./Timeline";

const Education = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center mt-auto w-full">
      <Timeline data={EducationEntries} />
    </div>
  );
};

export default Education;
