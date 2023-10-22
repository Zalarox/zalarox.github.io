import React from "react";
import { TimelineData } from "../models/TimelineData";
import "./Timeline.scss";

const Timeline = ({ data }: { data: TimelineData[] }) => {
  return (
    <div className="timeline">
      {data.map((entry, i) => (
        <>
          {i % 2 === 0 && (
            <>
              <div className="timeline-empty" />
              <div
                className={`timeline-middle ${
                  i === data.length - 1 ? "fadeout" : null
                }`}
              >
                <div className="timeline-circle" />
              </div>
            </>
          )}
          <div className="timeline-content">
            <span className="date">{entry.Date}</span>
            <span className="title">{entry.Title}</span>
            <span className="subtitle">{entry.Subtitle}</span>
          </div>
          {i % 2 !== 0 && (
            <>
              <div
                className={`timeline-middle ${
                  i === data.length - 1 ? "fadeout" : null
                }`}
              >
                <div className="timeline-circle" />
              </div>
              <div className="timeline-empty" />
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Timeline;
