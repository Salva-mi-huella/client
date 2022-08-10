import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Footer from '../Footer/Footer.js';
import Carousel from '../Carousel/Carousel';
import { getFoundations, postUser, getUserByEmail, getAllPets, getUsers } from '../../redux/actions';
import { SliderFoundation } from '../SliderFoundation/SliderFoundation';
import banner from '../../assets/banner-home.jpg';
import yellow_paw from '../../assets/yellow-paw.png';

import paw from '../../assets/yellow-paw.png';
import { useAuth0 } from '@auth0/auth0-react';
import eslogan from '../../assets/eslogan2.png'
import register from '../../assets/register1.png';
import gift from '../../assets/gift-2png.png';
import { setUserSession } from "../../utils";
import News from './News/News';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function Home() {

    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    const dispatch = useDispatch();
    const foundations = useSelector(state => state.foundations)
    let users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getAllPets())
        dispatch(getFoundations());
        dispatch(getUsers());
        const userFound = users.find(u => u.email === user.email);

        if (isAuthenticated && !userFound) {
            const { given_name, family_name, email, nickname, picture } = user;
            if (user.hasOwnProperty("family_name")) {
                dispatch(postUser({ name: given_name, lastname: family_name, email, picture, nickname }));
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
                    <img className={styles.yellow_paw} src={yellow_paw} alt="eslogan" />
                    <h1>SALVÁ</h1>
                    <h2>MI HUELLA</h2>
                    <p>Tu mejor amigo te está esperando.<br></br>¿Qué esperas para salvarlo?</p>
                </div>
                <img className={styles.banner} src={banner} alt='eslogan'></img>
            </div>

                <Carousel foundations={foundations} />


                <div className={styles.userInfo}>
                    <div className={styles.subInfoA} 
                        data-aos="fade-right"
                        data-aos-duration="1000">
                        <div>
                            <h1>¿Por qué registrarse?</h1>
                            <p>Administración de cuenta gratuita, seguimiento de <br></br>solicitudes de adopción, acceso a Huellitas, todo esto <br></br> y mucho más. Es super simple y fácil, ¡sumate!</p>
                            {!isAuthenticated && <button onClick={()=>loginWithRedirect()}>REGISTRARSE</button>}
                        </div>
                            <img src={register} alt='register'></img>
                    </div>

                    <div className={styles.subInfoC} 
                        data-aos="fade-left"
                        data-aos-duration="1300">
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