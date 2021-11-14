import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    // console.log(orders);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [orders]);

    const handleCancelOrder = id => {
        const confirmOrder = window.confirm('Are you sure, want to delete the order ?');
        if (confirmOrder) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application.json'
                }
            })
                .then(res => res.json())
        }

    }

    return (
        <div>
            <h2>my order</h2>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr>
                            <td>{order.bike_name}</td>
                            <td>{order.userAddress}</td>
                            <td>{order.orderStatus}</td>
                            <td>{order.price}</td>
                            <td>
                                <button onClick={() => handleCancelOrder(order._id)} style={{ border: 'none' }}>Cancel</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;