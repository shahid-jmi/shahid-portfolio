import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Title = () => {
    return (
        <Link to="/" className='header-title'>
            <img className="h-12 mr-2" src={logo} alt="Shahid ul islam logo" />
            <p className='text-xl font-bold'>SHAHID UL ISLAM</p>
        </Link>
    );
}

const Header = () => {
    return (
        <div>
            <header className='header-container'>
                <div className="header-title">
                    <Title />
                </div>
                <ul className='header-links'>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className='mr-4'>
                        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
