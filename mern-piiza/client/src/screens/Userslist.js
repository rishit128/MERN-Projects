import React from 'react'

function Userslist() {
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
        </div>
    )
}

export default Userslist
