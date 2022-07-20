import axios from 'axios';
import * as data from "../mocks/ListAnimalsMock/ListAnimalsMock.json";

export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';
export const GET_PET_DETAIL = 'GET_PET_DETAIL';

export function getFoundationDetail(id){
    return function(dispatch) {
        try{
            return axios(`/foundations/${id}`)
            .then(detail =>
                dispatch({ type: GET_FOUNDATION_DETAIL, payload: detail.data }))
            } catch (e) {
                dispatch({ type: GET_FOUNDATION_DETAIL, payload: e.data })
            }
        } 
    }

export function getPetDetail(name){
    console.log("hola")
    return function (dispatch){
        return dispatch({
            type: GET_PET_DETAIL,
            payload: data.pet.find(animal => animal.name.toLowerCase()=== name.toLowerCase())
        })
    }
}
