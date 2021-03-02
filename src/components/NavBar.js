import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navBar.css';
export default function NavBar() {
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
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex px-3 py-3 my-6">
                    <SocialIcon
                        url="https://github.com/CapriLucas"
                        img="github"
                        className="mr-4"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/lucas-capriata-1639b4183/"
                        img="linkedin"
                        className="mr-4"

                    />

                </div>
            </div>
        </header>
    );
}
// <SocialIcon url="">
function SocialIcon(props) {
    const className = `fa fa-${props.img} ` + props.className;
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            <i className={className}>
            </i>
        </a>
    );
}