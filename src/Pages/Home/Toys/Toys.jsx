import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Toys = ({ toy }) => {
    const { user } = useContext(AuthContext)
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
        <>
            <div className="card w-96 bg-base-100 shadow-xl m-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>price: $ {price}</p>
                    <p>Rating: $ {rating}</p>
                    <div className="card-actions">
                        <Link to={`/toys/${_id}`}><button className="btn btn-primary">Details</button></Link>
                        <button onClick={() => handleBuynow(toy)} className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>







        </>

    );
};

export default Toys;