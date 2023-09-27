

const AddItem = ({toy}) => {
    const { name, img, price,quantity,rating } = toy
    return (
        <>
        <tr>
            
            <td><button className="btn btn-error">X</button></td>
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
            <td><button className="btn btn-success">Update</button></td>
        </tr>

    </>
    );
};

export default AddItem;