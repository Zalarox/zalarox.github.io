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
          <span className="date">2013 - 2017</span>
          <span className="degree">
            Bachelor's in Technology, Computer Science
          </span>
          <span className="location">
            Amity University; (7.47/10 GPA - First Division)
          </span>
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
          <span className="date">2009 - 2013</span>
          <span className="degree">
            High School - Sciences, Computer Science
          </span>
          <span className="location">
            St. Andrews Scots Senior Sec. School (83%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
