import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Adopt.module.css'

export default function Card({id, name,img,age}){

    const [fav, setFav] = useState(false)
    
    //Quiero que cuando se refresque la pagina siga apareciendo en amarillo
    // useEffect(()=>{
    //     return function(){
    //         let favs = JSON.parse(localStorage.getItem('fav'));
    //         let bool = favs.includes(name)
    //         console.log(bool)
    //         setFav(bool)
         
    //     }
    // })
    
    let arrFavs = []
    function handleFav (){
        if(fav){
            const favs = JSON.parse(localStorage.getItem('fav'));
            arrFavs = favs.filter(f => f !== name)
            localStorage.setItem("fav", JSON.stringify(arrFavs))
            setFav(false)
        }else{  
            const favs = JSON.parse(localStorage.getItem('fav'));
            if(favs){
                arrFavs = [...favs,id]
                localStorage.setItem("fav", JSON.stringify(arrFavs))
            }else localStorage.setItem("fav", JSON.stringify([id]))
            setFav(true)
        } 
    }
 
    return(
        <div >
            <div className={style.card}>
                <div className={style.header}>
                    <Link  className={style.link} to={`/huella/${id}`}>
                        <span>{name}</span>
                        <p>{age}</p>
                    </Link>
                    {
                        fav ?
                        <i onClick={handleFav} className={`fa-solid fa-heart-circle-check ${style.coral}`}></i>
                        :
                        <i onClick={handleFav} className="fa-solid fa-heart-circle-plus"></i>
                    }
                </div>
                <Link className={style.containerImg} to={`/huella/${id}`}>
                    <img className={style.img} src={img[0]} alt={name} />
                </Link>
            </div>
       
        </div>
    )
}