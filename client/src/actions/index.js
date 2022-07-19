import axios from 'axios';
import * as data from "../mocks/ListFundationMock/ListFundationMock.json";


export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';

export function getFoundationDetail(id){
    return function(dispatch) {
        // try{
        //     return axios(`/foundations/${id}`)
        //     .then(detail =>
        //         dispatch({ type: GET_FOUNDATION_DETAIL, payload: detail.data }))
        //     } catch (e) {
        //         dispatch({ type: GET_FOUNDATION_DETAIL, payload: e.data })
        //     }
            return dispatch({ type: GET_FOUNDATION_DETAIL, payload: data.foundation.filter(foundation => foundation.id === id) })
        } 
}