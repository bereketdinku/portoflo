import React from "react"
import { BsApple } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
//import {FiDribble} from 'react-icons/fi'

const HeaderSocials=()=>{
    return(
        <div className="header_socials">
       <a> < BsApple/></a>
       <a><BsLinkedin /></a> 
       <a><FaGithub /></a>
        </div>
    )
}
export default HeaderSocials