import React from 'react'
import Stripecheckout from 'react-stripe-checkout'
import { useDispatch , useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions';

import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

function Checkout({subtotal}) {
    const dispatch = useDispatch();
    const orderstate = useSelector((state)=>state.placeOrderReducer)
    const {loading, error, success} = orderstate
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }
    return (
        <div>
              {loading && (<Loading/>)}
              {error && (<Error error='Something Went wrong'/>)}
              {success && (<Success success='Your Order Placed Successfully'/>)}
            <Stripecheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51KF21tKc3WQso7rnt5AKyTiIQGe0p2QHBe7IxyUlOiWyI3MO9cFXZxmiD5oCuoiuANfiFhh2HXCkNN1IImJsybCh00W9HZ5a27'
            currency='INR'
            >
                <button className='btn'>Pay Now</button>
            </Stripecheckout>
        </div>
    )
}

export default Checkout
