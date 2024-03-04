import React from "react";

import PageHeaderContent from "../../components/Header";

import "./aboutstyles.css";

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <PageHeaderContent headerText="About Me" />
      </section>
      <section className="aboutme">
        <div className="profession">
        <h1>Profession</h1>
        <p>
          Hi,this is Deepika Tummala .I am Front-End Developer. 
        </p>

        </div>

        <div className="edu">
          <h1>Education</h1>
          <div className="edu-sub">
            <p>
              I Completed my Btech, in Agriculture Engineering from Vignan
              University,Guntur. Learnt Web Development from Devtown Platfrom
              But mostly intrested in Front-End Technology.
            </p>
          </div>
        </div>
        <div className="skil">
          <h1>Skills</h1>
          <div className="skill-sub">            
          <button>HTML</button>
          <button className="btn">CSS</button>
          <button>JavaScript</button>
          <button>Tailwind</button>
          <button>React JS</button>
               
          </div>
          <br />


                

      

        </div>
      </section>
    </div>
  );
};
export default About;
