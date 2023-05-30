import React from 'react'
import pic from '../assets/images/shahid.png'

const Body = () => {
    return (
        <div className='bg-black flex '>
            <div className='w-2/4 m-auto align-middle'><h1 className='text-pink-50 w-2/4'>Body Component</h1></div>
            <div className='w-2/4'><img className="w-96 h-auto" src={pic} alt="Photo" /></div>
        </div>
    )
}

export default Body
