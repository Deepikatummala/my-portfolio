import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/Header";
import { SocialIcon } from 'react-social-icons';
import "./contactstyles.css"

const Contact=()=>{
    return(
        <div>
                      <section id="contact" className="contact">
            <PageHeaderContent 
            headerText = "Contact Me"
            icon={< BsInfoCircleFill size={40} />}

            
            />
                            <div className="social-icons">
         <SocialIcon url="https://www.linkedin.com/in/deepika-tummala-582764209/" />
         <SocialIcon url="https://github.com/Deepikatummala" />
         <SocialIcon url="https://mail.google.com/mail/u/0/deepikatummala51272@gmail.com" />

        </div>

           </section>
        </div>
    )
}
export default Contact;