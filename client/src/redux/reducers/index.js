// IMPORT ACTIONS HERE


import { GET_FOUNDATION_DETAIL, GET_PET_DETAIL, GET_FOUNDATIONS, GET_All_PETS, FILTERS_CONFIG, GET_CURRENCY, POST_USER, UPDATE_FOUNDATION, GET_All_PRODUCTS, PETS_FILTERED, UPDATE_USER, GET_USER} from "../actions"

const initialState = {
    petDetail: {},
    foundationDetail: [],
    foundations:[],
    allPets: [],
    filtersConfig: [],
    currency: {},
    petsFiltered: [],
    allProducts:[],
    user: {},
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}
        
        case GET_PET_DETAIL: return {...state, petDetail: action.payload}

        case GET_FOUNDATIONS:  return {...state, foundations: action.payload}

        case GET_All_PETS: return {...state, allPets: action.payload }

        case GET_CURRENCY: return {...state, currency: action.payload }

        case FILTERS_CONFIG: return{...state,
            filtersConfig:{ ...state.filtersConfig, [action.filter]: action.payload[action.filter]}}
        
        case POST_USER: return {...state}

        case UPDATE_FOUNDATION: return {...state}

        case UPDATE_USER: return {...state}

        case GET_USER: return {...state, user: action.payload}

        case GET_All_PRODUCTS: return{...state, allProducts: action.payload}

        case PETS_FILTERED: return{...state, 
            petsFiltered:{
                filtered: action.filtered,
                pages: action.perPage
            }}

        default: return {...state}

    }
}