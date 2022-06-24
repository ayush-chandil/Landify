import React from 'react'
import Base from "../images/Base feature icon.png";
import Flexible from "../images/Flexibility.png";
import Component from "../images/Component.png";
import Organise from "../images/Organised.png";
import Freindly from "../images/UserFriendly.png";
import Layout from "../images/Layout.png";


function Features() {
  return (
    <>
      <div className='container'>
        <h1 id="heading">Tailor Made Features</h1>
        <h2 id="description">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a <br></br> <p style={{marginLeft:"200px"}}> document or visual presentation. </p> </h2>
      <div className='Row'>
         <div className='row'>
            <div className='col-4'>
             <img src={Base} id="base"/>
             <p id="feature">Robust Workflow</p>
             <p id="feature-desc">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            
            <div className='col-4'>
            <img src={Flexible} id="base"/>
            <p id="feature">Flexibility</p>
             <p id="feature-desc">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>

            <div className='col-4'>
            <img src={Freindly} id="base"/>
            <p id="feature">User friendly</p>
             <p id="feature-desc">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
         </div>

         <div className='row'>
            <div className='col-4'>
            <img src={Layout} id="base"/>
             <p id="feature">Multiple Layouts</p>
             <p id="feature-desc">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            
            <div className='col-4'>
            <img src={Component} id="base"/>
            <p id="feature">Better Components</p>
             <p id="feature-desc">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>

            <div className='col-4'>
            <img src={Organise} id="base"/>
            <p id="feature">Well Organised</p>
             <p id="feature-desc">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
         </div>
         </div>
      </div>
    </>
  )
}

export default Features