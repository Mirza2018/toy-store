
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ToyDetails = () => {
    const { user } = useContext(AuthContext)
    const toy = useLoaderData()
    const { _id, name, img, price, rating, details } = toy


    const handleBuynow = (toyin) => {
        const name = toyin.name;
        const img = toyin.img;
        const price = toyin.price;
        const email = user?.email;
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are not Login!',
                footer: '<a href="/login">Login Now?</a>'
              })
        }
        const person = user.displayName;
        const info = {
            email, person, name, img, price
        }

        Swal.fire({
            title: 'Are you sure Buy this?',
            text: "You are add this in your cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Buy it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch("http://localhost:5000/buy", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.insertedId) {
                                Swal.fire(
                                    'Successfully Buy!',
                                    'To see go to cart!',
                                    'success'
                                )
                            }
                       })
                }
            })
    }
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
                        <p className="py-6 text-3xl">Rating: ${rating}</p>
                        <p className="py-6">{details}</p>


                        <button onClick={() => handleBuynow(toy)} className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;