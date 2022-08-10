import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import style from './Donate.module.css'
import { getFoundations, getUserByEmail } from '../../redux/actions/index.js';
import Stepper from './Stepper';
import banner from '../../assets/paw-hand1.png'
import paypal from '../../assets/paypal1.png'
import mercadoPago from '../../assets/mercadopago.png'
import Paypal from './Paypal/Paypal';
import Footer from '../Footer/Footer';
import paw from '../../assets/yellow-paw.png';
import hands from "../../assets/donate.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Donate(){
    
    const dispatch = useDispatch()

    
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(getFoundations());
        if (isAuthenticated) dispatch(getUserByEmail(user.email));
    },[dispatch])
    
    const foundations = useSelector(state=> state.foundations)
    const userDetail = useSelector(state => state.user);


    const {isAuthenticated, loginWithRedirect, user} = useAuth0();

    const [donation, setDonation] = useState({
        foundation: '',
        method: '',
        amount: '',
    });
    
    let foundation = donation.foundation.length && foundations.filter(f => donation.foundation === f.images[0])[0]

    const [checkout, setCheckout] = useState(false);


    return (
        !checkout ? 
        <> 
            <div className={style.banner}>
                <div>
                    <h1>Tu ayuda <br></br>puede salvar una huella</h1>
                    <br></br>
                    <p>Tu aporte económico es muy importante para que las fundaciones puedan pagar tratamientos, estudios médicos y alimentos para seguir ayudando a nuestros peludos amigos.
                    <br></br><br></br> Agradecemos tu apoyo, y sabemos que nuestras huellas también!</p>
                </div>
                {/* Cambiar esta imagen */}
                <img src={banner} alt="Banner of animals"/>
            </div>

            <div className={style.containerA}>
                <div className={style.subcontainerA}>
                    <h3>¡Empezá a sumar huellitas!</h3>
                    <p>Sumá 1 huellita por cada $5 pesos que dones para canjear por productos en nuestra tienda. Las fundaciones ganan, ¡y vos también! ¿Qué esperás para sumarte? 
                    </p>
                    <div>
                    <Link to='/huellitas'><button>VER MÁS</button></Link>
                    </div>
                </div>
                {!isAuthenticated ?<div className={style.subcontainerB}>
                    <h3>¿Todavía no te registraste?</h3>
                    <p>¡Hacelo gratis y empezá a sumar huellitas!</p>
                    <button onClick={()=>loginWithRedirect()}>REGISTRARSE</button>
                </div> :
                <img  src={paw} alt='paws'></img>}
            </div>

            <h2 data-aos="fade-right" data-aos-duration="1500" className={style.title}>Doná en tres simples pasos</h2>

        <div className={style.contDonar}>
            <div className={style.donate}>
                <Stepper isAuthenticated={isAuthenticated} donation={donation} setDonation={setDonation} setCheckout={setCheckout} foundation={foundation} loginWithRedirect={loginWithRedirect} ></Stepper>
            </div>

            <div className={style.renders}>
            <div>
                <h4 id={style.id1}>1. Fundación a donar</h4>
                <div className={style.renderFoundation}>
                    {donation.foundation.length>0 && <img className={style.foundation} src={donation.foundation} alt='foundation'></img>}
                    {foundation.name?.length && <span>{foundation.name}</span>}
                </div>
            </div>

            <div>
                <h4 id={style.id2}>2. Método de pago</h4>
                {donation.method === 'paypal' && <img className={style.paypal} src={paypal} alt='paypal'></img>}
                {donation.method === 'mercadoPago' && <img className={style.mp} src={mercadoPago} alt='mercadoPago'></img>}
            </div>

            <div>
                <h4  id={style.id3}>3. Importe</h4>
                <p className={style.amount}>{donation.amount}</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className={style.contAporte}>
                <h2  className={style.aporte}>¡Ayudanos con tu aporte!</h2> 
            {/* <div className={style.contIMG}> */}
            <img className={style.img} src={hands}></img>
            {/* </div> */}
            </div>
        </div>
    </div>
        <Footer/>
        </>
        : 
        <Paypal amount={donation.amount} foundation={foundation} user={userDetail}></Paypal>
    )
}