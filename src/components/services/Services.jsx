import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () =>{
    return (
        <section id="services">
            <h5>what I Offer</h5>
            <h2>Services</h2>
            <div className="container services_container">

             <article className='service'>
                <div className="service_head">
                  <h3>UI/UX Design</h3>  
                </div>

             <ul className='service_list'>
                <li>
                    <BiCheck className='service_list-icon'/>
                    <p>A user-centerd mindset and sensitivity for design turned out to be the perfect fit  . 
               </p>
                 </li>
                
                    
                    
             </ul>
                </article>  
                <article className='service'>
                <div className="service_head">
                  <h3>Web Development</h3>  
                </div>

             <ul className='service_list'>
                <li>
                    <BiCheck className='service_list-icon'/>
                    <p>I develop the user interface
               </p>
                 </li>
                <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Web page Development
               </p>
                 </li><li>
                    <BiCheck className='service_list-icon'/>
                    <p> 
               </p>
                 </li>
             </ul>
                </article>  
                <article className='service'>
                <div className="service_head">
                  <h3>My Previous Projects</h3>  
                </div>

             <ul className='service_list'>
                <li>
                    <BiCheck className='service_list-icon'/>
                    <p>  Park Tour website
               </p>
                 </li>
                 <li>
                    <BiCheck className='service_list-icon'/>
                    <p>  Student Registration Management Systems
               </p>
                 </li>
                  </ul>
                </article>   
            </div>


        </section>
    )
}
export default Services

