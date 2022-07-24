import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import style from './Donate.module.css'
import { getFoundations } from '../../redux/actions/index.js';
import Stepper from './Stepper';
// import banner from '../../assets/paw_hand.png'
import banner from '../../assets/paw_hand3.png'
// import banner from '../../assets/paw_hand5.png'
import product_a from '../../assets/product_a.jpg'
import product_b from '../../assets/product_b.jpg'
import product_c from '../../assets/product_c.png'
import paypal from '../../assets/paypal.png'
import mercadoPago from '../../assets/mercadopago.png'


export default function Donate(){
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getFoundations())
    },[dispatch])
    
    const foundations = useSelector(state=> state.foundations)
    const {loginWithRedirect} = useAuth0();

    const [donation, setDonation] = useState({
        foundation: '',
        method: '',
        amount: '',
    });


    return (
        <>
            <div className={style.banner}>
                <div>
                    <h1>Tu ayuda puede salvar una huella</h1>
                    <br></br>
                    <p>Tu aporte económico es muy importante para que las fundaciones puedan pagar tratamientos, estudios médicos y alimentos para seguir ayudando a nuestros peludos amigos.
                    <br></br><br></br> Agradecemos tu apoyo, y sabemos que nuestras huellas también!</p>
                </div>
                {/* Cambiar esta imagen */}
                <img src={banner} alt="Banner of animals"/>
            </div>

            <div className={style.containerA}>
                <div className={style.subcontainerA}>
                    <h3>Empezá a sumar huellitas!</h3>
                    <p>Sumá 1 huellita por cada $5 pesos que dones para canjear por productos en nuestra tienda. Las fundaciones ganan, ¡y vos también! ¿Qué esperás para sumarte? 
                    </p>
                    <div>
                    <Link to='/tienda'><button>Ver tienda</button></Link>
                    </div>
                </div>
                <div className={style.subcontainerB}>
                    <h3>¿Todavía no te registraste?</h3>
                    <p>¡Hacelo gratis y empezá a sumar huellitas!</p>
                    <button onClick={()=>loginWithRedirect()}>Registrarse</button>
                </div>
            </div>

            <div className={style.donate}>
                <Stepper donation={donation} setDonation={setDonation} ></Stepper>
            </div>

            <div className={style.renders}>
            <div>
                <h4>1. Fundación a donar</h4>
                {donation.foundation.length>0 && <img className={style.foundation} src={donation.foundation} alt='foundation'></img>}
            </div>

            <div>
                <h4>2. Método de pago</h4>
                {donation.method === 'paypal' && <img className={style.paypal} src={paypal} alt='paypal'></img>}
                {donation.method === 'mercadoPago' && <img className={style.mp} src={mercadoPago} alt='mercadoPago'></img>}
            </div>

            <div>
                <h4>3. Importe</h4>
                {donation.amount.length>0 && <p className={style.amount}>{donation.amount}</p>}
            </div>
        </div>
        </>
    )
}