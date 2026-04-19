import React, { useState } from "react";
import { TimelineData } from "../models/TimelineData";

const Timeline = ({ data }: { data: TimelineData[] }) => {
  const [showPartTime, setShowPartTime] = useState(false);
  const hasPartTime = data.some((entry) => entry.partTime);
  const visibleData = showPartTime ? data : data.filter((entry) => !entry.partTime);

  return (
    <div className="w-full">
      {hasPartTime && (
        <div className="flex justify-center md:justify-end w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] mx-auto mb-8 pr-2">
          <label className="flex items-center cursor-pointer gap-3 group select-none">
            <span className="text-gray-400 group-hover:text-gray-200 text-sm font-medium transition-colors duration-300">
              Show Part-Time
            </span>
            <div className="relative flex items-center">
              <input
                type="checkbox"
                className="sr-only"
                checked={showPartTime}
                onChange={() => setShowPartTime(!showPartTime)}
              />
              <div
                className={`block w-11 h-6 rounded-full transition-colors duration-300 ${
                  showPartTime ? "bg-accent" : "bg-gray-800 border border-gray-600"
                }`}
              ></div>
              <div
                className={`absolute left-1 bg-gray-200 w-4 h-4 rounded-full transition-transform duration-300 ${
                  showPartTime ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
      )}

      <div className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] mx-auto grid grid-cols-[24px_1fr] md:grid-cols-[1fr_24px_1fr]">
        {visibleData.map((entry, i) => {
          const isEven = i % 2 === 0;
          const isLast = i === visibleData.length - 1;

          return (
            <div key={i} className="contents">
              <div
                className={`relative w-[3px] mx-auto h-full ${
                  isLast ? "bg-gradient-to-b from-accent from-75% to-transparent to-100%" : "bg-accent"
                } col-start-1 md:col-start-2`}
                style={{ gridRowStart: i + 1 }}
              >
                <div className="absolute top-10 left-1/2 w-[15px] h-[15px] rounded-full bg-accent -translate-x-1/2 shadow-lg" />
              </div>

              <div
                className={`py-6 col-start-2 ${
                  isEven ? "md:col-start-3 md:pl-8 pl-6" : "md:col-start-1 md:pr-8 pl-6 md:pl-0"
                }`}
                style={{ gridRowStart: i + 1 }}
              >
                <div
                  className={`text-white p-6 rounded-xl flex flex-col gap-2 break-words shadow-lg border hover:border-accent/50 transition-all duration-300 ${
                    entry.partTime
                      ? "bg-[#1f1f1f]/40 border-dashed border-gray-700/80 text-gray-300"
                      : "bg-[#1f1f1f] border-gray-800"
                  }`}
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <span className="text-accent font-semibold">{entry.date}</span>
                    {entry.partTime && (
                      <span className="text-xs uppercase tracking-wider px-2 py-1 rounded-md bg-gray-800/80 text-gray-400 font-medium">
                        Part-Time
                      </span>
                    )}
                  </div>
                  <span className={`font-bold text-xl mt-1 ${entry.partTime ? "text-gray-300" : ""}`}>
                    {entry.title}
                  </span>
                  <span className="text-accent/80 italic">{entry.subtitle}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
