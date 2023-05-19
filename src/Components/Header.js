import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
    return (
        <h5>SHAHID UL ISLAM</h5>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/"> <li>Home </li></Link>
                    <Link to="/about"> <li>About</li> </Link>
                    <Link to="/portfolio"><li>Portfolio </li> </Link>
                    <button>Dark Mode</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
