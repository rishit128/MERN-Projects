import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzabyId, editpizza } from '../actions/pizzaActions'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
function Editpizza() {
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')

    const [category, setcategory] = useState('')
    const { pizzaid } = useParams();

    const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
    const { pizza, error, loading } = getpizzabyidstate
    const editpizzastate = useSelector((state) => state.editPizzaReducer);
    const { editloading, editerror, editsuccess } = editpizzastate
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(pizza)
        {
            if(pizza._id==pizzaid)
            {
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
            }
           else{
            dispatch(getPizzabyId(pizzaid))
           }
        }
        else{
            dispatch(getPizzabyId(pizzaid))
        }
        

    }, [pizza, dispatch])
    function formhandler(e) {
        e.preventDefault();
        const editedpizza = {
            _id : pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }

        dispatch(editpizza(editedpizza))
        // dispatch(addpizza(pizza))
    }
    return (
        <div>
            <h1>Edit Pizza</h1>
            <h1>Pizza Id = {pizzaid}</h1>
          
            <div className='form-control'>

                {loading && (<Loading />)}
                {error && (<Error error='Something Went Wrong' />)}
                {editsuccess && (<Success success='Pizza details edited successfully'/>)} 
                {editloading && (<Loading />)}
                <form onSubmit={formhandler}>
                    <input className='form-control' type='text' placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }}></input>
                    <input className='form-control' type='text' placeholder='Small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }}></input>
                    <input className='form-control' type='text' placeholder='Medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }}></input>
                    <input className='form-control' type='text' placeholder='Large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }}></input>
                    <input className='form-control' type='text' placeholder='Category' value={category} onChange={(e) => { setcategory(e.target.value) }}></input>
                    <input className='form-control' type='text' placeholder='Description' value={description} onChange={(e) => { setdescription(e.target.value) }}></input>
                    <input className='form-control' type='text' placeholder='Image' value={image} onChange={(e) => { setimage(e.target.value) }}></input>
                    <button className='btn mt-3' type='submit'>Edit Pizza</button>



                </form>
            </div>
        </div>
    )
}

export default Editpizza
