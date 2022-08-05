import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { petsFiltered } from '../../../redux/actions';
import style from '../Adopt.module.css';
import Swal from 'sweetalert2'

export default function Aside(){

    const [statusLike, setStatusLike] = useState(false)
    const arrAllPets = useSelector(state=> state.allPets )

    const dispatch = useDispatch()
    function handleLikes (){
        const favs = JSON.parse(localStorage.getItem('fav'));
        if(favs.length){
            if(statusLike){
                dispatch(petsFiltered(arrAllPets))
                setStatusLike(false)
            }else{
                let collectionFavs = []
                for( let pet of arrAllPets ){
                    for(let fav of favs){
                        if(pet.id === fav) collectionFavs.push(pet)
                    }}
            dispatch(petsFiltered(collectionFavs)) 
            setStatusLike(true)
        }
    }
    else{
        if(statusLike){
            dispatch(petsFiltered(arrAllPets))
            setStatusLike(false)
        }else{
        Swal.fire({
            icon: 'error',
            text: 'Tu lista de favoritos esta vacía',
          })
    }}}

    return(
        <div className={style.containerAside}>
            <div onClick={handleLikes} className={style.itemAside}>
                <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    )
}