import React from 'react';     //rfc
import PropTypes from 'prop-types';  //impt
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.aboutText}</Link>
        </li>
        
        
      </ul>
      {/*
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      */}

      {/* Toggle mode swich */}
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input  onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode </label>
          </div>
    </div>
  </div>
</nav>
    </div>
  )
}

//the below prptypes says that both the props that is title and aboutText has to be string
//isRequired= Both the props has to provided either by defaultprops method or manual prottotypes method . otherwise it will throw error
Navbar.prototypes={title:PropTypes.string.isRequired,
aboutText: PropTypes.string.isRequired
}

//default props will work when props is not given by users
//Setting default props is a good practice
Navbar.defaultProps = {
   title: 'Add title',
   aboutText:'about'
 };
 