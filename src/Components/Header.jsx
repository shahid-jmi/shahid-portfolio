import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Title = () => {
    return (
        <Link to="/" className='flex items-center text-white'>
            <img className="h-12 mr-2" src={logo} alt="Shahid ul islam logo" />
            <p className='text-xl font-bold'>SHAHID UL ISLAM</p>
        </Link>
    );
}

const Header = () => {
    return (
        <div className='bg-black text-white'>
            <header className='flex flex-col sm:flex-row justify-between items-center py-4 px-8'>
                <div className="flex items-center mb-4 sm:mb-0"> {/* This div is for the title and logo */}
                    <Title />
                </div>
                <ul className='flex items-center'> {/* Add items-center class to center the elements horizontally */}
                    <li className='mr-4'>
                        <Link to="/about" className="hover:text-blue-400">About Me</Link>
                    </li>
                    <li className='mr-4'>
                        <Link to="/services" className="hover:text-blue-400">Services</Link>
                    </li>
                    <li className='mr-4'>
                        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
                    </li>
                    <li className='mr-4'>
                        <Link to="/skills" className="hover:text-blue-400">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <button className="bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-md">Contact</button>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
