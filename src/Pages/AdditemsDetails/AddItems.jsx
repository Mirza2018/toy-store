import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AddItem from "./AddItem";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem('toys-access-token')}`
            }
        })
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
                    fetch(`http://localhost:5000/toys/${id}`, {
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
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Delete</th>
                            <th>Toy Name</th>
                            <th>Details</th>
                            <th>Price</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            toys.map(toy => <AddItem
                                key={toy._id}
                                toy={toy}
                                handelDelete={handelDelete}
                            ></AddItem>)
                        }



                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AddItems;