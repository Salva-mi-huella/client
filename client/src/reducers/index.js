// IMPORT ACTIONS HERE
import { GET_FOUNDATION_DETAIL } from "../actions"



const initialState = {
    foundationDetail: []

}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}

        default: return {...state}

    }
}