import './index.scss';
import React, { useState } from 'react';

const NavBar = () => {

    const [navbar, setNavBar] = useState('nav-container');
    const changebackground = () => {
        if (window.scrollY >= 10) {
            setNavBar('nav-container nav-scroll')
        }
        else {
            setNavBar('nav-container')
        }
    }

    window.addEventListener('scroll', changebackground)
    return (
        <nav className={navbar}>
            <a href="#home" className='nav-homelink'>
                <h3>Portfolio</h3>
            </a>
            <div className='nav-pagelinks'>
                <a href="#about">about</a>
                <a href="#experience">experience</a>
                <a href="#projects">projects</a>
                <a href="#contact">contact</a>
            </div>
            <a target='_blank' href="www.google.com" className='nav-resume'>Resume</a>
        </nav>
    )
}

export default NavBar