
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    const { _id, name, img, price, rating, details } = toy


    const handleBuynow = (toyin) => {
        fetch("http://localhost:5000/buy", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(toyin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 h-[50%]">
                <div className="hero-content flex-col lg:flex-row">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-4xl">Price: ${price}</p>
                        <p className="py-6 text-3xl">Rating: ${rating}</p>
                        <p className="py-6">{details}</p>


                        <button onClick={()=>handleBuynow(toy)} className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;