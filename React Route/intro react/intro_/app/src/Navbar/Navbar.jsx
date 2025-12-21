import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active"  to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='funcComponent2'>funcComponent2</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='MoviesDb'>Movies</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='parent' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to='funcComponent1'>funcComponent1</Link></li>
                    <li><Link className="dropdown-item" to='parent'>Parent</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to='parent'>Something else here</Link></li>
                </ul>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
