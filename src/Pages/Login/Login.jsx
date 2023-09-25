

import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from "react";

const Login = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { logIn, googleLogIn } = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password, email);
        logIn(email, password)
        .then(res => {
            console.log(res.user);
            Swal.fire(
                'Successfully login!',
                'your welcome',
                'success'
            )
            e.target.reset()
            navigate(from)
      
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://m.media-amazon.com/images/I/61EEXUErzHL._SL1500_.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col ">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">

                                    <form onSubmit={handleForm}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                            <label className="label">
                                            <Link to='/register'><a href="#" className="label-text-alt link link-hover">Don't have account? register!</a></Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    );
};

export default Login;