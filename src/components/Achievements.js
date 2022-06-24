import React from 'react'
import Base from "../images/Base feature icon.png";
import Component from "../images/Component.png";
import Layout from "../images/Layout.png";
import Grid from "../images/Grid.png";

function Achievements() {
  return (
    <>
      <div style={{ display: "flex" }} className='container'>
        <p id="achiements">Our 18 years of <br></br>achievements</p>
        <p id="achiements_desc">With our super powers we have reached this</p>


      </div>
      <div className='section1'>
        <p id="num1"> <img style={{ marginTop: "2px", marginLeft: "-40px" }} src={Base} /> <p style={{ marginTop: "-60px", marginLeft: "6px" }}> <p id="num">10,000+ </p><br></br>Downloads per day </p></p>
        <p id="num1"> <img style={{ marginTop: "2px", marginLeft: "-40px" }} src={Layout} /> <p style={{ marginTop: "-60px", marginLeft: "6px" }}> <p id="num">2 Million </p><br></br>Users </p> </p>
        <p id="num1"><img style={{ marginTop: "2px", marginLeft: "-40px" }} src={Component} /> <p style={{ marginTop: "-60px", marginLeft: "6px" }}> <p id="num">500+</p><br></br>Clients </p></p>
        <p id="num1"> <img style={{ marginTop: "2px", marginLeft: "-40px" }} src={Grid} /> <p style={{ marginTop: "-60px", marginLeft: "6px" }}><p id="num">140</p><br></br>Countries </p></p>
      </div>
    </>
  )
}

export default Achievements