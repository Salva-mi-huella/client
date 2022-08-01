// IMPORT ACTIONS HERE

import { 
    GET_FOUNDATION_DETAIL, 
    GET_PET_DETAIL, 
    GET_FOUNDATIONS, 
    GET_ALL_PETS, 
    FILTERS_CONFIG, 
    GET_CURRENCY, 
    POST_USER, 
    UPDATE_FOUNDATION, 
    GET_ALL_PRODUCTS, 
    PETS_FILTERED, 
    UPDATE_USER, 
    GET_USER,
    GET_USERS, 
    POST_DONATION, 
    POST_REQUEST_FOUNDATION, 
    GET_PRODUCT_DETAIL,
    ADD_TO_CART,
    DELETE_ALL_FROM_CART,
    DELETE_ONE_FROM_CART,
    CLEAR_CART,
    GET_ALL_NEWS,
    GET_REQUESTS_FOUNDATIONS
} from "../actions"


const initialState = {
    petDetail: {},
    foundationDetail: [],
    foundations:[],
    allPets: [],
    filtersConfig: [],
    currency: {},
    allProducts:[],
    productDetail: {},
    petsFiltered: [],
    users:[],
    user: {},
    donations: [],
    cart:[],
    news: [],
    requests_foundations: [],
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}
        
        case GET_PET_DETAIL: return {...state, petDetail: action.payload}

        case GET_FOUNDATIONS:  return {...state, foundations: action.payload}

        case GET_ALL_PETS: return {...state, allPets: action.payload }

        case GET_CURRENCY: return {...state, currency: action.payload }

        case FILTERS_CONFIG: return{...state,
            filtersConfig:{ ...state.filtersConfig, [action.filter]: action.payload[action.filter]}}
        
        case POST_USER: return {...state}

        case UPDATE_FOUNDATION: return {...state}

        case UPDATE_USER: return {...state}

        case GET_USER: 
        return {...state, user: action.payload}

        case GET_ALL_PRODUCTS: return{...state, allProducts: action.payload}

        case GET_PRODUCT_DETAIL: return{...state, productDetail: action.payload}
        
        case PETS_FILTERED: return{...state, 
            petsFiltered:{
                filtered: action.filtered,
                pages: action.perPage
            }}

        case GET_USERS:  return {...state, users: action.payload}
        
        case POST_DONATION: return {...state}

        case POST_REQUEST_FOUNDATION: return {...state}

        case GET_REQUESTS_FOUNDATIONS: return {...state, requests_foundations: action.payload}

        case ADD_TO_CART: {
            let newItem = state.allProducts.find(product => product.id === action.payload)

            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart
            ?{...state, 
                cart:state.cart.map(item => item.id === newItem.id?{...item, quantity: item.quantity + 1}:item)
            }
            : {...state, 
                cart:[...state.cart, {...newItem, quantity:1}]
            }
        }

        case DELETE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1 ? 
            {...state, 
                cart: state.cart.map(item => item.id ===action.payload?{...item,quantity:item.quantity-1}:item)
            }
            : {...state, 
                cart:state.cart.filter(item => item.id !== action.payload)
            }
        }

        case DELETE_ALL_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }

        case CLEAR_CART: return {...state, cart:[]}

        case GET_ALL_NEWS: return {...state, news: action.payload}

        default: return {...state}

    }
}
