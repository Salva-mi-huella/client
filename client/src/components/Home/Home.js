import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Footer from '../Footer/Footer.js';
import Carousel from '../Carousel/Carousel';
import { getFoundations } from '../../redux/actions';
import { SliderFoundation } from '../SliderFoundation/SliderFoundation';

export default function Home() {

    const dispatch = useDispatch();
    const foundations = useSelector(state => state.foundations)

    useEffect(() => {
        // const id = this.props.match.params.foundationId
        dispatch(getFoundations())
    }, [])


    return (
        <div className={styles.main}>

            <div className={styles.eslogan}>
                <div>
                    <h1>Salvá<br></br>una huella</h1>
                    <p>El lugar donde podés encontrar a tu mejor amigo y blabla.</p>
                </div>
                <img alt='eslogan'></img>
            </div>

            <div>
                <Carousel />
            </div>
            {/* <section>
                <div className={styles.containers}>
                    <h1> Fundaciones </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod </p>
                    <button className='btn btn-secondary'>INSCRIBIRME</button>
                </div>
                <div className={styles.containers}>
                    <h1>Donaciones</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod</p>
                    <button className='btn btn-secondary'>DONAR</button>
                </div>
                <div className={styles.containers}>
                    <h1>Adopciones</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod</p>
                    <button className='btn btn-secondary'>ADOPTAR</button>
                </div>
            </section> */}

            <div>
                <SliderFoundation />
            </div>
            
            {/* <section className={styles.foundations}>
                <div>
                    <h1>Nuestras Fundaciones</h1>
                </div>
                
                <div className={styles.logos}>
                  {foundations.length>0 && foundations.map(foundation => (
                    <div>
                        <Link to={`/fundacion/${foundation.id}`} ><img src={foundation.img[0]} alt='foundationImage'></img></Link>
                        <h4>{foundation.name}</h4>  
                    </div>
                    ))}
                </div>
            </section> */}


            {/* <section>
                <div>
                    <h1>Quienes Somos?</h1>
                </div>
                <div className={styles.info}>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi repudiandae, eligendi ipsum, quod </p>
                    </div>
                </div>
            </section> */}

            <div>
                <Footer />
            </div>



        </div>
    )
}