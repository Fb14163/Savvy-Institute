import React from 'react';
import logo from '../../../images/Savvy Logo.png';

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
                            <li className="nav-item">
                                <a className="nav-link" href="#">Spoken</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    OIETC
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Non Proxy</a></li>
                                    <li><a className="dropdown-item" href="#">Full Proxy</a></li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact-Us</a>
                                    </li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Offers</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;