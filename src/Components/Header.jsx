import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
const Title = () => {
    return (
        <Link to="/" className='flex'>
            <img className="h-12" src={logo} alt="Shahid ul islam logo" />
            <p className='py-3'>SHAHID UL ISLAM</p>
        </Link>
    )
}

const Header = () => {
    return (
        <header className='flex justify-between bg-slate-50 shadow-sm'>
            <Title />
            <div className='flex py-3'>
                <ul className='flex'>
                    <Link to="/about"> <li className="px-2">About Me</li> </Link>
                    <Link to="/services"><li className="px-2">Services </li> </Link>
                    <Link to="/projects"><li className="px-2">Projects </li> </Link>
                    <Link to="/skills"><li className="px-2">Skills </li> </Link>
                </ul>
                <Link to="/contact"><button className="bg-blue-400 rounded-md px-2 mr-1">Contact </button> </Link>
            </div>
        </header>
    )
}

export default Header
