import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://powerful-tundra-44421.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <div className="container">
            <div className="text-center">
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