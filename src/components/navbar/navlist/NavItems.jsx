import { NavLink } from 'react-router-dom';

const NavItems = ({name}) => {
    return (
        <NavLink to={`/${name}`} className={`font-bold from-Start to-End text-subtite bg-clip-text hover:bg-gradient-to-r hover:text-transparent hover:cursor-pointer duration-500 `}>{name}</NavLink>
    );
};

export default NavItems;