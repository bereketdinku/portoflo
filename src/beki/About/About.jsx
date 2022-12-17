import React from 'react'
import './about.css'
import ME from '../../asset/beki.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About =()=>{
   return(
     <section id="about">
        <h5>Get TO Know</h5>
        <h2>About Me</h2>
         <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me-image'>
               <img src={ME}></img>
            </div>
          </div>
          <div className='about_content'>
            <div className='about_cards'>
               <article className='about_card'>
               <FaAward  className='about_icons'/>
               <h5>Experience</h5>
               <small>3+ years working</small></article>
               <article className='about_card'>
               <FiUsers className='about_icons' />
               <h5>Clients</h5>
               <small> </small></article>
               <article className='about_card'>
               <VscFolderLibrary className='about_icons' />
               <h5></h5>
               </article>
            </div>
            <p>I am junior react developer</p>
                <a href="#contact"className="btn btn-primary">Let's Talk</a>
           
          </div>
        </div>
     </section>
     
   ) 
}
export default About