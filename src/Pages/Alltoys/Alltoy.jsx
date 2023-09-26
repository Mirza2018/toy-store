

const Alltoy = ({toy}) => {
    const { name,img,price,rating,details } = toy
    return (
       
            <div className="card w-96 bg-base-100 shadow-xl m-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>price: $ {price}</p>
                    <p>Rating: $ {rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

    );
};
export default Alltoy;