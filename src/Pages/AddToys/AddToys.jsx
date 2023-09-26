import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
    const { user } = useContext(AuthContext)
    const handelFrom = e => {

        e.preventDefault()
        const name = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;
        const details = e.target.details.value;
        const toy = {
            name, category, price, rating, quantity, img, details,
            email: user.email, seller: user.displayName
        }
        fetch('http://localhost:5000/toys',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire(
                    'Successfully Added Toy',
                    'Add',
                    'success')
            }
            
        })
    }
    return (
        <section className="flex justify-center ">

            <form onSubmit={handelFrom} className="mx-auto  border border-black rounded-2xl">
                <h1 className="text-center text-3xl font-bold my-9">Add new Products Section</h1>

                <div className="flex mx-20 gap-10">
                    <div className="">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name="category" placeholder="categoty" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex mx-20 gap-10">
                    <div className="">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="price" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="float" name="rating" placeholder="rating" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex mx-20 gap-10">
                    <div className="">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder="quantity" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="img" placeholder="photo url" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>


                <div className="flex mx-20 gap-10">
                    <div className="card-body">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div >
                <div className="card-body"><button className="btn btn-primary">Submit</button></div>

            </form>

        </section>
    );
};

export default AddToys;