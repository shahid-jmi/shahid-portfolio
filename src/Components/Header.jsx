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
        <header className='flex justify-between bg-black text-white shadow-sm m-12 p-5'>
            <Title />
            <div className='flex py-3'>
                <ul className='flex'>
                    <Link to="/about"> <li className="px-2">About Me</li> </Link>
                    <Link to="/services"><li className="px-2">Services </li> </Link>
                    <Link to="/projects"><li className="px-2">Projects </li> </Link>
                    <Link to="/skills"><li className="px-2">Skills </li> </Link>
                    <Link to="/contact"><li className="bg-blue-400 rounded-xl px-2 mr-2">Contact </li> </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
