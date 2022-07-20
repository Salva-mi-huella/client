// IMPORT ACTIONS HERE
import { GET_FOUNDATION_DETAIL } from "../actions"
import { GET_FOUNDATIONS} from "../actions"



const initialState = {
    foundationDetail: [],
    foundations:[]

}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_FOUNDATION_DETAIL:  return {...state, foundationDetail: action.payload}

        case GET_FOUNDATIONS:  return {...state, foundations: action.payload}

        default: return {...state}

    }
}