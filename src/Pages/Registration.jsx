import { Link } from "react-router-dom";

const Registration = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };

    return (
        <div>
            <div className="hero bg-[#60EEBF30]  bg-[url(public/img/bg-1.png)] min-h-screen">
                <div className='max-w-6xl mx-auto'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                            <p className="py-6">
                                Welcome to our Job Portal. Join our community of job seekers and employers. Sign up now to access thousands of job listings, connect with top companies, and take the next step in your career. Whether you're looking for a full-time position, part-time work, or freelance opportunities, we have something for everyone.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h1 className="text-4xl font-bold">Registration now!</h1>
                                <form onSubmit={handleSubmit} className="fieldset">
                                    <label className="label">Full Name</label>
                                    <input type="email" className="input" placeholder="Full Name" />
                                    <label className="label">Photo URL</label>
                                    <input type="text" className="input" placeholder="Photo url" />

                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <button className="btn bg-[#00D390] mt-4">Registration</button>
                                </form>
                                <div className="mt-4">
                                    <span>Already have an account? </span>
                                    <Link to="/login" className="link link-hover hover:text-[#00D390]">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;