import React from 'react';

const HeroContainer = ({ children }) => {
    return (
        <div className='bg-gradient-to-r from-Start5 to-End5'>
            <div className='max-w-[1320px] mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default HeroContainer;