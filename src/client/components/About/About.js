import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div id='about'>
            {getDescription()}
        </div>
    )
}

const getDescription = () => {
    return (
        <div className='description'>
            Hello! I am a junior software developer.
        </div>
    )
}