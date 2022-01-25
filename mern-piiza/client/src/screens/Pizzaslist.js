
import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { getAllPizzas, deletePizza } from '../actions/pizzaActions'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
function Pizzaslist() {
    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())


    }, [])
    return (
        <div>
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


            </div>
            <h2>Pizzas List</h2>
            {loading && (<Loading />)}
            {error && (<Error error='something went Wrong' />)}
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza => {
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>Small : {pizza.prices[0]['small']} <br />
                                Medium : {pizza.prices[0]['medium']}<br />
                                Large : {pizza.prices[0]['large']}
                            </td>

                            <td>{pizza.category}</td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-1'></i></Link>

                            </td>

                        </tr>

                    })}

                </tbody>

            </table>

        </div>
    )
}

export default Pizzaslist
