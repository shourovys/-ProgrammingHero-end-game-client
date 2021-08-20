import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOrders } from '../redux/orders/action';

const Order = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    return (
        <div>
            Order
        </div>
    );
};

export default Order;