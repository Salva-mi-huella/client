import axios from 'axios';

export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';
export const GET_PET_DETAIL = 'GET_PET_DETAIL';
export const GET_FOUNDATIONS = 'GET_FOUNDATIONS';
export const GET_ALL_PETS = 'GET_ALL_PETS';
export const GET_CURRENCY = 'GET_CURRENCY';
export const FILTERS_CONFIG = 'FILTERS_CONFIG';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const PETS_FILTERED = 'PETS_FILTERED'
export const POST_USER = 'POST_USER'
export const UPDATE_FOUNDATION = 'UPDATE_FOUNDATION'
export const GET_USERS = 'GET_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const GET_USER = 'GET_USER'
export const POST_DONATION = 'POST_DONATION'



export function getFoundationDetail(id){
    return function(dispatch) {
        try{
            return axios(`/foundations/${id}`)
            .then(detail =>
                dispatch({ type: GET_FOUNDATION_DETAIL, payload: detail.data }))
            } catch (e) {
                dispatch({ type: GET_FOUNDATION_DETAIL, payload: e.data })
            }
            // return dispatch({ type: GET_FOUNDATION_DETAIL, payload: data.foundation.filter(foundation => foundation.id === id) })
        } 
}

export function getProductDetail(id){
    return function(dispatch) {
        try{
            return axios(`/products/${id}`)
            .then(detail =>
                dispatch({ type: GET_PRODUCT_DETAIL, payload: detail.data }))
            } catch (e) {
                dispatch({ type: GET_PRODUCT_DETAIL, payload: e.data })
            }
        } 
}

export function getFoundations(){
    return function(dispatch) {
        try{
            return axios(`/foundations`)
            .then(detail =>
                dispatch({ type: GET_FOUNDATIONS, payload: detail.data }))
            } catch (e) {
                dispatch({ type: GET_FOUNDATIONS, payload: e.data })
            }
        } 

}

export function getAllPets(){
    return async function (dispatch){
        try {
            const info = await axios("http://localhost:4000/pets")
            return dispatch({
                type:GET_ALL_PETS,
                payload: info.data
            })
        } catch (error) {
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }

}


export  function getPetDetail(id){
    return async function (dispatch){
        try{
            const info = await axios(`http://localhost:4000/pets/${id}`)
            return dispatch({
                type: GET_PET_DETAIL,
                payload: info.data
            })
        }
        catch(error){
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }
}

export function filtersConfig(config){
    return {
        type: FILTERS_CONFIG,
        filter : Object.keys(config),
        payload: config
    } 
}
export function petsFiltered(pets,page){
    return {
        type: PETS_FILTERED,
        filtered: pets,
        perPage: page
    } 
}


export function getCurrency(){
    return async function (dispatch){
        try {
            const info = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            return dispatch({
                type: GET_CURRENCY,
                payload: info.data
            })
        } catch (error) {
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }
}

export function postUser(user) {
    return async function (dispatch) {
        try {
            const newUser = await axios.post("/users", user);

            return dispatch({
                type: POST_USER,
                payload: newUser.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function updateFoundation(id) {
    return async function (dispatch) {
        try {
            const updatedFoundation = await axios.put(`/foundations/${id}`);

            return dispatch({
                type: UPDATE_FOUNDATION,
                payload: updatedFoundation
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function updateUser(data, email) {
    return async function (dispatch) {
        try {
            const updatedUser = await axios.put(`/users/${email}`, data);

            return dispatch({
                type: UPDATE_USER,
                payload: updatedUser
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function getUserByEmail(email) {
    return async function (dispatch) {
        try {
            const user = await axios.get(`/users/${email}`);

            return dispatch({
                type: GET_USER,
                payload: user.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function getAllProducts(){
    return async function (dispatch){
        try {
            const info = await axios("http://localhost:4000/products")
            return dispatch({
                type:GET_ALL_PRODUCTS,
                payload: info.data
            })
        } catch (error) {
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }
}

export function postDonation(order){
    return async function (dispatch){
        try {
            const info = await axios.post("http://localhost:4000/donations", order)
            return dispatch({
                type: POST_DONATION,
                payload: info.data
            })
        } catch (error) {
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }
}

export function postNews (data){
    return  function (){
            axios.post("/news", data)

    }
}

export function getUsers(){
    return async function (dispatch){
        try {
            const allUsers = await axios("/users")
            return dispatch({
                type:GET_USERS,
                payload: allUsers.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}


