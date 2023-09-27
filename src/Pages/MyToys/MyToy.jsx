

const MyToy = ({ toy, handelDelete }) => {
    const {_id, email, person, name, img, price } = toy
    return (
        <>
            <tr>
                <td><button onClick={() => handelDelete(_id)} className="btn btn-error">X</button></td>
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
                    {person}
                    <br />
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>${price}</td>
            </tr>

        </>
    );
};

export default MyToy;