import Lottie from "lottie-react";
import signInLottie from '../assets/signIn.json'
import { useContext } from "react";
import AuthContext from "../ContextProvider/AuthContext";
import Goog from "./Goog";
import { useLocation, useNavigate } from "react-router-dom";



const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const path = location?.state || '/'
    // console.log(location);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if(!regex.test(password)){
            alert('wrong password');
            return;
        }
        signInUser(email, password)
        .then(res => {
            console.log(res.user);
            navigate(path);
        })
        .catch(err => {
            alert(err.message);
        })
    }   
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    
                    <Lottie animationData={signInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center mt-4 text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Goog></Goog>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;