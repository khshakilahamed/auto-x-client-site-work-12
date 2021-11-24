import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ManageProducts = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://powerful-tundra-44421.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [bikes]);

    const handleDeleteBike = id => {
        const confirmDelete = window.confirm("Are you sure want to delete the bike ?");
        if (confirmDelete) {
            fetch(`https://powerful-tundra-44421.herokuapp.com/bikes/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Deleted Successfully');
                    }
                })
        }

    }

    return (
        <div>
            <h3 className="text-center bg-danger text-light my-4 py-2">All Bikes</h3>
            <div className="text-center">
                {
                    !bikes && <div className="text-center"><Spinner animation="border" variant="danger" /></div>
                }
                <div className="row my-5">
                    {
                        bikes?.map(bike => <div key={bike._id} className="col-md-4">
                            <div className="border m-2">
                                <img src={bike.image} alt="" />
                                <h4 className="my-3">{bike.bike_name}</h4>
                                <div className="d-flex justify-content-between px-5 my-3">
                                    <p>
                                        <NavLink to={`/updateProduct/${bike._id}`}>
                                            <button
                                                className="btn btn-success"
                                            >Update</button>
                                        </NavLink>
                                    </p>
                                    <p>
                                        <button
                                            onClick={() => handleDeleteBike(bike._id)}
                                            className="btn btn-danger"
                                        >Delete</button>
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;