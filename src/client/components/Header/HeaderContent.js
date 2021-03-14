import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import './HeaderContent.css';
import { NavigationLinks } from './NavigationLinks';

export const HeaderContent = () => {
    let navs = getNavObjects();

    return ( 
        <div className='header-content'>
            <div className='header-title'>Jackie's Portfolio</div>
            {createNavigationLinks(navs)}
        </div>
        )
}

/**
 * Purpose: Creates a navigation container with navigation links
 * @param {Array} navs = array of nav objects
 * Ex. 
 *    [
 *      {label: 'About', pathname: '/about'},
 *      ...
 *    ]
 */
const createNavigationLinks = (navs) => {
    if (navs) {
        let navLink = navs.map(nav => 
            <NavigationLinks key={nav.label}>{nav}</NavigationLinks>);

        return (
            <ul className='nav'>
                {navLink}
            </ul>
        )
    }

    return null;
}

const getNavObjects = () => {
    let navs = [];
    let about = { label: 'About', pathname: 'about'};
    let projects = { label: 'Projects', pathname: 'projects'};

    navs.push(about);
    navs.push(projects);
    return navs;
}