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
        <div className='bg-black border-red-600 border-solid text-white'>
            <header className='flex justify-between m-4'>
                <Title />
                <div className='flex'>
                    <ul className='flex'>
                        <Link to="/about"> <li className="">About Me</li> </Link>
                        <Link to="/services"><li className="">Services </li> </Link>
                        <Link to="/projects"><li className="">Projects </li> </Link>
                        <Link to="/skills"><li className="">Skills </li> </Link>
                        <Link to="/contact"><li className="bg-blue-400 rounded-xl">Contact </li> </Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
