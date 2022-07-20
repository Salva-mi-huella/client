import axios from 'axios';
import * as data from "../mocks/ListFundationMock/ListFundationMock.json";
import * as petsData from "../mocks/ListAnimalsMock/ListAnimalsMock.json";


export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';
export const GET_FOUNDATIONS = 'GET_FOUNDATIONS';
export const GET_AllPETS = 'GET_AllPETS'

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

export function getFoundations(){
    return function(dispatch) {
        // try{
        //     return axios(`/foundations`)
        //     .then(detail =>
        //         dispatch({ type: GET_FOUNDATIONS, payload: detail.data }))
        //     } catch (e) {
        //         dispatch({ type: GET_FOUNDATIONS, payload: e.data })
        //     }
            return dispatch({ type: GET_FOUNDATIONS, payload: data.foundation})
        } 
}

export function getAllPets(){
    //Actualizar ruta cuando tengamos la db
    return {type:GET_AllPETS, payload: petsData.pet}
}