import Lottie from 'lottie-react';
import React from 'react';
import lottieData from '../assets/lottie/lottie-2.json'; // Adjust the path as 
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <div className="hero bg-[#60EEBF30]  bg-[url(public/img/bg-2.jpg)] min-h-screen">
                <div className='max-w-6xl mx-auto'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <Lottie animationData={lottieData} className=" h-[400px]" />
                        </div>
                        <div className="card bg-base-100 w-80 md:w-[450px]  h-[500px]  shrink-0 shadow-2xl">
                            <div className="card-body">
                                <div>
                                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                                <p>  Join our community of job seekers and employers. Sign up now to access thousands of job listings, connect with top companies, and take the next step in your career. Whether you're looking for a full-time position, part-time work, or freelance opportunities, we have something for everyone.</p>
                                </div>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input w-full" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input w-full" placeholder="Password" />
                                    <button className="btn bg-[#10B981] mt-4">Sign In</button>
                                </fieldset>
                                <div><span>Don't have an account? </span>
                                    <Link to="/registration" className="link link-hover hover:text-[#10B981]">Registration</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;













