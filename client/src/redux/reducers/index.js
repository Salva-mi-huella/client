// IMPORT ACTIONS HERE

import { GET_FOUNDATION_DETAIL, GET_PET_DETAIL, GET_FOUNDATIONS, GET_All_PETS, FILTERS_CONFIG, PETS_FILTERED} from "../actions"




const initialState = {
    petDetail: {},
    foundationDetail: [],
    foundations:[],
    allPets: [],
    filtersConfig: [],
    petsFiltered: []
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}
        
        case GET_PET_DETAIL: return {...state, petDetail: action.payload}

        case GET_FOUNDATIONS:  return {...state, foundations: action.payload}

        case GET_All_PETS: return {...state, allPets: action.payload }

        case FILTERS_CONFIG: return{...state,
            filtersConfig:{ ...state.filtersConfig, [action.filter]: action.payload[action.filter]}}

        case PETS_FILTERED: return{...state, 
            petsFiltered:{
                filtered: action.filtered,
                pages: action.perPage
            }}

        default: return {...state}

    }
}