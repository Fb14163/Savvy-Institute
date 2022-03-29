import React from 'react';
import logo from '../../../images/Savvy Logo.png';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useHistory
} from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="45" height="35" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#ged">GED</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#ielts">IELTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#login">Sign in</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#oietc">OIETC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#oietc">Offers</a>
                            </li>



                        </ul>




                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;