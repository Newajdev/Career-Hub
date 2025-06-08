import React from 'react';
import PrimaryBtn from '../PrimaryBtn';

const HeroBanner = () => {
    return (
        <>
            <div className='flex items-center justify-between pt-10'>
                <div>
                    <h1 className='font-extrabold text-[80px] w-[588px] leading-[100px] mb-6'>One Step Closer To Your <span className='text-transparent from-Start to-End bg-clip-text bg-gradient-to-r'>Dream Job</span></h1>
                    <p className='text-subtite font-medium text-lg w-[536px] mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <PrimaryBtn name={'Get Started'}></PrimaryBtn>
                </div>
                <div><img className='w-[816px] ml-24' src="/src/assets/images/user.png" alt="" /></div>
            </div>
        </>
    );
};

export default HeroBanner;