import React, { useState } from "react";
import Slider from "react-slick";
import styles from './Foundation.module.css'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function PetSlick ({foundation}) {

 const [fav, setFav] = useState(false)

 let arrFavs = []
 function handleFav (name){
     if(fav){
         const favs = JSON.parse(localStorage.getItem('fav'));
         arrFavs = favs.filter(f => f !== name)
         localStorage.setItem("fav", JSON.stringify(arrFavs))
         setFav(false)
     }else{  
         const favs = JSON.parse(localStorage.getItem('fav'));
         if(favs){
             arrFavs = [...favs, name]
             localStorage.setItem("fav", JSON.stringify(arrFavs))
         }else localStorage.setItem("fav", JSON.stringify([name]))
         setFav(true)
     } 
 }


    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30vw",
      slidesToShow: 3,
      speed: 400,
      autoplay: true
    };

    return (
      <div className={styles.pets}>
        {/* <Aside/> */}
        <Slider {...settings}>
          {foundation.pets.map(p => (
            <div key={p.id}>
            <div className={style.card}>
                <div className={style.header}>
                    <Link  className={style.link} to={`/huella/${p.id}`}>
                        <span>{p.name}</span>
                        <p>{p.age}</p>
                    </Link>
                    {
                        fav ?
                        <i onClick={e => handleFav(p.name)} className={`fa-solid fa-heart-circle-check ${style.coral}`}></i>
                        :
                        <i onClick={e => handleFav(p.name)} className="fa-solid fa-heart-circle-plus"></i>
                    }
                </div>
                <Link className={style.containerImg} to={`/huella/${p.id}`}>
                    <img className={style.img} src={p.images[0]} alt={p.name} />
                </Link>
            </div>
       
        </div>

        ))}
        </Slider>
      </div>
    );
  }
