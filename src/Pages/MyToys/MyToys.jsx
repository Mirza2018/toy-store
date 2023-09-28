
import MyToy from "./MyToy";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTitle from "../Hook/useTitle";

const MyToys = () => {
    useTitle('My-Buy-toys')
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const [toys,setToys]=useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys?email=${user?.email}`,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem('toys-access-token')}`
            }
        }

        )
            .then(res => res.json())
            .then(data => {
                if(!data.erroe){
                  return  setToys(data)
                }
                else{
                    navigate('/')
                }
            
            })
    }, [user.email,navigate])


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

                        <th></th>
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
                        <th></th>
                        <th>Total Price =</th>
                        <th>${abc}</th>
                        
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default MyToys;