import React from 'react';
import HeroBanner from '../HeroSction/HeroBanner';
import Container from '../HeroSction/Container';
import Subtiltes from '../Subtiltes';
import Descripton from '../Descripton';
import Catagory from './JobCatagory/Catagory';


const Home = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-Start5 to-End5'>
                <Container>
                    <HeroBanner></HeroBanner>
                </Container>
            </div>
            <Container>
                <div > 
                    <Subtiltes name={'Job Category List'}></Subtiltes>
                    <Descripton name={'Explore thousands of job opportunities with all the information you need. Its your future'}></Descripton>
                    <div className='flex gap-6'>
                        <Catagory image={'/src/assets/icons/accounts.png'} Title={'Account & Finance'} Descripton={'300 Jobs Available'}></Catagory>
                        <Catagory image={'/src/assets/icons/creative.png'} Title={'Creative Design'} Descripton={'100+ Jobs Available'}></Catagory>
                        <Catagory image={'/src/assets/icons/marketing.png'} Title={'Marketing & Sales'} Descripton={'150 Jobs Available'}></Catagory>
                        <Catagory image={'/src/assets/icons/chip.png'} Title={'Engineering Job'} Descripton={'224 Jobs Available'}></Catagory>
                    </div>
                </div>
                <div > 
                    <Subtiltes name={'Featured Jobs'}></Subtiltes>
                    <div className='flex gap-6'>
                        
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Home;