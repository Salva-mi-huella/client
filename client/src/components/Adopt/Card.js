import React from 'react'
import { Link } from 'react-router-dom'
import style from './Adopt.module.css'

export default function Card({id, name,img}){
 
    return(
        <Link className={style.linkCard} to={`/huella/${id}`}>
            <div className={style.card}>
                <span>{name}</span>
                <img className={style.img} src={img[0]} alt={name} />
            </div>
        </Link>
    )
}