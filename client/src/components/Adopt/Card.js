import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Adopt.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions';

export default function Card({id, name,img,age}){


    const [fav, setFav] = useState(false)
    const { user } = useAuth0();
    const dispatch = useDispatch()
 

    useEffect(()=>{
            let favs = JSON.parse(localStorage.getItem('fav'));
            let bool = favs.includes(id)
            setFav(bool)
        },[fav,id])
    
    let arrFavs = []
    function handleFav (){
        if(fav){
            const favs = JSON.parse(localStorage.getItem('fav'));
            arrFavs = favs.filter(f => f !== id)
            localStorage.setItem("fav", JSON.stringify(arrFavs))
            if(user){
                let data = {favs:arrFavs}
                dispatch(updateUser(data, user.email))
            }
            setFav(false)
        }else{  
            const favs = JSON.parse(localStorage.getItem('fav'));
            if(favs){
                arrFavs = [...favs,id]
                localStorage.setItem("fav", JSON.stringify(arrFavs))
            }else localStorage.setItem("fav", JSON.stringify([id]))
            if(user){
                let data = {favs:arrFavs}
                dispatch(updateUser(data, user.email))
            }
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