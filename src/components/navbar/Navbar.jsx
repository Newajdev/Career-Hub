import React from 'react';
import NavRouters from './navlist/NavRouters';
import PrimaryBtn from '../PrimaryBtn';

const Navbar = () => {
    return (
        <div className=' flex items-center justify-between'>
            <h3 className='font-extrabold text-3xl hover:cursor-default'>Career Hub</h3>
            <NavRouters></NavRouters>
            <PrimaryBtn name={'Start Applying'}></PrimaryBtn>
        </div>
        
    );
};

export default Navbar;