import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
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

    // console.log(orders);

    const handleDeleteOrder = id => {
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

    };

    const handleApproveOrder = id => {
        const approved = window.confirm('Are you sure ?');

        if (approved) {
            const matchedOrder = orders.filter(order => order._id == id);
            matchedOrder[0].orderStatus = "Approved";

            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(matchedOrder[0])
            })
                .then(res => res.json())
        }
    }

    return (
        <div>
            <h3 className="text-center bg-danger text-light my-4 py-2">All Orders</h3>
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
                                <button onClick={() => handleDeleteOrder(order._id)} style={{ border: 'none', backgroundColor: 'red', color: 'white', borderRadius: '5px' }}>Delete</button>
                                {
                                    order.orderStatus == 'pending' && <button onClick={() => handleApproveOrder(order._id)} style={{ border: 'none', marginLeft: '5px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>Approve</button>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;