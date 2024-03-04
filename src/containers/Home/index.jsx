import React from "react";
import "./homestyles.css";
import {useNavigate} from "react-router-dom";
import {Animate} from "react-simple-animate";



const Home = () => {
  const navigate = useNavigate();

const handleNavigateToContactMePage= () => {
    navigate("/contact");

    
    

};

const handleNavigateToAboutMePage= () => {
  navigate("/about");

  
  

};
    

  return (
    <section id="home" className="home">
      <div className="home__text-wapper">
        <h2>
          Hello,<br />                   
          I am Deepika
          <p className="para">Front-End Developer</p>
    
        </h2>
      </div>
      
<Animate
              play
              duration={1.5}
              delay={1}
              start={{
                  transform : 'translateY(550px)'
              }}

              end={{
                transform : 'translatex(0px)'
            }}       
      >




      </Animate>
      <div className="button-container">
      <div className="home_about_me">
        <button onClick={handleNavigateToAboutMePage}>About Me</button>
      </div>
      <div className="home_contact_me">
        <button onClick={handleNavigateToContactMePage}>Contact Me</button>
      </div>

      </div>





    </section>

    




  );
};
export default Home;
