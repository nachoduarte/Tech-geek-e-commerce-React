import logo from '../images/logo.png';
import '../styles/main.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import CartWidget from './CartWidget.js';


const NavBar = () =>{

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarDisplay">
                <NavLink to="/" className="logoDisplay">
                    <img src={logo} width="300px" height="50px" alt="logo" />
                </NavLink>
                <div>
                    <ul className="navbar-nav menuDisplay">
                        <li className="nav-button">
                            <NavLink to={`/category/notebooks`} activeClassName="currentCategory" className="nav-a fontReg">
                                Notebooks
                            </NavLink>
                        </li>
                        <li className="nav-button">
                            <NavLink to={`/category/procesadores`} activeClassName="currentCategory" className="nav-a fontReg">
                                Procesadores
                            </NavLink>
                        </li>
                        <li className="nav-button">
                            <NavLink to={`/category/motherboards`} activeClassName="currentCategory" className="nav-a fontReg">
                                Motherboards
                            </NavLink>
                        </li>
                        <li className="nav-button">
                            <NavLink to={`/category/gabinetes`} activeClassName="currentCategory" className="nav-a fontReg">
                                Gabinetes
                            </NavLink>
                        </li>
                        <li className="nav-button">
                            <NavLink to={`/category/placas de video`} activeClassName="currentCategory" className="nav-a fontReg">
                                Placas de video
                            </NavLink>
                        </li>
                        <li className="nav-button">
                            <a href="#" className="nav-a fontReg">
                                <CartWidget amount={0} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </>
}

export default NavBar;