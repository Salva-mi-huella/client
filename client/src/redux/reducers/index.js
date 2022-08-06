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
    STORE_FILTERS,
    GET_ALL_NEWS,
    GET_REQUESTS_FOUNDATIONS,
    GET_REQUESTS_ADOPT,
    GET_SEARCH_PRODUCTS,
    UPDATE_PRODUCT,
    GET_DONATIONS,
    POST_PRODUCT,
    UPDATE_REQUEST_FOUNDATION,
    UPDATE_REQUEST_ADOPT,
    UPDATE_PET_STATUS

} from "../actions"


const initialState = {
    petDetail: {},
    foundationDetail: [],
    foundations:[],
    allPets: [],
    filtersConfig: [],
    currency: {},
    allProducts:[],
    allProductsFiltered:[],
    productDetail: {},
    petsFiltered: [],
    users:[],
    user: {},
    donations: [],
    cart:[],
    news: [],
    requests_foundations: [],
    requests_adopt: []
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

        case GET_ALL_PRODUCTS: return{...state, allProductsFiltered:action.payload, allProducts: action.payload}

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

        case GET_REQUESTS_ADOPT: return {...state, requests_adopt: action.payload}

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

        case STORE_FILTERS:
            let filteredProducts = state.allProducts;

            //Filtro alfabetico
            if(action.payload.fByAZ){            
                if(action.payload.fByAZ){
                
                if(action.payload.fByAZ === 'Desorden'){
                    filteredProducts = state.allProducts
                }
                else if (action.payload.fByAZ === 'Asc'){
                    filteredProducts = filteredProducts.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))        
                }
                else if (action.payload.fByAZ === 'Desc'){
                    filteredProducts = filteredProducts.sort((a, b) => (b.name > a.name ? 1 : b.name < a.name ? -1 : 0))        
                }
            }         
            }

            //Filtro por precio
            if(action.payload.fByPrice){
                if(action.payload.fByPrice === 'Unordered'){
                    filteredProducts = state.allProducts
                }
                if(action.payload.fByPrice === 'Low'){
                    filteredProducts = filteredProducts.sort((a,b)=>(a.points > b.points ? 1 : a.points < b.points ? -1 : 0))
                }
                if(action.payload.fByPrice === 'High'){
                    filteredProducts = filteredProducts.sort((a,b)=>(b.points > a.points ? 1 : b.points < a.points ? -1 : 0)) 
                }
            }

            //Filtro por tipo
            if(action.payload.fByType){
                if(action.payload.fByType === 'Unordered'){
                    filteredProducts= state.allProducts
                }                
                if(action.payload.fByType === 'Perro'){
                    filteredProducts=filteredProducts.filter(p => p.type === "Perro" || p.type==="Todos")
                }
                if(action.payload.fByType === 'Gato'){
                    filteredProducts=filteredProducts.filter(p => p.type === "Gato" || p.type==="Todos")
                }
            }

            //Filtro por Categoria
            if(action.payload.fByCategory){
                if(action.payload.fByCategory === 'Unordered'){
                    filteredProducts= state.allProducts
                } 
                if(action.payload.fByCategory === 'Accesorios'){
                    filteredProducts=filteredProducts.filter(p => p.category === "Accesorios")
                }
                if(action.payload.fByCategory === 'Indumentaria'){
                    filteredProducts=filteredProducts.filter(p => p.category === "Indumentaria")
                }
                if(action.payload.fByCategory === 'Alimento'){
                    filteredProducts=filteredProducts.filter(p => p.category === "Alimento")
                }
                if(action.payload.fByCategory === 'Juguetes'){
                    filteredProducts=filteredProducts.filter(p => p.category === "Juguetes")
                }
            }

            return{...state, allProductsFiltered:filteredProducts}

        case GET_ALL_NEWS: return {...state, news: action.payload}


        case GET_SEARCH_PRODUCTS: return { ...state, allProductsFiltered: action.payload }

        case UPDATE_PRODUCT: return {...state}

        case GET_DONATIONS: return {...state, donations: action.payload}
        
        case POST_PRODUCT: return {...state}

        case UPDATE_REQUEST_FOUNDATION: return {...state}

        case UPDATE_REQUEST_ADOPT: return {...state}
        
        case UPDATE_PET_STATUS: return {...state}


        default: return {...state}

    }
}
