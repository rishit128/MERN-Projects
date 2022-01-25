import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { getAllUsers, deleteuser } from '../actions/userActions'
function Userslist() {
    const dispatch = useDispatch()
    const userstate = useSelector(state=>state.getAllUsersReducer)
    const { users, error, loading } = userstate
    useEffect(() => {
        dispatch(getAllUsers())


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

            <h1>list of users</h1>
            {loading && (<Loading />)}
            {error && (<Error error='something went Wrong' />)}
            <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                      
                    </tr>

                </thead>
                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                          
                            <td><i className='fa fa-trash'onClick={()=>{dispatch(deleteuser(user._id))}}></i></td>
                          
                           
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Userslist
