import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

// import '../../app.css'

const Navbar = () => {
  return (
    <div className='col-md-12 navbar'>
        <div className='container'>
            <div className='main d-flex justify-content-between'>
                {/* <div className="col-md-3 logo">
                    <h4>File Uploader</h4>
                </div>
                <div className="col-md-9 nav-links">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="#">Login</a></li>
                        <li class="list-inline-item"><a href="#">Logout</a></li>
                        <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant=""
                        title={
                            <img
                            src="/profile_ic.png"
                            alt="Dropdown Icon"
                            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                            />
                        }
                        className="mt-2"
                        data-bs-theme="dark"
                        >
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                            Separated link
                        </Dropdown.Item>
                        </DropdownButton>
                    </ul>
                    
                </div> */}
                <header>
                    <a href="#" className='logo-d'><img src="./public/upload1.png" alt="logo" className="logo" /><h4 className='mb-0'>FileBridge</h4></a>
                    
                    <input type="checkbox" id="check" />

                    <label htmlFor="check" className="icons">
                        <i className="bx bx-menu" id="menu-icon" />
                        <i className="bx bx-x" id="close-icon" />
                    </label>

                    
                    <nav className="navbar1">
{/*                         
                        <a href="#" className="nav-item" style={{"--i":"0"}}>Home</a>
                        <a href="#" className="nav-item" style={{"--i":"1"}}>Login / Register</a> */}

                        <Link to="/" className="nav-item" style={{ "--i": "5" }}>
                            Home
                        </Link>
                        <Link to="/login" className="nav-item" style={{ "--i": "5" }}>
                            Login / Signup
                        </Link>
                        {/* <Link to="/signup" className="nav-item" style={{ "--i": "5" }}>
                            Signup
                        </Link> */}
                        {/* <Link to="/dashboard" className="nav-item" style={{ "--i": "5" }}>
                            Dashboard
                        </Link> */}

                    </nav>

                    {/* <div className='w-auto d-flex justify-content-end'>
                        <ul className="list-inline mb-0 w-auto">
                            <DropdownButton
                                id="dropdown-button-dark-example2"
                                variant=""
                                title={
                                    <img
                                    src="/profile_ic.png"
                                    alt="Dropdown Icon"
                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                    />
                                }
                                className="mt-0 w-auto"
                                data-bs-theme="dark"
                            >
                            <Dropdown.Item href="#/action-1" className='w-auto' active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">
                                Separated link
                            </Dropdown.Item>
                            </DropdownButton>
                        </ul>
                    </div> */}
                </header>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar