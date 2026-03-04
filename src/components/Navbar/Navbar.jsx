import React from 'react';
import navLogo from '../../assets/logo.png'
import dollar from '../../assets/dollar.png'

const Navbar = ({availableBalance}) => {
    return (
      <div className="sticky top-0 z-50 bg-base-100 shadow py-2">
        <div className='w-11/12 lg:w-10/12 mx-auto flex items-center '>
          {/* logo  */}
        <div className="flex-1 ">
          <a className="">
            <img className='w-15 h-15' src={navLogo} alt="" />
          </a>
        </div>
        {/* total amount  */}
        <div className="flex gap-1">
          <span> {availableBalance} Coin</span>
          <span><img className='w-4 h-4  mt-1' src={dollar} alt="" /></span>
        </div>
        </div>
        
      </div>
    );
};

export default Navbar;