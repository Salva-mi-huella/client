import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Footer from '../Footer/Footer.js';
import Carousel from '../Carousel/Carousel';
import Button from './Button';
import Button2 from './Button2';
import { getFoundations } from '../../redux/actions';
import { SliderFoundation } from '../SliderFoundation/SliderFoundation';
import banner from '../../assets/banner.png';
import paw from '../../assets/paw-print.png';
import { useAuth0 } from '@auth0/auth0-react';

export default function Home() {

   const { loginWithRedirect } = useAuth0();

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
                    <h1>Salvá<br></br>mi huella</h1>
                    <p>En este espacio va a ir el eslogan principal del sitio.</p>
                </div>
                <img src={banner} alt='eslogan'></img>
            </div>

            <div>
                <Carousel />
            </div>

                <div className={styles.userInfo}>
                    <div className={styles.subInfo}>
                        <h1>¿Por qué registrarse?</h1>
                        <p>Vas a poder guardar a tus huellas en favoritos, hacer un seguimiento de tus solicitudes de adopción, acceder a los beneficios de Huellitas, todo esto y mucho más! Es super simple y fácil, sumate!</p>
                        <Button2 onClick={() => loginWithRedirect()}></Button2>
                    </div>

                    <div className={styles.subInfo}>

                            <h1>Disfrutá de Huellitas</h1>
                            {/* <img src={paw} alt='paw'></img> */}

                        <p>Nuestro programa gratuito en el que podés ganar puntos por tu adopción y por cada donación a nuestras fundaciones y canjear por productos en nuestra tienda</p>
                        <Link className={styles.link} to='/tienda'><Button></Button></Link>
                    </div>
                </div>

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



            <div>
                <Footer />
            </div>



        </div>
    )
}