import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { name: "Home", path: "/" },
    { name: "Find jobs", path: "/find-jobs" },
    { name: "Post jobs", path: "/post-jobs" },

];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${isScrolled ? "bg-opacity-60 backdrop-blur-md  shadow-md" : "bg-base-100"
            }`}>
            <div className="max-w-6xl mx-auto navbar border-amber-50 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {navItems.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `relative px-2 py-1 transition-all duration-300 
                       ${isActive ? "text-primary font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary after:content-['']" : "text-gray-600"}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a href='/' className="text-base md:text-4xl font-bold bodoni text-black whitespace-nowrap playfair">JOB-BOB</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {navItems.map((item, i) => (
                            <li key={i}>
                                <NavLink
                                    to={item.path}
                                    className={  ({ isActive }) =>
                                        `relative px-2 py-1 transition-all duration-300 text-lg 
                     ${isActive ? "text-black   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#10B981] after:content-['']" : "text-gray-600"}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-5">

                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `relative px-2 py-1 transition-all duration-300 
                    ${isActive ? "btn btn-success" : "btn btn-soft btn-success"}`
                            }
                        >
                            <button className='px-5 text-black'>Login</button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;