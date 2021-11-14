import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    return (
        <div className="container">
            <div className="text-center">
                {/* <h2 className="text-danger">Bikes for You</h2> */}
                <div className="row my-5">
                    {
                        bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bikes;