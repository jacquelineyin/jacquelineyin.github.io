import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


import './NavigationLinks.css'

export const NavigationLinks = (props) => {
    let { children } = props;

    if (children) {
        return (
            <li className='nav-link'>
                <Link to={{ hash: `${children.id}` }}>{children.label}</Link>
            </li>
        );
    }
    return null;
}