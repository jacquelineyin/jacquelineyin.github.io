import React from "react";
import { NavigationLinks } from "./NavigationLinks";
import "./HeaderContent.css";

export const HeaderContent = () => {
    let navs = getNavObjects();

    return ( 
        <div className="header-content">
            <div className="header-title">Jackie's Portfolio</div>
            {createNavigation(navs)}
        </div>
        )
}

/**
 * Purpose: Creates a navigation container with navigation links
 * @param {Array} navs = array of nav objects
 * Ex. 
 *    [
 *      {label: "About", pathname: "about"},
 *      ...
 *    ]
 */
const createNavigation = (navs) => {
    if (navs) {
        let navLink = navs.map(nav => 
            <NavigationLinks key={nav.label}>{nav}</NavigationLinks>);

        return (
            <ul className="nav">
                {navLink}
            </ul>
        )
    }

    return null;
}

const getNavObjects = () => {
    let navs = [];
    let about = { label: "About", id: "about"};
    let projects = { label: "Projects", id: "projects"};
    let contact = { label: "Contact", id: "contact"};

    navs.push(about);
    navs.push(projects);
    navs.push(contact);
    return navs;
}