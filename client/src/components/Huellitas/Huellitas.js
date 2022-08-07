import React, { useEffect } from 'react'
import style from './Huellitas.module.css'
import banner from '../../assets/banner-huellitas-3.png'
import { useAuth0 } from '@auth0/auth0-react';
import paw from '../../assets/paw-print.png'
import { Link } from 'react-router-dom';
import register from '../../assets/user-checked.png'
import rescued from '../../assets/animal-care.png'
import Footer from '../Footer/Footer'



export default function Huellitas(){

   const { loginWithRedirect, isAuthenticated } = useAuth0();

   useEffect(() => {
        window.scrollTo(0, 0);
   }, [])

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src={banner} alt="Banner of animals"/>
                <div>
                    <h1 className={style.sectionTitle}>Disfrutá de Huellitas</h1>
                    <p >Nuestro programa de beneficios donde más salvás, más ganás.</p>
                    {!isAuthenticated && <button onClick={()=>loginWithRedirect()}>REGISTRARSE</button>}
                </div>
            </div>
 
                <div className={style.subContainer}>

                    <div className={style.subInfoA}>
                            <h1>Por cada donación que hagas a nuestras fundaciones,<br></br>empezás a sumar huellitas para canjear por productos en nuestra tienda.</h1>

                            <div>
                                <h2>1$ equivalen a 5 huellitas</h2>
                                <img className={style.bigPaw} src={paw} alt='paw'></img>
                            </div>
                    </div>
                </div>

            <h1 className={style.title}>¿De qué otra manera podés empezar a sumar?</h1>
            <div className={style.section}>
                <div className={style.subTitles}>
                    <div>
                        <img className={style.pictureA}src={register} alt=''></img>
                        <h3>Por registrarte</h3>
                        <div className={style.points}>
                            <span>500</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                    <div>
                        <img className={style.pictureB}src={rescued} alt=''></img>
                        <h3>Por cada huella que salves</h3>
                        <div className={style.points}>
                            <span>2000</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                    {/* <div>
                        <img className={style.pictureC} src={refer} alt=''></img>
                        <h3>Por cada amigo que invites</h3>
                        <div className={style.points}>
                            <span>700</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className={style.store}>
                <h1>Conocé nuestro catálogo de productos</h1>
                <div>
                    <div>
                        <Link to='/tienda/22' > <img className={style.products}src="https://res.cloudinary.com/djasy7hxk/image/upload/v1659552637/Huellas_folder/2023bbdf2b9fe10ebc9c7fbbbb7e94ab_rgfyg8-removebg-preview_ti3lvk.png" alt='product_a'></img></Link>
                        <div>
                            <span>4070</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                    <div>
                        <Link to='/tienda/14' ><img className={style.products} src="https://res.cloudinary.com/djasy7hxk/image/upload/v1659544674/Huellas_folder/colchon-liso21-3018197b3f1c52563d15890266038627-640-0_ahetau-removebg-preview_pelypx.png" alt='product_c'></img></Link>
                        <div>
                            <span>10775</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                    <div>
                        <Link to='/tienda/21'><img className={style.products} src="https://res.cloudinary.com/djasy7hxk/image/upload/v1659552548/Huellas_folder/156157-1_g2rczl-removebg-preview_wlmg7t.png" alt='product_b'></img></Link>
                        <div>
                            <span>18610</span>
                            <img className={style.paw} src={paw} alt='paw'></img>
                        </div>
                    </div>
                </div>
                <Link to='/tienda'><button>VER CATÁLOGO COMPLETO</button></Link>
            </div>

            <Footer/>

        </div>
    )
}