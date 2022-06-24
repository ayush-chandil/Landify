import React from 'react'
import "./content.css";
import Mark from "../images/mark.png";
import Testimonial from "../images/Testimonial.png";
import Testimonial1 from "../images/Testimonial1.png";
import Testimonial2 from "../images/Testimonial2.png";

function Reviews() {
  return (
    <>
      <div className='cont'>
        <img style={{ opacity: "0.3", marginLeft: "112px", paddingTop: "64px" }} src={Mark} />
        <p id="reviews">Real Stories from Real<br></br> Customers</p>
        <p id="review_desc">Get inspired by these stories</p>

        <img style={{ marginLeft: "200px", marginTop: "64px" }} src={Testimonial} />
        <img style={{ marginLeft: "-1px", marginTop: "-300px" }} src={Testimonial1} />
        <img style={{ marginLeft: "-500px", marginTop: "300px" }} src={Testimonial2} />
      </div>
    </>
  )
}

export default Reviews