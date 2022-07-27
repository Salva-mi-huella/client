import React from 'react'
import { useDispatch } from 'react-redux'
import { filtersConfig } from '../../../redux/actions'
import style from '../Adopt.module.css'



export default function SearchBar(){

    const dispatch = useDispatch()

    function handleChange(e){
        let name = e.target.value
        dispatch(filtersConfig({name}))
    }
    return(
        <div className={style.searchContainer}>
            <input onChange={e=> handleChange(e)}className={style.searchInput} type="search" placeholder=' Busca por nombre'/>
            <i className="fa-solid fa-magnifying-glass" ></i>
        </div>
    )


}