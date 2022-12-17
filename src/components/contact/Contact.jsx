import React from "react";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
//import emailjs from 'emailjs-com'
const Contact = () =>{
    const form=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_USER_ID')
      e.target .reset() 
    }
    return(

    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                    <MdOutlineEmail className="contact_option-icon"/>
                   <h4>Email</h4> 
                   <h5>bereketdinku80@gmail.com</h5>
                   <a href="mailto:bereketdinku80@gmail.com"target="_blank">Send Message</a>
                </article>
                <article className="contact_option">
                    <RiMessengerLine className="contact_option-icon"/>
                   <h4>Messenger</h4> 
                   <h5>Bereket Dinku</h5>
                   <a href="https:bereketdinku80@gmail.com">Send Message</a>
                </article>
                <article className="contact_option">
                    <BsWhatsapp className="contact_option-icon"/>
                   <h4>WhatsApp</h4> 
                   <h5>+251901108024</h5>
                   <a href="https://api.whatsapp.com/send?phone+251901108024">Send Message</a>

                </article>
            </div>
            <form action=""ref={form} onSubmit>
                <input type="text"name="name"placeholder="Your Full Name" required/>
                <input type="email"name="email"placeholder="Your Email" required />
                <textarea name="message" id="" rows="7"placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>)
}
export default Contact