import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2023 - December 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                4achievers pvt ltd, Noida
              </h4>
              <p>
                I have knowledge about Full Stack Development and all tools
                which are used in MERN like HTML,CSS,Javascript,React,Node,Express and Mongodb
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Front End Development
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Coding Ninjas
              </h4>
              <p>
                I have learn front end development in this company and tools like react,redux toolkit and other frameworks
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="February 2019 -  June 2019"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Android Development Internship
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               e.Soft Technologies pvt ltd, Lucknow
              </h4>
              <p>
                 I have done internship in android development in esoft Technology and learn so many tools which are used in android and also done projects on android.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
