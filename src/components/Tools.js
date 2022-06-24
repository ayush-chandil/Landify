import React from 'react'
import Logos from "../images/Logos.png";
function Tools() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex" }} className='container'>
                    <p id="achiements1">Easy Integrations <br></br>with 170+ tools</p>
                    <p id="achiements_desc1">Connect Landify with your favourite tools that you use <br></br>daily and keep things on track.</p>

                </div>
                <div>
                    <img id="logos" src={Logos} />
                </div>
            </div>
        </>
    )
}

export default Tools