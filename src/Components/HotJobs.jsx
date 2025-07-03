import React, { useEffect, useState } from 'react';
import ViewJobs from './ViewJobs';

const HotJobs = () => {
    const [showJobs, setShowJobs] = useState([])


   useEffect(() => {
      fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setShowJobs(data))
   }, [])

    return (
       <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-0'>
           <div className='grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                showJobs.map((work) => <ViewJobs key={work._id} job={work}></ViewJobs>

                )
            }
        </div>
       </div>


    );
};


export default HotJobs;