import React from 'react'
import Mockup from "../images/Phone Mockup.png";
import Companies from "../images/Logo Clouds 01.png";
// import "../components/content.css";


function Content() {
    return (
        <>
            <div style={{ background: "rgba(242, 247, 255, 0.7)" }} className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>The easiest way to<br></br> manage projects</h1>
                        <h2>From the small stuff to the big picture, organizes the work so teams know<br></br> what to do, why it matters, and how to get it done.</h2>
                        <div className='section'>
                            <button id="started">Get Started</button>
                            <button id="video">Watch Video</button>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={Mockup} id="mockup" />
                    </div>
                </div>
                <img src={Companies} id="companies" />
            </div>
        </>
    )
}

export default Content