import React from 'react'
import Badge from "../images/_App badges.png";
import Screen from "../images/Phone Mockup 1.png";
import Mockup from '../images/Phone Mockup 2.png';
import Footer from "../images/Footer.png";

function Manage() {
  return (

    <div style={{ backgroundColor: "#1DB5BE"}}>

      <div className='container_1'>
        <p style={{ paddingTop: "60px" }} id="achiements">Manage all projects from <br></br>your mobile</p>
        <p style={{ marginTop: "50px" }} id="achiements_desc_1">Download the app to manage your projects, keep track of the <br></br>progress and complete tasks without procastinating. Stay on track <br></br> and complete on time!</p>

        <div style={{ display: "flex", flexDirection: "column" }} className='sub_container'>
          <p id="app">Get the App</p>
          <img id="badge" src={Badge} />
        </div>

        <div className='screens'>
          <img id="screen" src={Screen} />
          <img id="mock_up" src={Mockup} />
        </div>
      </div>
       
       <div>
         <img id="footer" src={Footer}/>
       </div>

    </div>
    

  )
}

export default Manage