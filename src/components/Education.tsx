import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education-container">
      <div className="timeline">
        {/* Row 1 */}
        <div className="timeline-empty" />
        <div className="timeline-middle">
          <div className="timeline-circle" />
        </div>
        <div className="timeline-content">
          <span className="date">2019 - 2021</span>
          <span className="degree">Master's in Applied Computer Science</span>
          <span className="location">Concordia University; (4.17/4.3 GPA)</span>
        </div>

        {/* Row 2 */}
        <div className="timeline-content">
          <h3>Bachelor's in Technology: Computer Science Engineering</h3>
          <p>Amity University</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty" />

        {/* Row 3 */}
        <div className="timeline-empty" />
        <div className="timeline-middle fadeout">
          <div className="timeline-circle" />
        </div>
        <div className="timeline-content">
          <h3>High School: 2009-2013</h3>
          <p>St. Andrews Scots Sr. Sec. School</p>
          <p>Physics, Chemistry, Math, Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
