import { useEffect, useState } from "react";
import Alltoy from "./Alltoy";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-10 '>
            {
                toys.map(toy => <Alltoy key={toy._id}
                    toy={toy}
                ></Alltoy>)
            }

        </div>
    );
};

export default AllToys;