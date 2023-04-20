import React, { useEffect, useState } from "react";
import "./timeline.css";

const timeline = () => {
  return (
    <div className="timeline-wrapper">
      <h1>TIMELINE</h1>
      <div className="timelinetimelineWrapper">
        <TimelineSingle
          isLeft={true}
          date={"2023-04-18"}
          title={"REGISTRATION STARTS"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-18"}
          title={"REGISTRATION ENDS"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-20"}
          title={"SUBMISSION OF IDEAS"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-25"}
          title={"SHORTLISTED TEAMS ARE ANNOUNCED"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-22"}
          title={"CODe DESIGN WEEK BEGINS"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-27"}
          title={"INAUGURATION OF DESIGNATHON"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-27"}
          title={"DESIGNATHON BEGINS"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-28"}
          title={"DESIGNATHON ENDS"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-28"}
          title={"VALEDECTORY CEREMONY OF CDW ‘23"}
        />
      </div>
    </div>
  );
};

const TimelineSingle = ({ isLeft, date ,title}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    console.log(date);
    if (new Date(date) < new Date()) {
      setIsCompleted(true);
    }
  }, []);
  return (
    <div
      className={
        isLeft ? "timelineSingleWrapperLeft" : "timelineSingleWrapperRight"
      }
    >
      <div
        className="timelinesingleContentWrapper"
        style={{
          textAlign: isLeft ? "right" : "left",
          borderLeft: isLeft ? null : "3px solid white",
          borderColor: isCompleted ? "#E30069" : "white",
          borderWidth: "3px",
          borderRight: isLeft ? "3px solid white" : null,
          translate: isLeft ? "1.2px" : "-1.2px",
        }}
      >
        {isCompleted && (
          <div
            className="round"                                              
            style={{
              left: !isLeft ? "calc(-10px - 1.5px)" : "",
              right: isLeft ? "calc(-10px - 1.5px)" : "",
            }}
          >
            <div></div>
          </div>
        )}
        <span>{date}</span>
        <h2>{title}</h2>
      </div>
      <div></div>
    </div>
  );
};
export default timeline;
