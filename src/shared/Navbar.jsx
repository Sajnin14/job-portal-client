import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../ContextProvider/AuthContext";
import logo from '../assets/logo-small.png'

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                <img src={logo} className="w-12" />
                <h2 className="font-bold text-2xl">Job Portal</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ? <>
                       <button onClick={() => logOut()} className="btn">Log out</button>
                    </> : 
                    <><Link to='/register'>Register</Link>
                    <Link to='/signin'>
                      <button className="btn">Sign In</button>
                    </Link></> 
                }
                
            </div>
        </div>
    );
};

export default Navbar;