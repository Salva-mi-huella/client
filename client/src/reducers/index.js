// IMPORT ACTIONS HERE
import { GET_FOUNDATION_DETAIL, GET_PET_DETAIL } from "../actions"



const initialState = {
    foundationDetail: {},
    petDetail: {}

}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}
        case GET_PET_DETAIL: return {...state, petDetail: action.payload}
        

        default: return {...state}

    }
}