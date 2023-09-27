import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AddItem from "./AddItem";

const AddItems = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user.email])

    console.log(toys);

// const handelUpdate=(id)=>{
//     fetch(`http://localhost:5000/toys`,{
//         method:"PATCH",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify()
//     })
// }


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
                            ></AddItem>)
                        }



                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AddItems;