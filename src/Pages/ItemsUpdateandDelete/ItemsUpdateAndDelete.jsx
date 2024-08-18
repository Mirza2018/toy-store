import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Hook/useTitle";

const ItemsUpdateAndDelete = () => {
    useTitle('Update-toy-data')
const {user}=useContext(AuthContext)
    const toy=useLoaderData()
    const {  _id,name, category, price, rating, quantity, img, details}=toy
    //  const handelUpdate = (id) => {

   
    // }

    const handelFrom = e => {

        e.preventDefault()
        const name = e.target.name.value||toy.name
        const category = e.target.category.value||toy.category
        const price = e.target.price.value||toy.price
        const rating = e.target.rating.value||toy.rating
        const quantity = e.target.quantity.value||toy.quantity
        const img = e.target.img.value||toy.img
        const details = e.target.details.value||toy.details
        
        const toyinfo = {
            name, category, price, rating, quantity, img, details,
            email: user.email, seller: user.displayName
        }
        console.log(toyinfo);
        fetch(`https://toys-store-server.onrender.com/toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toyinfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire(
                    'Update successfully done!',
                    'You change items!',
                    'success'
                  )
            }
        })

    }







    return (
        <div>
                  <section className="flex justify-center ">

            <form onSubmit={handelFrom} className="mx-auto  border border-black rounded-2xl">
                <h1 className="text-center text-3xl font-bold my-9">Update Products Section</h1>

                <div className="flex mx-20 gap-10">
                    <div className="">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder={name} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name="category" placeholder={category} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex mx-20 gap-10">
                    <div className="">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder={price} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="float" name="rating" placeholder={rating} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex mx-20 gap-10">
                    <div className="">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder={quantity} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="img" placeholder={img} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>


                <div className="flex mx-20 gap-10">
                    <div className="card-body">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder={details} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div >
                <div className="card-body"><button className="btn btn-primary">Submit</button></div>

            </form>

        </section>
        </div>
    );
};

export default ItemsUpdateAndDelete;