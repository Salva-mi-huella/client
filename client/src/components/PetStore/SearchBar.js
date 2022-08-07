import React from 'react'
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux';
import { getSearchProducts } from '../../redux/actions';

export default function SearchBar() {
    const dispatch = useDispatch();
    

    function handleChange(e){
        let name = e.target.value
        dispatch(getSearchProducts(name))
    }
    
    return (
        <div className={styles.searchContainer}>
            <input onChange={handleChange} className={styles.searchInput} type="text" placeholder="Buscar productos..."/>
            <i className="fa-solid fa-magnifying-glass" ></i>
        </div>
    )
}
