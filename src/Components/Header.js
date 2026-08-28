import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    state = {
        menuOpen: false
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    };

    closeMenu = () => {
        this.setState({
            menuOpen: false
        });
    };

    render() {
        const { menuOpen } = this.state;

        return (
            <header className="site-header">
                <nav className="modern-navbar">

                    {/* BRAND */}
                    <div className="brand-area">
                        <NavLink
                            to="/"
                            className="brand-link"
                            onClick={this.closeMenu}
                        >
                            <img
                                className="header-logo"
                                src={`${process.env.PUBLIC_URL}/texture-tones-logo.png`}
                                alt="Texture & Tones logo"
                            />

                            <span className="logo">
                                Art by TextureAndTones
                            </span>
                        </NavLink>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={this.toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* NAVIGATION */}
                    <div className={`modern-nav-container ${menuOpen ? 'menu-open' : ''}`}>
                        <ul className="modern-nav-list">

                            {/* HOME */}
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        `modern-nav-link ${isActive ? 'active' : ''}`
                                    }
                                    onClick={this.closeMenu}
                                >
                                    <span>Home</span>
                                </NavLink>
                            </li>


                            {/* PAINTINGS */}
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `modern-nav-link ${isActive ? 'active' : ''}`
                                    }
                                    onClick={this.closeMenu}
                                >
                                    <span>Paintings</span>
                                </NavLink>
                            </li>


                            {/* CRAFTS DROPDOWN */}
                            <li className="crafts-dropdown">

                                <NavLink
                                    to="/crafts"
                                    className={({ isActive }) =>
                                        `modern-nav-link crafts-main-link ${
                                            isActive || window.location.hash.startsWith('#/crafts')
                                                ? 'active'
                                                : ''
                                        }`
                                    }
                                    onClick={(e) => {
                                        // On desktop, hovering shows submenu.
                                        // On mobile, clicking Crafts opens the main crafts page.
                                        this.closeMenu();
                                    }}
                                >
                                    <span>Keepsakes</span>

                                    <span className="crafts-arrow">
                                        ↓
                                    </span>
                                </NavLink>


                                {/* SUBMENU */}
                                <div className="crafts-submenu">

                                    <NavLink
                                        to="/crafts/charms"
                                        onClick={this.closeMenu}
                                    >
                                        <span className="submenu-icon">🔗</span>
                                        <span>Charms</span>
                                    </NavLink>

                                    <NavLink
                                        to="/crafts/bookmarks"
                                        onClick={this.closeMenu}
                                    >
                                        <span className="submenu-icon">🔖</span>
                                        <span>BookMarks</span>
                                    </NavLink>

                                    <NavLink
                                        to="/crafts/magnets"
                                        onClick={this.closeMenu}
                                    >
                                        <span className="submenu-icon">◇</span>
                                        <span>Magnets</span>
                                    </NavLink>

                                    <NavLink
                                        to="/crafts/shells"
                                        onClick={this.closeMenu}
                                    >
                                        <span className="submenu-icon">🐚</span>
                                        <span>Shells</span>
                                    </NavLink>

                                     <NavLink
                                        to="/crafts/scentedtrays"
                                        onClick={this.closeMenu}
                                    >
                                        <span className="submenu-icon">♨</span>
                                        <span>Scented Trays</span>
                                    </NavLink>

                                </div>
                            </li>


                            {/* ABOUT */}
                            <li>
                                <NavLink
                                    to="/aboutme"
                                    className={({ isActive }) =>
                                        `modern-nav-link ${isActive ? 'active' : ''}`
                                    }
                                    onClick={this.closeMenu}
                                >
                                    <span>About</span>
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </nav>
            </header>
        );
    }
}