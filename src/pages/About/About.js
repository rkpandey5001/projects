import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="image/rahul.jpg" alt="imagepic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hye everyone, My Name is Rahul Kumar Pandey. I have completed MCA from Dr. A.P.J Abdul Kalam Technical University, Lucknow. I have knowledge about atmost all computer science subject like operating system, computer network, C Programming,  Data Structue and Algorithm ,Java and also DBMS. I have one year experience in    Android Development from e.Soft Technologies, Lucknow.

              Self-motivated, highly passionate and hardworking fresher looking for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the Organization.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
