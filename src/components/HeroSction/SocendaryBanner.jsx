import React from 'react';

const SocendaryBanner = ({name}) => {
    return (
        <div>
            <div className='flex items-center justify-center py-14 relative'>
                <img className='absolute left-0 translate-x-[-86%]' src="/src/assets/images/bg1.png" alt="" />
                <img className='absolute right-0 top-0 translate-y-[-65%] translate-x-[100%]' src="/src/assets/images/bg2.png" alt="" />
                <div>
                    <h1 className='font-extrabold text-4xl leading-[100px] text-center'>{name}</h1>                    
                </div>
                
            </div>
        </div>
    );
};

export default SocendaryBanner;