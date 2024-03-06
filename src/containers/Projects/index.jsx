import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/Header";
import "./projectstyles.css";

const Projects = () => {
  return (
    <div>
      <section id="rojects" className="projects">
        <PageHeaderContent
          headerText=" My Projects "
 
        />
        <div className="container">
          <div className="project">
            <h1 className="project-name">To-Do List</h1>
            <div className="project-button ">
              <a href="https://to-do-list-app-17e46.web.app" className="live">Live</a >
              <a href="https://github.com/Deepikatummala/to-do-list-app" className="source">Source Code</a >
            </div>
          </div>
          <div className="project">
            <h1 className="project-name">Weather App</h1>

            <div className="project-button ">
              <a href="https://weather-app-3acc1.web.app"   className="live">Live</a >
              <a  href="https://github.com/Deepikatummala/weather-app/tree/master/main" className="source">Source Code</a >
            </div>
          </div>

          <div className="project">
            <h1 className="project-name">Passenger Count</h1>
            <div className="project-button ">
              <a href="https://subway-count.web.app/" className="live">Live</a >
              <a href="https://github.com/Deepikatummala/passenger-count" className="source">Source Code</a >
            </div>
          </div>
          <div className="project">
            <h1 className="project-name">Calculator</h1>
            <div className="project-button ">
              <a href="https://calculator-9734c.web.app" className="live">Live</a >
              <a  href="https://github.com/Deepikatummala/calculator" className="source" >Source Code</a >
            </div>
          </div>
          <div className="project">
            <h1 className="project-name">Login or Sign Up Form</h1>
            <div className="project-button ">
              <a href="https://login-form-b3468.web.app" className="live">Live</a >
              <a href="https://github.com/Deepikatummala/login-form" className="source">Source Code</a >
            </div>
          </div>
          <div className="project">
            <h1 className="project-name">Zomato Landing Page</h1>
            <div className="project-button ">
              <a href="https://zomato-landing-page.web.app" className="live">Live</a >
              <a href="https://github.com/Deepikatummala/zomato-webpage" className="source" >Source Code</a >
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
