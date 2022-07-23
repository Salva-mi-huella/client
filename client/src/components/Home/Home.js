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
                    <p>El lugar donde podés encontrar a tu mejor amigo y blabla.</p>
                </div>
                <img src={banner} alt='eslogan'></img>
            </div>

            <div>
                <Carousel />
            </div>

                <div className={styles.userInfo}>
                    <div>
                        <h1>¿Por qué registrarse?</h1>
                        <p>Ya toy re quemado y no me da la cabeza para pensar qué poner. Para maniana les prometo un texto real</p>
                        <Button2 onClick={() => loginWithRedirect()}></Button2>
                    </div>
                    <div>
                        <h1>Disfrutá de Huellitas</h1>
                        <p>Nuestro programa gratuito en el que podés ganar puntos por tu adopción y por cada donación a nuestras fundaciones y canjear por productos en nuestra tienda! </p>
                        <Link to='/tienda'><Button></Button></Link>

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