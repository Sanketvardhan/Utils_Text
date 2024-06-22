import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


export default function Navbar(props) {

  useEffect(() => {
    props.primarymode('light')
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <div className="navbar-brand">{props.title}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
          {/* bg-primary rounded mx-2 */}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className={`btn btn-primary mx-2`} onClick={()=>props.primarymode('primary')} style={{height:'25px', width:'20px'}} type="button"></button>
            <button className={`btn btn-success mx-2`} onClick={()=>props.primarymode('success')} style={{height:'25px', width:'20px'}} type="button"></button>
            <button className={`btn btn-danger mx-2`} onClick={()=>props.primarymode('danger')} style={{height:'25px', width:'20px'}} type="button"></button>
            <button className={`btn btn-warning mx-2`} onClick={()=>props.primarymode('warning')} style={{height:'25px', width:'20px'}} type="button"></button>
            <button className={`btn btn-light mx-2`} onClick={()=>props.primarymode('light')} style={{height:'25px', width:'20px'}} type="button"></button>
            <button className={`btn btn-dark mx-2`} onClick={()=>props.primarymode('dark')} style={{height:'25px', width:'20px'}} type="button"></button>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set Title",
    mode: "light",
}