import React from 'react';
import { NavLink} from 'react-router-dom';
//import logo from '../images/sheroes-logo.png';


const TopNavigation = ({ data }) => {

    console.log(data);

        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
            <NavLink className="navbar-brand" to="/">
           Logo Name
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            

            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/feed">Feed</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/communities">Communities</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/champions">Champions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/articles">Articles</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Events
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/event">Another action</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/meterailui">Material-UI</NavLink>
                    </div>
                </li>
                </ul>

                {!data && (
                    <React.Fragment>
                        <NavLink className="btn btn-secondary"  to="/login">Login/Register</NavLink>
                    </React.Fragment>
                    )}
                    {data && (
                    <React.Fragment>

                    <div className="dropdown">
                            <a className="userProlie_img dropdown-toggle" id="menu1" data-toggle="dropdown">{data.name}
                            <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <NavLink className="dropdown-item" role="presentation" to="/profile">Profile</NavLink> 
                            <NavLink className="dropdown-item" role="presentation" to="/dashboard"> Dashboard</NavLink>
                            <NavLink className="dropdown-item" role="presentation"to="/logout">Lagout</NavLink>
                            </ul>
                        </div>
                    </React.Fragment>
                    )}
                 
                
               
                {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
              
            </div>
            </div>
            </nav>
         );
}
 
export default TopNavigation;


