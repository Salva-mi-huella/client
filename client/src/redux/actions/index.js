import axios from 'axios';

export const GET_FOUNDATION_DETAIL = 'GET_FOUNDATION_DETAIL';
export const GET_PET_DETAIL = 'GET_PET_DETAIL';
export const GET_FOUNDATIONS = 'GET_FOUNDATIONS';
export const GET_All_PETS = 'GET_AllPETS'
export const FILTERS_CONFIG = 'FILTERS_CONFIG'


export function getFoundationDetail(id){
    return function(dispatch) {
        try{
            return axios(`/foundations/${id}`)
            .then(detail =>
                dispatch({ type: GET_FOUNDATION_DETAIL, payload: detail.data }))
            } catch (e) {
                dispatch({ type: GET_FOUNDATION_DETAIL, payload: e.data })
            }
            // return dispatch({ type: GET_FOUNDATION_DETAIL, payload: data.foundation.filter(foundation => foundation.id === id) })
        } 
}

export function getFoundations(){
    return function(dispatch) {
        try{
            return axios(`/foundations`)
            .then(detail =>
                dispatch({ type: GET_FOUNDATIONS, payload: detail.data }))
            } catch (e) {
                dispatch({ type: GET_FOUNDATIONS, payload: e.data })
            }
        } 

}

export function getAllPets(){
    return async function (dispatch){
        try {
            const info = await axios("http://localhost:4000/pets")
            return dispatch({
                type:GET_All_PETS,
                payload: info.data
            })
        } catch (error) {
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }

}


export  function getPetDetail(id){
    return async function (dispatch){
        try{
            const info = await axios(`http://localhost:4000/pets/${id}`)
            return dispatch({
                type: GET_PET_DETAIL,
                payload: info.data
            })
        }
        catch(error){
            // return dispatch({     
                // Agregar componente de pagina en construccion
                // Por si algun dia se cae la DB
            // })
        }
    }
}

export function filtersConfig(config){
    return {
        type: FILTERS_CONFIG,
        filter : Object.keys(config),
        payload: config
    } 
}

