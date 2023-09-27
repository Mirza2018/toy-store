import { useLoaderData } from "react-router-dom";
import MyToy from "./MyToy";

const MyToys = () => {
    const toys = useLoaderData()

    const prices = toys.map(t => t.price)
 
    const abc = prices.reduce((a, b) => a + parseInt(b),0);
    console.log(abc);



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
                        toys.map(toy => <MyToy key={toy._id} toy={toy}></MyToy>)
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