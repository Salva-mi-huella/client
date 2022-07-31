import React from 'react'
import cat from '../../assets/cat_constructor2.png'
import style from './Huellitas.module.css'
import banner from '../../assets/banner-huellitas-2.png'
import { useAuth0 } from '@auth0/auth0-react';
import paw from '../../assets/paw-print.png'
import { Link } from 'react-router-dom';
import product_a from '../../assets/product_a.jpg'
import product_b from '../../assets/product_b.jpg'
import product_c from '../../assets/product_c.png'
import register from '../../assets/check-profile.png'
import invite from '../../assets/invite-friend.png'
import saved from '../../assets/saved-pet.png'



export default function Huellitas(){

   const { loginWithRedirect } = useAuth0();


    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src={banner} alt="Banner of animals"/>
                <div>
                    <h1 className={style.sectionTitle}>Disfrutá de Huellitas</h1>
                    <p >El programa donde más donaciones hacés, más te vamos a robar 🙂</p>
                    <button onClick={()=>loginWithRedirect()}>REGISTRARSE</button>
                </div>
            </div>
 
                <div className={style.subContainer}>

                    <div className={style.subInfoA}>
                            <h1>Por cada donación que hagas empezás<br></br>a sumar huellitas para canjear por productos en nuestra tienda</h1>

                            <div>
                                <h2>1$ equivalen a 5 huellitas</h2>
                                <img src={paw} alt='paw'></img>
                            </div>
                    </div>
                </div>

            <h1 className={style.title}>¿De qué otra manera podés empezar a sumar?</h1>
            <div className={style.section}>
                <div className={style.pictures}>
                    <img src={register} alt=''></img>
                    <img src={saved} alt=''></img>
                    <img src={invite} alt=''></img>
                </div>
                <div className={style.subTitles}>
                    <div>
                        <h3>Registrarte 500</h3>
                    </div>
                    <div>
                        <h3>Por cada huella que salves 2000</h3>
                    </div>
                    <div>
                        <h3>Por cada amigo que invites 1000</h3>
                    </div>
                </div>
            </div>

            <div className={style.store}>
                <h1>Conocé nuestro catálogo de productos</h1>
                <div>
                    <div>
                        <img className={style.products}src={product_a} alt='product_a'></img>
                        <div>
                            <span>3000</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                    <div>
                        <img className={style.products} src={product_c} alt='product_c'></img>
                        <div>
                            <span>7500</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                    <div>
                        <img className={style.products} src={product_b} alt='product_b'></img>
                        <div>
                            <span>14300</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                </div>
                <Link to='/tienda'><button>VER CATÁLOGO COMPLETO</button></Link>
            </div>

        </div>
    )
}