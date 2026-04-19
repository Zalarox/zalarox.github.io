import React from "react";
import { TimelineData } from "../models/TimelineData";

const Timeline = ({ data }: { data: TimelineData[] }) => {
  return (
    <div className="w-full max-w-[90%] md:max-w-[70%] flex flex-col md:grid md:grid-cols-[1fr_3px_1fr] mx-auto py-8">
      {data.map((entry, i) => (
        <React.Fragment key={i}>
          {i % 2 === 0 && (
            <>
              {/* Left column empty for even index on desktop, hidden on mobile */}
              <div className="hidden md:block" />
              {/* Middle line */}
              <div
                className={`hidden md:block relative w-[3px] ${
                  i === data.length - 1 ? "bg-gradient-to-b from-accent from-75% to-transparent to-100%" : "bg-accent"
                }`}
              >
                <div className="absolute top-0 left-1/2 w-[15px] h-[15px] rounded-full bg-accent -translate-x-1/2" />
              </div>
            </>
          )}
          {/* Main content card */}
          <div className="bg-[#1f1f1f] text-white p-6 my-4 mx-2 md:mx-6 rounded-lg flex flex-col gap-2 break-words shadow-lg border border-gray-800">
            <span className="text-accent font-semibold">{entry.Date}</span>
            <span className="font-bold text-xl mt-1">{entry.Title}</span>
            <span className="text-accent/80 italic">{entry.Subtitle}</span>
          </div>
          {i % 2 !== 0 && (
            <>
              {/* Middle line */}
              <div
                className={`hidden md:block relative w-[3px] ${
                  i === data.length - 1 ? "bg-gradient-to-b from-accent from-75% to-transparent to-100%" : "bg-accent"
                }`}
              >
                <div className="absolute top-0 left-1/2 w-[15px] h-[15px] rounded-full bg-accent -translate-x-1/2" />
              </div>
              {/* Right column empty for odd index on desktop, hidden on mobile */}
              <div className="hidden md:block" />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;
