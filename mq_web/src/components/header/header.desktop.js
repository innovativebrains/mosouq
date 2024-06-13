import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-header" style={{ color: "white", backgroundColor: 'lightblue', height:'30px' }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">

            <li className="nav-item active ms-5">
              <a className="nav-link" href="#">1234567890</a>
            </li>

            <li className="nav-item ms-5">
              <a className="nav-link" href="/contact">Contact us</a>
            </li>

            <li className="nav-item ms-5">
              <a className="nav-link" href="#">Signin / Signup</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
