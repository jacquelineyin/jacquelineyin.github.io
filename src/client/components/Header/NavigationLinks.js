import React from 'react';
import ReactDom from 'react-dom';
import {  useLocation, Link } from "react-router-dom";
import './NavigationLinks.css'

export const NavigationLinks = (props) => {
    let { children, keyVal } = props;
    let location = useLocation();
    
    console.log(children);

    if (children) {
        return (
            <li className='nav-link'>
                <Link to={`/#${children.pathname}`}>{children.label}</Link>
            </li>
        );
    } else {
        return null;
    }
    return null;   
}