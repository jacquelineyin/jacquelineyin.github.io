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
                <Link to={`/#${children.id}`}>{children.label}</Link>
            </li>
        );
    } 
    return null;   
}