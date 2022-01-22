import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import { loginUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
function Loginscreen() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const loginstate = useSelector(state => state.loginUserReducer)

    const {loading,error} = loginstate
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
    })
    function login(){
        const user = {email , password}
        dispatch(loginUser(user))
        
    }
    return (
        
        <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
                <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Login</h2>
                {loading && (<Loading/>)}
                {error && (<Error error='Invalid Details'/>)}
                <div>
                <input required type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type="text" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className='form-control' />
                        <button onClick={login} className='btn mt-3 mb-3 '>Login</button>

                        <a style={{color:'black'}}href='/register' className='mt-2'>Click here to Register</a>

                </div>

            </div>
        </div>
    </div>
    )
}

export default Loginscreen
