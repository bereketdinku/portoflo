import React from "react";
import './About.css'
import ME from '../../asset/beki.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"
const About = () =>{
    return (
    <section id="about">
        <h5>Get TO Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={ME} alt=""/>
                </div>
            </div>
            <div className="about_content">
             <div className="about_cards">
                <article className="about_card">
                    <FaAward className="about_icon"/>
                 <h5>Experience</h5>
                 <small>Junior</small>   
                </article>
                <article className="about_card">
                    <FiUsers className="about_icon"/>
                 <h5>Clients</h5>
                 <small>on progress</small>   
                </article>
                
                  </div> 
                  <p>web Development with junior Knowledge and fresh experience working in web technology</p> <a href="#contact"className="btn btn-primary">Let s Talk</a>
               
            </div>
        </div>
    </section>)
}
export default About