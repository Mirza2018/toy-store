import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Alltoy = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { name, img, price, rating, details } = toy


    

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
                        <button className="btn btn-primary"
                            onClick={() => document.getElementById('my_modal_4').showModal()}
                        >See Details</button>
                        
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    {
                        user ?
                            <div>

                                <figure className="px-10 pt-10 mx-auto w-96">
                                    <img src={img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <h3 className="font-bold text-lg">Name: {name}</h3>
                                <p className="py-4">{details}</p>
                                <h3 className="font-bold text-lg">Price: ${price}</h3>
                                <div className="modal-action">
                                    <button className="btn btn-primary">Buy now</button>

                                </div>
                                </div>


                                :
                                <center>
                                    <h3 className="font-bold text-lg">Log In first</h3>
                                    <Link to='/login'>
                                        <button className="btn btn-primary">Login</button></Link></center>

}




                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}

                                    <button className="btn">Close</button>
                                </form>
                            </div>
            
            </dialog>



        </>


    );
};
export default Alltoy;