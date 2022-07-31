import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFoundationDetail } from '../../redux/actions/index';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import PetSlick from './PetsSlick';
import styles from './Foundation.module.css'
import paypal from '../../assets/paypal.png';
import mp from '../../assets/mercadopago.png';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email-2.png';
import web from '../../assets/web.png';


export default function Foundation () {
    // const [input, setInput] = useState({
    //     amount: 0,
    // })

    const dispatch = useDispatch();
    const params = useParams();
    const foundation = useSelector(state => state.foundationDetail)
    console.log(foundation)

    useEffect(() => { 
        dispatch(getFoundationDetail(params.foundationId))
     }, [])


    //  const handleOnChange = (e) => {
    //     setInput({...input, [e.target.name]: e.target.value})
    //    }


    return (  

       foundation.id == params.foundationId && <div >

            <div className={styles.containerInfo}>
                    <div className={styles.namePicture}>
                        <h1>{foundation.name}</h1>
                        <img className={styles.foundationImage} src={foundation.images[0]} alt='foundation'></img>
                    </div>

                    <div className={styles.description}>
                        <h3>¿Quienes somos?</h3>
                        <p>Desde 1996, somos una organización especializada en la ayuda  gatos abandonados y/o maltratados; una organización totalmente independiente que no recibe subvenciones de organismos oficiales, empresas ni partidos políticos. Practicamos el sacrificio cero, de...</p>
                    </div>
            </div>

            <div className={styles.containerPets}>
                <div className={styles.subPets}>
                    <h2>Nuestras huellas</h2>
                    <p>En este apartado va una breve descripción para captar atención. </p>
                </div>
                <PetSlick foundation={foundation}/>
            </div>

            <div className={styles.containerDonate}>
                <div>
                    <h2>Dejá tu huella</h2>
                    <p>¡Podés ayudarnos de muchas maneras!</p>
                    <div>
                        <img className={styles.paypal} src={paypal} alt='paypal'></img>
                        <img className={styles.paypal} src={mp} alt='paypal'></img>
                    </div>
                </div>

                <div className={styles.amounts}>
                    {/* <div> */}
                        <div>
                            <button>$100</button>
                            <button>$200</button>
                            <button>$500</button>
                        </div>
                        <div>
                            <button>$1000</button>
                            <button>$2000</button>
                            <button>$5000</button>
                        </div>
                    {/* </div> */}
                    <div>
                        <div>
                            <label>Otro importe:</label>
                            <input name='amount'  type='number' placeholder='$0,00'></input>
                        </div>
                        <Link to='/pago'><button className={styles.donar}>Donar</button></Link>
                    </div>
                </div>

            </div>


                    <h2 className={styles.titles}>Contactanos</h2>
                    <div className={styles.containerContact}>
                    
                            {/* <img className={styles.google} src={google} alt='google'></img> */}
                            <GoogleMaps foundation={foundation} lat={foundation.lat} lng={foundation.lng} />
                    
                
                        <div>
                            <div>
                             <h3>Teléfono:</h3><p>{foundation.telephone_number}</p> 
                            </div>
                            <div>
                                <h3>Ubicación:</h3><p>{`${foundation.address}, ${foundation.city}, ${foundation.state}.`}</p>
                            </div>

                            <div className={styles.iconsContainer}>
                            {foundation.website  && <a href={foundation.web} target="_blank" rel='noreferrer'><img  className={styles.icons} src={web} alt='web'></img></a>}
                            {foundation.instagram && <a href={foundation.instagram} target="_blank" rel='noreferrer'><img  className={styles.icons} src={instagram} alt='instagram'></img></a>}
                            {foundation.email && <a href={`mailto:${foundation.email}`}><img className={styles.icons} src={email} alt='email'></img></a>}
                            </div>
                        </div>

                    </div>
    
        </div>
    )
}




