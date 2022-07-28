import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <div className={styles.main}>
            <input className={styles.inp} type="text" placeholder="Buscar productos..."/>
            <button href="#">
                <i className="material-icons">search</i>
            </button>
        </div>
    )
}
