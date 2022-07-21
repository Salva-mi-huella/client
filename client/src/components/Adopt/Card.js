import React from 'react'
import style from './Adopt.module.css'

export default function Card({ name,img}){
 
    return(
        <div className={style.card}>
            <h2>{name}</h2>
            <img className={style.img} src={img[0]} alt={name} />
        </div>
    )
}