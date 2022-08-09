import React, { useState, useEffect} from "react";
import Slider from "react-slick";
import styles from './Foundation.module.css'
import { Link } from 'react-router-dom';
import style from './Card.module.css'
import Card from './Card.js'

export default function PetSlick ({foundation}) {


    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30vw",
      slidesToShow: foundation.pets.length>3 ? 3 : 2,
      speed: 400,
      autoplay: true
    };

    return (
      <div className={styles.pets}>
        <Slider {...settings}>
          {foundation.pets.filter(p=> p.adopted === false).map(p => (
        <Card id={p.id} name={p.name} img={p.images} age={p.age}></Card>
        ))}
        </Slider>
      </div>
    );
  }
