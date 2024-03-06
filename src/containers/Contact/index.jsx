import React from "react";

import PageHeaderContent from "../../components/Header";
import { SocialIcon } from 'react-social-icons';
import "./contactstyles.css";


const Contact=()=>{
    return(
        <div>
                      <section id="contact" className="contact">
            <PageHeaderContent 
            headerText = "Contact Me"


            
            />
             <div className="social-icons">
             <a href = "https://github.com/Deepikatummala">
                <img src="./assests/github.png" alt="github-pic"  />                  
                 </a>
                <a href = "https://www.linkedin.com/in/deepika-tummala-582764209/">
                <img src="./assests/linkdin.png" alt="linkdin-pic"  />                  
                 </a>
                <a href = "mailto:deepikatummala51272@gmail.com? subject =HTML link">
                <img src="./assests/mail.png" alt="mail-pic"  />                  
                 </a>



        </div>

           </section>
        </div>
    )
}
export default Contact;