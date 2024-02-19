import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dr. A.P.J Abdul Kalam Technical University,Lucknow
            </h4>
            <p>
            I have completed MCA (Master Of Computer Application) from Dr. A.P.J Abdul Kalam Technical University, Lucknow in 2019. I have knowledge about Computer Network,Computer Organization and Programming Languages like JAVA and OOPS concept.
           </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Institute Of Computer Science And Technology, Varanasi
            </h4>
            <p>
            I have completed BCA (Bachelor Of Computer Application) from Institute Of Computer Science and Technology (ICST) Varanasi affiliated from Mahatma Gandhi Kashi Vidyapith in 2016 with First Division Marks and I have knowledge about Programming languages like C, Java and also about Data Structure and Algorithms
           </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
