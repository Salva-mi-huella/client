import React from 'react'
import { Link } from 'react-router-dom'
import style from './Adopt.module.css'

export default function Card({id, name,img}){
 
    return(
        <Link to={`/huella/${id}`}>
            <div className={style.card}>
                <h2>{name}</h2>
                <img className={style.img} src={img[0]} alt={name} />
            </div>
        </Link>
    )
}