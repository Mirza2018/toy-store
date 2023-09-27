import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddItem = ({ toy,handelDelete }) => {
    const { _id, name, img, price, quantity, rating } = toy


    return (
        <>
            <tr>

                <td><button onClick={()=>handelDelete(_id)} className="btn btn-error">X</button></td>
                <td><div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
                </td>
                <td>
                    {quantity} pcs
                    <br />
                    <span className="badge badge-ghost badge-sm">{rating}</span>
                </td>
                <td>${price}</td>
                <Link to={`/additems/${_id}`}><td><button className="btn btn-success">Update</button></td></Link>
            </tr>

        </>
    );
};

export default AddItem;