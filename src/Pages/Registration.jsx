// ✅ Updated Registration.jsx with validation and fancy toast
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const { signUp } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value.trim();
    const photoUrl = form.photoUrl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!fullName || !email || !password) {
      toast.error("All fields are required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const result = await signUp(email, password);
      toast.success("Registration successful");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Email may already be in use.");
    }
  };

  return (
    <div>
      <div className="hero bg-[#60EEBF30] bg-[url(public/img/bg-1.png)] min-h-screen">
        <div className='max-w-6xl mx-auto'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <p className="py-6">
                Welcome to our Job Portal. Join our community of job seekers and employers...
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="text-4xl font-bold">Registration now!</h1>
                <form onSubmit={handleSubmit} className="fieldset">
                  <label className="label">Full Name</label>
                  <input type="text" name="fullName" className="input" placeholder="Full Name" />
                  <label className="label">Photo URL</label>
                  <input type="text" name="photoUrl" className="input" placeholder="Photo url" />
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input type="password" name="password" className="input" placeholder="Password" />
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