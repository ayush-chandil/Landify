import React from 'react'
import Logo from "../images/Logo.png";
import Badge from "../images/_App badges.png";

function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">

          <img src={Logo} id="logo" />
          <a className="navbar-brand" href="#">Landify</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Features</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pricing</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Careers</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Help</a>
              </li>


            </ul>
            <img src={Badge} id="badge" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar