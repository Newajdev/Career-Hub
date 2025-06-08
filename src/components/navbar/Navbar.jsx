import React from 'react';
import NavRouters from './navlist/NavRouters';
import PrimaryBtn from '../PrimaryBtn';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' flex items-center justify-between pt-12'>
            <Link to={'/'} className='font-extrabold text-3xl hover:cursor-default'>Career Hub</Link>
            <NavRouters></NavRouters>
            <PrimaryBtn name={'Start Applying'}></PrimaryBtn>
        </div>
        
    );
};

export default Navbar;