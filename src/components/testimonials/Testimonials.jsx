import React from "react";
import './testimonials.css'
import MEMEBER1 from '../../asset/member-8.png'
import MEMEBER2 from '../../asset/member-3.png'
import MEMEBER3 from '../../asset/member-6.png'
import {   Pagination } from "swiper";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'

const data =[
    {
        avatar:MEMEBER1,
        name:'Tina',
        review:' Java is sometimes called a strongly typed language because '
    },
    {
        avatar:MEMEBER2,
        name:'lau',
        review:' Java is sometimes called a strongly typed language because '
    },
    {
        avatar:MEMEBER3,
        name:'be',
        review:' Java is sometimes called a strongly typed language because '
    },
]
const Testimonials = () =>{
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable:true}}
            scrollbar={{draggable:true}}
            onSwiper={(swiper)=>console.log(swiper)}
            onSlideChange={()=>console.log('slide change')}
            >
               {
                data.map(({avatar,name,review},index)=>{
                    return (
                        <SwiperSlide key={index}className="testimonial">
                            <div className="client_avatar">
                            <img src={avatar}/>
                            </div>
                            <h5 className="client_name">{name}</h5>
                           <small className="client_review">{review}</small>
                        </SwiperSlide>
                    )
                })
               }
               
            </Swiper>
        </section>
    )
}
export default Testimonials