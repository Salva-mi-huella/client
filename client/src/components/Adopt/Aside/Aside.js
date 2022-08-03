import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { petsFiltered } from '../../../redux/actions';
import style from '../Adopt.module.css'

export default function Aside(){

    const [statusLike, setStatusLike] = useState(false)
    const arrAllPets = useSelector(state=> state.allPets )
    const dispatch = useDispatch()


    function handleLikes (){
        const favs = JSON.parse(localStorage.getItem('fav'));
        if(statusLike){
            dispatch(petsFiltered(arrAllPets))
            setStatusLike(false)
        }else{
        let collectionFavs = []
        for( let pet of arrAllPets ){
            for(let fav of favs){
                if(pet.name === fav) collectionFavs.push(pet)
            }}
        dispatch(petsFiltered(collectionFavs)) 
        setStatusLike(true)
    }}

    //Limpiar filtros
    function handleClean(){
        dispatch(petsFiltered(arrAllPets)) 
    }
    return(
        <div className={style.containerAside}>
            <div onClick={handleLikes} className={style.itemAside}>
                <i className="fa-solid fa-heart"></i>
            </div>
            <div className={style.itemAsideFilter} >
                <i className="fa-solid fa-filter"></i>
                <div className={style.containerItems}>
                    <p className={style.itemFiltTitle}>Filtros</p>
                    <div >
                        <span className={style.itemFilt}><i className="fa-solid fa-circle-xmark"></i>Gatos</span>
                        <span className={style.itemFilt}><i className="fa-solid fa-circle-xmark"></i>Macho</span>
                    </div>
                    <button onClick={handleClean} className={style.cleanFilters}>Limpiar</button>
                </div>
            </div>
        </div>
    )
}