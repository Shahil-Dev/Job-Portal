import Lottie from 'lottie-react';
import React from 'react';
import animationData from '../assets/lottie/lottie-1.json'; // Adjust the path as
import { motion } from 'framer-motion';
const Banner = () => {
	return (
		<div>
			<section className="bg-[#60EEBF30] text-black">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<motion.div initial={{ opacity: 0, x: -60 }}
						animate={{ opacity: 5, x: 0 }}
						transition={{ duration: 1 }} className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">Your Dream <br />
							<span className="text-[#10B981]">Job Is Waiting</span>
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							Each month, more than 1 million job seekers visit our platform to find their dream job.Making over <span className='font-bold'>100,000 </span>successful placements every month, we are the leading job portal in the industry. Whether you're looking for a full-time position, part-time work, or freelance opportunities, we have something for everyone.
						</p>

					</motion.div>
					<motion.div  initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<motion.div 
						   animate={{ y: [0, 2, 0] }}
						   transition={{ duration: 1 , repeat: Infinity}}

						>
							<Lottie animationData={animationData}></Lottie>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Banner;