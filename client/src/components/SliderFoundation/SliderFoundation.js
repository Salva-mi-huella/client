import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFoundations } from '../../actions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../SliderFoundation/SliderFoundation.module.css'


export const SliderFoundation = () => {

    const dispatch = useDispatch();
    const foundations = useSelector(state => state.foundations)

    useEffect(() => {
        // const id = this.props.match.params.foundationId
        dispatch(getFoundations())
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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

            <h1 style={{ textAlign: 'center' }}>Nuestras Fundaciones SLIDER</h1>

            <Slider {...settings}>

                {
                    foundations.length > 0 ? foundations.map(f => (
                        <div className={styles.foundationContainer}>
                            <div className={styles.logoContainer}>
                                <img className={styles.logo} src={f.img[0]} alt='foundationImage' />
                            </div>
                            <h3 className={styles.title} >{f.name}</h3>
                        </div>

                    ))
                        : false}

            </Slider>

        </div>
    )


}
