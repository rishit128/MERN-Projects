import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addpizza} from "../actions/pizzaActions"
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
function Addpizza() {
    const[name, setname] = useState('')
    const[smallprice, setsmallprice] = useState()
    const[mediumprice , setmediumprice] = useState()
    const[largeprice , setlargeprice] = useState()
    const[image , setimage] = useState('')
    const[description, setdescription] = useState('')

    const[category, setcategory] = useState('')
    
    const dispatch = useDispatch()
    const addpizzastate = useSelector(state=>state.addPizzaReducer)
    const {success , error , loading} = addpizzastate
    function formhandler(e){
        e.preventDefault();
        const pizza = {
            name,
            image,
            description,
            category,
            prices:{
                small : smallprice,
                medium : mediumprice,
                large: largeprice
            }
        }
      
        dispatch(addpizza(pizza))
    }
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
            <div><br/>
                <div className='form-control'>
                    <h1>Add Pizza</h1>
                    {loading && (<Loading/>)}
                {error && (<Error error='Something Went Wrong'/>)}
                {success && (<Success success='New Pizza Added Successfully'/>)}
                    <form onSubmit={formhandler}>
                        <input className='form-control' type='text' placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                        <input className='form-control' type='text' placeholder='Small varient price' value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}></input>
                        <input className='form-control' type='text' placeholder='Medium varient price' value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}></input>
                        <input className='form-control' type='text' placeholder='Large varient price' value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}></input>
                        <input className='form-control' type='text' placeholder='Category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
                        <input className='form-control' type='text' placeholder='Description' value={description} onChange={(e)=>{setdescription(e.target.value)}}></input>
                        <input className='form-control' type='text' placeholder='Image' value={image} onChange={(e)=>{setimage(e.target.value)}}></input>
                        <button className='btn mt-3' type='submit'>Add Pizza</button>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addpizza
