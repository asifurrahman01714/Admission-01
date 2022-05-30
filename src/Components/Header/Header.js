import React from 'react'

export default function Header() {
  return (
    <container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Admission</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </container>
    
  )
}