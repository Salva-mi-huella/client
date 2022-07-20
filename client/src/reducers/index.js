// IMPORT ACTIONS HERE

import { GET_FOUNDATION_DETAIL, GET_PET_DETAIL, GET_FOUNDATIONS, GET_AllPETS } from "../actions"




const initialState = {
    petDetail: {}
    foundationDetail: [],
    foundations:[],
    allPets: []

}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}
        
        case GET_PET_DETAIL: return {...state, petDetail: action.payload}

        case GET_FOUNDATIONS:  return {...state, foundations: action.payload}

        case GET_AllPETS: return {...state, allPets: action.payload }

        default: return {...state}

    }
}