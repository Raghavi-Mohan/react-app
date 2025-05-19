import React, { Component, Fragment } from 'react'
import { RiTiktokFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className='navbar navColor container-fluid d-flex justify-content-between align-items-center'>
                    <div className='w-50 d-flex'>
                        <h2 className='logo ms-5 mt-2'>Art by TextureAndTones</h2>
                    </div>
                    <div className='w-50 ms-auto'>
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item mx-2">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active myactive-link" : "")} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active myactive-link" : "")} to="/products">Paintings</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active myactive-link" : "")} to="/crafts">KeyChains & Magnets</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active myactive-link" : "")} to="/aboutme">About</NavLink>
                            </li>
                            <li className="nav-item mx-3 ms-4 mt-2">
                                <a href="https://www.instagram.com/texturedcanvaspainting" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                                    <i className="fab fa-instagram fa-lg"></i></a>
                            </li>
                            <li className="nav-item mx-3 mt-2">
                                <a href="https://www.youtube.com/@R-ArtTherapy/shorts" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                                    <i className="fab fa-youtube fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item mx-3 mt-2">
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    <RiTiktokFill size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
