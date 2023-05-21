import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
    return (
        <Link to="/"><h5>SHAHID UL ISLAM</h5></Link>
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
                    <li><button>Dark Mode</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
