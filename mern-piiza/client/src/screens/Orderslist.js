import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { getAllOrders } from '../actions/orderActions'

function Orderslist() {
    const dispatch = useDispatch()
    const getorderstate = useSelector(state => state.getAllOrdersReducer)
    const { orders, error, loading } = getorderstate
    useEffect(() => {
        dispatch(getAllOrders())


    }, [])
    return (
        <div className="container1">
              <div className="navbar1">
                <div className="header">

                    <ul className="menu">

                        <li><a href="/admin/userslist" className='color1'>users List</a></li>
                        <li><a href="/admin/pizzaslist" className='color1'>Pizzas List</a></li>
                        <li><a href="/admin/addpizza" className='color1'>Add New Pizza</a></li>
                        <li><a href="/admin/orderlist" className='color1'>Orders list</a></li>
                    </ul>

                </div>
            </div>
            <h2>Orders</h2>

            {loading && (<Loading />)}
            {error && (<Error error='something went Wrong' />)}
            <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>

                </thead>
                <tbody>
                    {orders && orders.map(order=>{
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td>Status</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Orderslist
