import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFoundations } from '../../redux/actions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../SliderFoundation/SliderFoundation.module.css'


export const SliderFoundation = () => {

    const dispatch = useDispatch();
    const foundations = useSelector(state => state.foundations)

    const activeFoundations = foundations.filter(f => f.status === 'Activa')


    useEffect(() => {
        dispatch(getFoundations())
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <div className={styles.sliderContainer}>

            <h2 className={styles.sliderTitle}>Nuestra Familia</h2>

            <Slider {...settings}>


                {activeFoundations.length > 0 ? activeFoundations.map(f => (
                    <div className={styles.foundationContainer}>
                        <div className={styles.logoContainer}>
                            <Link to={`/fundacion/${f.id}`}><img className={styles.logo} src={f.images[0]} alt='foundationImage' /></Link>
                            <h3 className={styles.title} >{f.name}</h3>
                        </div>
                    </div>
                )) : <div>No hay fundaciones</div>}

            </Slider>

        </div>
    )


}
