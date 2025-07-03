import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lottieData from '../assets/lottie/lottie-2.json'; // Adjust the path as 
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';
const Login = () => {

  const {  signIn, setLoading } = useContext(AuthContext); 


 const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // Add your login logic here
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            })
            






    };


//yemtehanshahil1234@gmail.com
// Password: 1234567890

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
                                <form onSubmit={handleSubmit} className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input w-full" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input w-full" placeholder="Password" />
                                    <button className="btn bg-[#10B981] mt-4">Sign In</button>
                                </form>
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













