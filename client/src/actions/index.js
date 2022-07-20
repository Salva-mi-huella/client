import axios from 'axios';
import * as data from "../mocks/ListAnimalsMock/ListAnimalsMock.json";
import * as data from "../mocks/ListFundationMock/ListFundationMock.json";

export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';
export const GET_PET_DETAIL = 'GET_PET_DETAIL';
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
    return {type:GET_AllPETS, payload: data.pet}
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
}


