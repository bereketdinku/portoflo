import React from "react";
import './portfolio.css'
import IMG1 from '../../asset/img1.jpg'
import IMG2 from '../../asset/img2.jpg'
import IMG3 from '../../asset/img3.jpg'

const Portfolio = () =>{
    return (
        <section id="portfolio">
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
           <article className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={IMG1}></img>
            </div>
            <h3>This is a portfolio item title</h3> 
            <a href="https://github.com"className="btn">Github</a>   
            
           </article>
           <article className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={IMG2}></img>
            </div>
            <h3>This is a portfolio item title</h3> 
            <a href="https://github.com" className="btn">Github</a>   
            
           </article>
           <article className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={IMG3}></img>
            </div>
            <h3>This is a portfolio item title</h3> 
            <a href="https://github.com" className="btn">Github</a>   
            
           </article>
            </div>
        </section>
    )
}
export default Portfolio