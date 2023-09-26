import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Duplo_logo_2022.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navber = () => {
    const { user,logOut } = useContext(AuthContext)
    const liTag = <>




        <NavLink className={({ isActive }) => isActive ? "underline font-bold rounded-xl bg-yellow-200 " : ''} to='/'>

            <li> <a>Home</a></li>

        </NavLink>

        <NavLink className={({ isActive }) => isActive ? "underline font-bold bg-yellow-200 rounded-xl " : ''} to='/alltoys'><li> <a>All toys</a></li></NavLink>

        <NavLink className={({ isActive }) => isActive ? "underline font-bold bg-yellow-200 rounded-xl " : ''} to='/addtoys'><li> <a>Add toys</a></li></NavLink>


        <NavLink className={({ isActive }) => isActive ? "underline font-bold bg-yellow-200 rounded-xl " : ''} to='/login'>

            <li> <a>Login</a></li>

        </NavLink>

        <NavLink className={({ isActive }) => isActive ? "underline font-bold bg-yellow-200 rounded-xl" : ''} to='/register'>

            <li> <a>Register</a></li>

        </NavLink>

        <NavLink className={({ isActive }) => isActive ? "underline font-bold bg-yellow-200 rounded-xl" : ''} to='blog'>

            <li> <a>blog</a></li>

        </NavLink>





    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {liTag}
                    </ul>
                </div>
                <Link to='/'>
                    <a className="btn btn-ghost ml-4 normal-case text-xl">
                        <img className='w-[70px]' src={logo} alt="" />
                    </a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {liTag}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <a onClick={logOut} className="btn">Logout</a>
                }

            </div>
        </div>
    );
};

export default Navber;