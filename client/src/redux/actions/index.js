import axios from 'axios';

export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';
export const GET_PET_DETAIL = 'GET_PET_DETAIL';
export const GET_FOUNDATIONS = 'GET_FOUNDATIONS';
export const GET_ALL_PETS = 'GET_ALL_PETS';
export const GET_CURRENCY = 'GET_CURRENCY';
export const FILTERS_CONFIG = 'FILTERS_CONFIG';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const PETS_FILTERED = 'PETS_FILTERED';
export const POST_USER = 'POST_USER';
export const UPDATE_FOUNDATION = 'UPDATE_FOUNDATION';
export const GET_USERS = 'GET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER = 'GET_USER';
export const POST_DONATION = 'POST_DONATION';
export const POST_REQUEST_FOUNDATION = 'POST_REQUEST_FOUNDATION';
export const GET_REQUESTS_FOUNDATIONS = 'GET_REQUESTS_FOUNDATIONS';
export const GET_REQUESTS_ADOPT = 'GET_REQUESTS_ADOPT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ONE_FROM_CART = 'DELETE_ONE_FROM_CART';
export const DELETE_ALL_FROM_CART = 'DELETE_ALL_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const STORE_FILTERS = 'STORE_FILTERS';
export const GET_ALL_NEWS = 'GET_ALL_NEWS';
export const GET_SEARCH_PRODUCTS = 'GET_SEARCH_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const GET_DONATIONS = 'GET_DONATIONS';
export const POST_PRODUCT = 'POST_PRODUCT';
export const UPDATE_REQUEST_FOUNDATION = 'UPDATE_REQUEST_FOUNDATION';
export const POST_FOUNDATION = 'POST_FOUNDATION';
export const UPDATE_REQUEST_ADOPT = "UPDATE_REQUEST_ADOPT";
export const UPDATE_PET_STATUS = "UPDATE_PET_STATUS";


export function getFoundationDetail(id) {
    return function (dispatch) {
        try {
            return axios(`/foundations/${id}`)
                .then(detail =>
                    dispatch({ type: GET_FOUNDATION_DETAIL, payload: detail.data }))
        } catch (e) {
            dispatch({ type: GET_FOUNDATION_DETAIL, payload: e.data })
        }
        // return dispatch({ type: GET_FOUNDATION_DETAIL, payload: data.foundation.filter(foundation => foundation.id === id) })
    }
}

export function getProductDetail(id) {
    return function (dispatch) {
        try {
            return axios(`/products/${id}`)
                .then(detail =>
                    dispatch({ type: GET_PRODUCT_DETAIL, payload: detail.data }))
        } catch (e) {
            dispatch({ type: GET_PRODUCT_DETAIL, payload: e.data })
        }
    }
}

export function getFoundations() {
    return function (dispatch) {
        try {
            return axios(`/foundations`)
                .then(detail =>
                    dispatch({ type: GET_FOUNDATIONS, payload: detail.data }))
        } catch (e) {
            dispatch({ type: GET_FOUNDATIONS, payload: e.data })
        }
    }

}

