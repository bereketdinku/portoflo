import React from "react";
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
const Experience=()=>{
    return(
        <section id="experience">
            <h5>what skills I have</h5>
            <h2>My Experience</h2>
         <div className="container experience_container">
            
            <div className="frontend_container">
         <h3>FrontEnd Developement</h3>
         <div className="content">
         <article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>HTML</h3>

         <small>Experienced</small>

         </div>
         </article>
         <article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>CSS</h3>

         <small>Experienced</small>

         </div>
         </article><article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>javascript</h3>

         <small>Experienced</small>

         </div>
         </article><article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>Java</h3>

         <small>Experienced</small>

         </div>
         </article><article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>React</h3>

         <small>Experienced</small>

         </div>
         </article><article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>Bootstrap</h3>

         <small>Experienced</small>

         </div>
         </article>
         </div>
            </div>
            <div className="frontend_container">
         <h3>Backend Developement</h3>
         <div className="content">
         <article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>PHP</h3>

         <small>Experienced</small>

         </div>
         </article>
         <article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>Python</h3>

         <small>Experienced</small>

         </div>
         </article>
         <article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>Tailwind</h3>

         <small>Experienced</small>

         </div>
         </article>
         <article className="experience">
         <BsPatchCheckFill className="ex_icon"/>
         <div>
         <h3>laravel</h3>

         <small>Experienced</small>

         </div>
         </article>

            </div></div>
            </div>          
        </section>
    )
}
export default Experience