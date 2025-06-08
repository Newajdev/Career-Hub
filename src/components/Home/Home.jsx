import React, { useEffect, useState } from 'react';
import HeroBanner from '../HeroSction/HeroBanner';
import Container from '../HeroSction/Container';
import Subtiltes from '../Subtiltes';
import Descripton from '../Descripton';
import Catagory from './JobCatagory/Catagory';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Featured Jobs/jobs';
import PrimaryBtn from '../PrimaryBtn';


const Home = () => {
    const Categorys = useLoaderData();

    const [jobs, setjobs] = useState([]);
    
    useEffect(()=>{
        fetch('jobs.json')
        .then (res => res.json())
        .then (data => setjobs(data))
    }, [])
    

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
                        {
                            Categorys.map(Category => <Catagory Category={Category}></Catagory>)
                        }
                    </div>
                </div>
                <div className='mb-[130px]'> 
                    <Subtiltes name={`Featured Jobs`} ></Subtiltes>
                    <Descripton name={'Explore thousands of job opportunities with all the information you need. Its your future'}></Descripton>
                    <div className='grid grid-cols-2 gap-6 my-10'>
                        {
                            jobs.map(job => <Jobs job={job}></Jobs>)
                        }
                    </div>
                    <div className='text-center'><PrimaryBtn name={'See All Jobs'}></PrimaryBtn></div>
                </div>
            </Container>

        </div>
    );
};

export default Home;