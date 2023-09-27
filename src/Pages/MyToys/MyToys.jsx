import { useLoaderData } from "react-router-dom";
import MyToy from "./MyToy";
import Swal from "sweetalert2";
import { useState } from "react";

const MyToys = () => {
    const toysAll = useLoaderData()
    const [toys,setToys]=useState(toysAll)

    const prices = toys.map(t => t.price)
 
    const abc = prices.reduce((a, b) => a + parseInt(b),0);
    console.log(abc);

    const handelDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/mytoys/${id}`, {
                        method: "DELETE"
                    })

                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                Swal.fire(
                                    'Deleted!',
                                    'Your Toys has been deleted.',
                                    'success'
                                )
                                const remaing = toys.filter(t => t._id !== id)
                                setToys(remaing)
                            }
                        })

                }
            })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Toy Details</th>
                        <th>Buyer name</th>
                        <th>Price</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        toys.map(toy => <MyToy 
                            key={toy._id} 
                            toy={toy}
                            handelDelete={handelDelete}
                            
                            ></MyToy>)
                    }



                </tbody>
                <tfoot>
                    <tr>

                        <th></th>
                        <th>Total Price =</th>
                        <th>${abc}</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default MyToys;