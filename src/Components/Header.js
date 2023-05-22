import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
const Title = () => {
    return (
        <Link to="/" className='title'>
            <img className='logo' src={logo} alt="Shahid ul islam logo" />
            <p className='name'>SHAHID UL ISLAM</p>
        </Link>
    )
}

const Header = () => {
    return (
        <header>
            <Title />
            <nav>
                <ul className='nav-links'>
                    <Link to="/about"> <li>About Me</li> </Link>
                    <Link to="/services"><li>Services </li> </Link>
                    <Link to="/projects"><li>Projects </li> </Link>
                    <Link to="/skills"><li>Skills </li> </Link>
                    <Link to="/contact"><li>Contact </li> </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
