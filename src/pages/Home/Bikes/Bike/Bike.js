import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bike.css'

const Bike = ({ bike }) => {
    const { _id, bike_name, image, short_des, brand, price } = bike;
    return (
        <div className="col-md-4 col-sm-6 my-3">
            <div className="border p-3 bike-descript">
                <img className="img-fluid w-100 border-bottom mb-3 p-2" src={image} alt="" />
                <div className="text-start">
                    <h5>{bike_name}</h5>
                    <small className="text-muted">{short_des}</small>
                    <p>BDT. {price}</p>
                    <p ><span className="bg-danger text-light p-1 rounded">{brand}</span></p>
                    <NavLink to={`/order/${_id}`}>
                        <button className="order-btn">Order Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Bike;