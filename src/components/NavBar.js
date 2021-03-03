import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 700) {
        return (
            <header className="headerNav">
                <div className="container mx-auto flex justify-between">
                    <nav className="flex">
                        <NavLink
                            to="/"
                            exact
                            activeClassName="text-white"
                            className="inline-flex items-center py-6 px-3 mr-4 text-red-900 hover:text-yellow-500 text-5xl font-bold cursive tracking-widest"
                        >
                            CapriLucas
                        </NavLink>
                        <NavLink
                            to="/post"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-900 hover:text-yellow-500"
                            activeClassName="bg-red-50"
                        >
                            Blog Posts
                        </NavLink>
                        <NavLink
                            to="/project"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-900 hover:text-yellow-500"
                            activeClassName="bg-red-50"                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-900 hover:text-yellow-500"
                            activeClassName="bg-red-50"                        >
                            About Me!
                        </NavLink>
                    </nav>
                    <div className="inline-flex px-3 py-3 my-6">
                        <SocialIcon
                            url="https://github.com/CapriLucas"
                            img={faGithub}
                            className="mr-4"
                        />
                        <SocialIcon
                            url="https://www.linkedin.com/in/lucas-capriata-1639b4183/"
                            img={faLinkedin}
                            className="mr-4 "

                        />

                    </div>
                </div>
            </header>
        );
    }
    else {
        // For smartphones
        return (
            <header className="bg-red-600">
                <div className="container mx-auto flex justify-between">
                    <nav className="flex">
                        <NavLink
                            to="/"
                            exact
                            activeClassName="text-white"
                            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                        >
                            CapriLucas
                        </NavLink>
                    </nav>
                    <div className="inline-flex px-3 py-3 my-6">
                        <HamburgerMenu />
                    </div>
                </div>
            </header>
        );
    }
}
function HamburgerMenu(props) {
    const [active, activate] = useState(null);
    return (
        <div>
            <div onClick={() => activate("active")}>
                <SocialIcon
                    img={faBars}
                    className="mr-4"
                />
            </div>
            <div className={`menu ${active}`} onClick={() => activate(null)}>

                <NavLink
                    to="/post"
                    className="items-center py-3 px-3 hijo-menu rounded text-red-200 hover:text-green-800"
                >
                    Blog Posts
                        </NavLink>
                <NavLink
                    to="/project"
                    className="items-center py-3 px-3 hijo-menu rounded text-red-200 hover:text-green-800"
                >
                    Projects
                        </NavLink>
                <NavLink
                    to="/about"
                    className="items-center py-3 px-3 hijo-menu rounded text-red-200 hover:text-green-800"
                >
                    About Me!
                </NavLink>
                <SocialIcon
                    url="https://github.com/CapriLucas"
                    img={faGithub}
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/lucas-capriata-1639b4183/"
                    img={faLinkedin}

                >Hola</SocialIcon>
            </div>
        </div>
    );

}

// <SocialIcon url="">
function SocialIcon(props) {
    const className = `align-middle social ` + props.className;
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={className} icon={props.img} />
        </a>
    );
}