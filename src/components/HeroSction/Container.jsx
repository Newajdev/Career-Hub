import React from 'react';

const HeroContainer = ({ children }) => {
    return (
        
            <div className='max-w-[1320px] mx-auto'>
                {children}
            </div>
        
    );
};

export default HeroContainer;