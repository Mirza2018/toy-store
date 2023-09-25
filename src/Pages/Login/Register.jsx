import { Link } from 'react-router-dom';

const Register = () => {
    const handleForm = e => {
        e.preventDefault()
        const password = e.target.password.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(password, email,name);

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
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' required placeholder="Password" className="input input-bordered" />
                                        <label className="label">
                                            <Link to='/login'><a href="#" className="label-text-alt link link-hover">Alrady registered? Login!</a></Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
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

export default Register;