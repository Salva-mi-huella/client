import React from 'react'
import cat from '../../assets/cat_constructor2.png'
import style from './Payment.module.css'




export default function Payment(){
    

    return (
        <>
        <div className={style.container}>
            <h1>Próximamente!</h1>
            <p>Estamos trabajando arduamente en esta sección, disculpe las molestias ocasionadas.</p>
            <img src={cat} alt='proximamente'></img>

        </div>
        </>
    )
}