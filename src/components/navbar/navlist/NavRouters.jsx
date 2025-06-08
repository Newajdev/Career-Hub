import React from 'react';
import NavItems from './NavItems';

const NavRouters = () => {
    return (
       <ul className='flex gap-10'>
        <NavItems name={'Statistics'}></NavItems>
        <NavItems name={'Applied Jobs'}></NavItems>
        <NavItems name={'Blog'}></NavItems>
       </ul>
    );
};

export default NavRouters;