export function getAllPets() {
    return async function (dispatch) {
        try {
            const info = await axios("/pets")
            return dispatch({
                type: GET_ALL_PETS,
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

export function getAllNews() {
    return async function (dispatch) {
        try {
            const news = await axios("/news")
            return dispatch({
                type: GET_ALL_NEWS,
                payload: news.data
            })
        } catch (error) {
            // return dispatch({     
            // Agregar componente de pagina en construccion
            // Por si algun dia se cae la DB
            // })
        }
    }
}


export function getPetDetail(id) {
    return async function (dispatch) {
        try {
            const info = await axios(`/pets/${id}`)
            return dispatch({
                type: GET_PET_DETAIL,
                payload: info.data
            })
        }
        catch (error) {
            // return dispatch({     
            // Agregar componente de pagina en construccion
            // Por si algun dia se cae la DB
            // })
        }
    }
}

export function filtersConfig(config) {
    return {
        type: FILTERS_CONFIG,
        filter: Object.keys(config),
        payload: config
    }
}
export function petsFiltered(pets, page) {
    return {
        type: PETS_FILTERED,
        filtered: pets,
        perPage: page
    }
}


export function getCurrency() {
    return async function (dispatch) {
        try {
            const info = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            if (info === "" || info === null || info === undefined || info.data === "") throw new Error('La API no responde')
            return dispatch({
                type: GET_CURRENCY,
                payload: info.data
            })

        } catch (error) {
            dispatch({
                type: GET_CURRENCY,
                payload: [{ error }, { casa: { venta: 300 } }]
            })

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

export function updateFoundation(data, id) {
    return async function (dispatch) {
        try {
            const updatedFoundation = await axios.put(`/foundations/${id} `, data);

            return dispatch({
                type: UPDATE_FOUNDATION,
                payload: updatedFoundation.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function updateUser(data, email) {
    return async function (dispatch) {
        console.log(data, email, "------")
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

export function getAllProducts() {
    return async function (dispatch) {
        try {
            const info = await axios("/products")
            return dispatch({
                type: GET_ALL_PRODUCTS,
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

export function getRequestsFoundations() {
    return async function (dispatch) {
        try {
            const info = await axios("/request_foundations")
            return dispatch({
                type: GET_REQUESTS_FOUNDATIONS,
                payload: info.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getRequestsAdopt() {
    return async function (dispatch) {
        try {
            const info = await axios("/request_adopts")
            return dispatch({
                type: GET_REQUESTS_ADOPT,
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

export function postDonation(order) {
    return async function (dispatch) {
        try {
            const info = await axios.post("/donations", order)
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
// POST DB
export function postNews(data) {
    return function () {
        axios.post("/news", data)
    }
}
export function postPets(data) {
    console.log(data);
    return function () {
        try {
            axios.post("/pets", data)
        } catch (error) {
            console.log(error);
        }
    }
}
export function postRequestAdopt(data) {
    return function () {
        try {
            axios.post("/request_adopts", data)
        }
        catch (e) {
            console.log(e)
        }
    }
}

export function postMessage(data) {
    return function () {
        try {
            axios.post("/messages", data)
        }
        catch (e) {
            console.log(e)
        }
    }
}

export function getUsers() {
    return async function (dispatch) {
        try {
            const allUsers = await axios("/users")
            return dispatch({
                type: GET_USERS,
                payload: allUsers.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postRequestFoundation(data) {
    return async function (dispatch) {
        try {
            const info = await axios.post("/request_foundations", data)
            return dispatch({
                type: POST_REQUEST_FOUNDATION,
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

//SHOPPING CART

export function addToCart(id) {
    return function (dispatch) {
        dispatch({
            type: ADD_TO_CART,
            payload: id
        })
    }
}

export function delFromCart(id, all = false) {
    return function (dispatch) {
        if (all) {
            return dispatch({
                type: DELETE_ALL_FROM_CART,
                payload: id
            })
        } else {
            return dispatch({
                type: DELETE_ONE_FROM_CART,
                payload: id
            })
        }
    }
}

export function clearCart() {
    return function (dispatch) {
        return dispatch({
            type: CLEAR_CART
        })
    }
}


//SearchBar store
export function getSearchProducts(name) {
    return async function (dispatch) {
        try {
            const info = await axios(`/products?name=${name}`)
            return dispatch({
                type: GET_ALL_PRODUCTS,
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

//FILTERS STORE
export const storeFilters = (fByAZ, fByPrice, fByType, fByCategory) => {
    return function (dispatch) {
        return dispatch({
            type: STORE_FILTERS,
            payload: { fByAZ, fByPrice, fByType, fByCategory }
        });
    };
};


// UPDATE PRODUCTS

export function updateProduct(data, id) {

    return async function (dispatch) {
        try {
            const updatedProduct = await axios.put(`/products/${id}`, data);

            return dispatch({
                type: UPDATE_PRODUCT,
                payload: updatedProduct
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}


// GET DONATIONS
export function getDonations() {
    return async function (dispatch) {
        try {
            const allDonations = await axios("/donations")
            return dispatch({
                type: GET_DONATIONS,
                payload: allDonations.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//POST PRODUCTS
export function postProduct(data) {
    console.log(data)
    return async function (dispatch) {
        try {
            const info = await axios.post("/products", data)
            return dispatch({
                type: POST_PRODUCT,
                payload: info.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//UPDATE REQUEST_FOUNDATIONS
export function updateRequestFoundation(data, id) {
    return async function (dispatch) {
        try {
            const updatedRequest = await axios.put(`/request_foundations/${id}`, data);

            return dispatch({
                type: UPDATE_REQUEST_FOUNDATION,
                payload: updatedRequest
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

//POST FOUNDATIONS
export function postFoundation(data) {
    console.log(data, "Soy yo")
    return async function (dispatch) {
        try {
            const info = await axios.post("/foundations", data)
            return dispatch({
                type: POST_FOUNDATION,
                payload: info.data
            })
        } catch (error) {

            console.log(error)
        }
    }
}

export function updateRequestAdopt(id, data) {
    return async function (dispatch) {
        console.log(data);
        try {
            const updatedRequest = await axios.put(`/request_adopts/${id}`, data);
            return dispatch({
                type: UPDATE_REQUEST_ADOPT,
                payload: updatedRequest.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function updatePetStatus(id, data) {
    return async function (dispatch) {
        try {
            const updatedStatus = await axios.put(`/pets/status/${id}`, data);
            return dispatch({
                type: UPDATE_PET_STATUS,
                payload: updatedStatus.data
            });
        }
        catch (error) {
            console.log(error)
        }
    }
}