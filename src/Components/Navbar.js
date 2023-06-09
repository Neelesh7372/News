import React, { Component } from 'react'
// import{Link, useLocation} from "react-router-dom";
import{Link} from "react-router-dom";

export class Navbar extends Component {
  
  render() {
    // let location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    //   }, [location]);
      return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">NeelNews</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/">Home</Link> */}
                    <Link className="nav-link" aria-current="page" to="/General">Home</Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About Us</Link> */}
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>      
                </ul>
              </div>
            </div>
          </nav>

          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/General">General</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Business">Business</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Health">Health</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Science">Science</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Technology">Technology</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Sports">Sports</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    )
  }
}

export default Navbar