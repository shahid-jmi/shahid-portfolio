import React from 'react';
import pic from '../assets/images/shahid.png';

const Body = () => {
    return (
        <div className='bg-black flex items-center'>
            <div className='w-1/2 text-center p-8'>
                <h1 className='text-pink-50 font-bold text-5xl mb-4'>SHAHID UL ISLAM</h1>
                <p className='text-white text-2xl'>I am a Full Stack Developer</p>
            </div>
            <div className='w-1/2'>
                <img className="w-96 h-auto m-auto" src={pic} alt="Photo" />
            </div>
        </div>
    );
}

export default Body;
