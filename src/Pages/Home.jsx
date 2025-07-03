import React from 'react';
import Banner from '../Components/Banner';
import HotJobs from '../Components/HotJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className='max-w-6xl mx-auto my-10 px-4 sm:px-6 lg:px-8'
            >
                <h1 className='md:text-5xl text-3xl font-bold text-center'>Find Your Dream Job</h1>
            </div>
          <div className='bg-[url(public/img/bg-2.jpg)]'>
              <div data-aos="fade-up" data-aos-duration="1000" className='max-w-6xl mx-auto  p-6'>
                <HotJobs></HotJobs>
            </div>
          </div>

        </div>
    );
};

export default Home;