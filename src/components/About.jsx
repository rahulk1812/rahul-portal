import React from "react";
import about from "./data/about.json";

const About = () => {
  return (
    <div className="container ex" id="about">
      <h1>ABOUT ME</h1>
      {about.map((data) => (
        <div
          key={data.id}
          className="ex-items text-center my-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {data.startDate} {data.endDate}
              </span>{" "}
              <span style={{ color: "yellow" }}>{data.location}</span>
            </h4>

            {/* Render each line in 'about' as paragraph */}
            {data.about.map((line, index) => (
              <p key={index} style={{ color: "white" }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;


