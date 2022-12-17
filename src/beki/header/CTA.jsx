import React from 'react'
import CV from '../../asset/cv.pdf'
import   './header.css'
const CTA =()=>{
    return(
<div className='cta'>
    <a href={CV} className="btn">Download</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>
    )
}
export default CTA