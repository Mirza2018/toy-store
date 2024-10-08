import { useContext, useEffect, useState } from "react";
import Alltoy from "./Alltoy";
import useTitle from "../Hook/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";





const AllToys = () => {
    const{loadding}=useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [input, setInput] = useState('')

    useTitle('All-toys')

  

    useEffect(() => {
        fetch('https://toys-store-server.onrender.com/toy')
            .then(res => res.json())
            .then(data => {
                const result = data.filter(d => d && d.name && d.name.toLowerCase().includes(input))
                const final = result.slice(0, 20)
                setToys(final)

            }
            )

    }, [input])

    if (loadding) {
        return <center><span className="loading loading-spinner text-secondary"></span></center> 
    }

    return (
        <>

            <form action="">
                <center>
                    <input className="input input-bordered input-success w-full max-w-xs" type="text" name="text" onChange={(e) => setInput(e.target.value)} placeholder="Search here" /><h1>Search toys </h1>
                </center>
            </form>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-10 '>
                {
                    toys.map(toy => (
                        <Alltoy key={toy._id}
                            toy={toy}
                        >

                        </Alltoy>

                    ))
                }
            </div>





        </>
    );
};

export default AllToys;