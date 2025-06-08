import React from 'react';
import HeroBanner from '../HeroSction/HeroBanner';
import Container from '../HeroSction/Container';


const Home = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-Start5 to-End5'>
                <Container>
                    <HeroBanner></HeroBanner>
                </Container>

            </div>

        </div>
    );
};

export default Home;