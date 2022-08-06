import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Footer from '../Footer/Footer.js';
import Carousel from '../Carousel/Carousel';
import { getFoundations, postUser, getUserByEmail } from '../../redux/actions';
import { SliderFoundation } from '../SliderFoundation/SliderFoundation';
import banner from '../../assets/banner-1.png';
import paw from '../../assets/paw-print.png';
import { useAuth0 } from '@auth0/auth0-react';
import eslogan from '../../assets/eslogan2.png'
import Adoptants from './Adoptants';
import register from '../../assets/register.png';
import gift from '../../assets/gift-box.png';
import { setUserSession, getUserSession } from "../../utils";
import News from './News/News';


export default function Home() {

    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    const dispatch = useDispatch();
    const foundations = useSelector(state => state.foundations)

    useEffect(() => {
        // const id = this.props.match.params.foundationId
        dispatch(getFoundations());

        if (isAuthenticated) {
            const { name, email, nickname, picture } = user;
            if (user.hasOwnProperty("family_name")) {
                dispatch(postUser({ name, email, picture, nickname }));
            }
            else {
                dispatch(postUser({
                    name: nickname,
                    email,
                    nickname,
                    picture
                }));
            }

            setUserSession(user);
            dispatch(getUserByEmail(user?.email));
        }
        

    }, [user, isAuthenticated, dispatch]);



    return (
        <div className={styles.main}>

            <div className={styles.eslogan}>
                <div>
                    <h1>Salvá<br></br>mi huella</h1>
                    <p>En este espacio va a ir el eslogan principal del sitio.</p>
                </div>
                <img src={banner} alt='eslogan'></img>
            </div>

                <Carousel foundations={foundations} />


                <div className={styles.userInfo}>
                    <div className={styles.subInfoA}>
                        <div>
                            <h1>¿Por qué registrarse?</h1>
                            <p>Administración de cuenta gratuita, seguimiento de solicitudes de adopción, acceso a Huellitas, todo esto y mucho más. Es super simple y fácil, ¡sumate!</p>
                            <button onClick={()=>loginWithRedirect()}>REGISTRARSE</button>
                        </div>
                            <img src={register} alt='register'></img>
                    </div>

                    <div className={styles.subInfoA}>
                            <img  className={styles.gift} src={gift} alt='gift'></img>
                        <div className={styles.subInfoB}>
                            <div>
                                <h1>Sumate a Huellitas</h1>
                                <img src={paw} alt='paw'></img>
                            </div>
                            <p>Nuestro programa de beneficios gratuito en el que podés ganar puntos y canjear por productos en nuestra tienda.</p>
                            <Link className={styles.link} to='/huellitas'><button>VER MÁS</button></Link>
                        </div>
                    </div>

                </div>

            <div>
                <SliderFoundation />
            </div>


            <div className={styles.top}>
                    <News></News>
                <div className={styles.esloganFooter}>
                    <div id='imagen'>
                        <img className={styles.esloganFooter} src={eslogan} alt='eslogan'></img>
                    </div>
                    <div>
                        <p>vos también podes <span>todos los días</span></p>
                        <h2> Salvar mi huella</h2>
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

        </div>
    )
}