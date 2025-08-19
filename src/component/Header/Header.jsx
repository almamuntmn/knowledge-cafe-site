import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 pb-4'>
            <h1 className="text-3xl font-bold">
                Knowledge Cafe
            </h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;