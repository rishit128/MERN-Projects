import axios from "axios";



export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })

    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response)
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })

    }
}
export const getPizzabyId = (pizzaid) => async dispatch => {
    dispatch({ type: 'GET_PIZZABYID_REQUEST' })
    console.log('response')
    try {
        console.log(pizzaid)
        const response = await axios.post('/api/pizzas/getpizzabyid', {pizzaid})
        
        dispatch({ type: 'GET_PIZZABYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_PIZZABYID_FAILED', payload: error })

    }
}
export const filterPizzas = (searchkey, category) => async dispatch => {
    var filteredPizzas;
    dispatch({ type: 'GET_PIZZAS_REQUEST' })

    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response.data)
        filteredPizzas = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchkey))
        if (category != 'all') {
            filteredPizzas = response.data.filter(pizza => pizza.category.toLowerCase() == category)

        }


        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: filteredPizzas })
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })

    }
}
export const addpizza = (pizza) => async dispatch => {
    dispatch({ type: 'ADD_PIZZA_REQUEST' })
    try {
        const response = await axios.post('/api/pizzas/addpizza', { pizza })
        console.log(response);
        dispatch({ type: 'ADD_PIZZA_SUCCESS' })
      
    } catch (error) {
        dispatch({ type: 'ADD_PIZZA_FAILED', payload: error })
    }
}
export const editpizza = (editedpizza) => async dispatch => {
    dispatch({ type: 'EDIT_PIZZA_REQUEST' })
    try {
        const response = await axios.post('/api/pizzas/editpizza', { editedpizza })
        console.log(response);

        dispatch({ type: 'EDIT_PIZZA_SUCCESS' })
        window.location.href='/admin/pizzaslist'
    } catch (error) {
        dispatch({ type: 'EDIT_PIZZA_FAILED', payload: error })
    }
}

