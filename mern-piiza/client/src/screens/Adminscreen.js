import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Adminscreen() {

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    const dispatch = useDispatch()
    useEffect(() => {

        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div className="container1">
      
            <div className="navbar1">
                <div className="header">

                    <ul className="menu">

                        <li><Link to={'/admin/userslist'} className='color1'>users List</Link></li>
                        <li><Link to={'/admin/pizzaslist'} className='color1'>Pizzas List</Link></li>
                        <li><Link to={'/admin/addpizza'} className='color1'>Add New Pizza</Link></li>
                        <li><Link to={'/admin/orderlist'} className='color1'>Orders list</Link></li>
                    </ul>

                </div>
              
            </div>

          
        </div>
        
       




    )
}

export default Adminscreen
