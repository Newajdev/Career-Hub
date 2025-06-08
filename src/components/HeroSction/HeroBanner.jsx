import React from 'react';
import PrimaryBtn from '../PrimaryBtn';

const HeroBanner = () => {
    return (
        <>
            <div className='flex'>
                <div>
                    <h1>One Step Closer To Your Dream Job</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <PrimaryBtn></PrimaryBtn>
                </div>
                <div><img className='w-[816px]' src="/src/assets/images/user.png" alt="" /></div>
            </div>
        </>
    );
};

export default HeroBanner;