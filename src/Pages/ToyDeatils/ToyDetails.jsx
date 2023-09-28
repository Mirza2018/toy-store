
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ToyDetails = () => {
    const { user,handleBuynow } = useContext(AuthContext)
    const toy = useLoaderData()
    const { _id, name, img, price, rating, details } = toy

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 h-[50%]">
                <div className="hero-content flex-col lg:flex-row">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-4xl">Price: ${price}</p>
                        <p className="py-6 text-3xl">Rating: {rating}</p>
                        <p className="py-6">{details}</p>


                        <button onClick={() => handleBuynow(toy)} className="btn btn-primary">Buy now</button>
                        <Link className='ml-4' to='/alltoys'><button  className="btn btn-info">Go Back</button></Link>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;