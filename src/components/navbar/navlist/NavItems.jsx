import React from 'react';

const NavItems = ({name}) => {
    return (
        <li className='font-bold
         from-Start to-End
         text-subtite
         bg-clip-text
         hover:bg-gradient-to-r
         hover:text-transparent
         hover:cursor-pointer
         duration-500 '
         >
            {name}
        </li>
    );
};

export default NavItems;