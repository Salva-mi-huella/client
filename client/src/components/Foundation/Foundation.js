import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFoundationDetail } from '../../redux/actions/index';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import PetSlick from './PetsSlick';
import styles from './Foundation.module.css'
import heart_paw from '../../assets/heart_paw.png'
import instagram from '../../assets/instagram.png';
import email from '../../assets/email-2.png';
import web from '../../assets/web (2).png';
import Form from './PostMessage/Form';


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
                        <div>
                            <h3>¿Quienes somos?</h3>
                            <p>{foundation.description}</p>
                        </div>
                    </div>
            </div>

             <div className={styles.containerDonate}>
                <div>
                    {/* <img src={heart_paw} alt="heart-paw"></img> */}
                    <h2>Dejá tu huella</h2>
                    <img src={heart_paw} alt="heart-paw"></img>

                </div>
                    <p>Nuestro trabajo sería imposible sin el aporte voluntario de innumerables personas que día a día nos apoyan en esta causa con sus donaciones. Creemos que la mejor manera que existe de cambiar la realidad de nuestras huellas, es trabajando en conjunto con vos. <br></br><br></br>¿Nos ayudás a ayudarlos?
                    </p>

                  <Link to='/donar'><button className={styles.donar}>Quiero ayudar</button></Link>
            </div>

            <div className={styles.containerPets}>
                <div className={styles.subPets}>
                    <h2>Nuestras huellas</h2>
                    <p>En este apartado va una breve descripción para captar atención. </p>
                </div>
                <PetSlick foundation={foundation}/>
            </div>

                    <div className={styles.containerContact}>
                        <GoogleMaps foundation={foundation} lat={foundation.lat} lng={foundation.lng} />
                        <div>
                            <h2 className={styles.title}>Contactanos</h2>
                            <div className={styles.data}>
                             <h3>Teléfono:</h3><p>{foundation.telephone_number}</p> 
                            </div>
                            <div className={styles.data}>
                                <h3>Ubicación:</h3><p>{`${foundation.address}, ${foundation.city}, ${foundation.state}.`}</p>
                            </div>

                            <div className={styles.iconsContainer}>
                            {foundation.website  && <a href={foundation.website} target="_blank" rel='noreferrer'><img  className={styles.icons} src={web} alt='web'></img></a>}
                            {foundation.instagram && <a href={foundation.instagram} target="_blank" rel='noreferrer'><img  className={styles.icons} src={instagram} alt='instagram'></img></a>}
                            {foundation.email && <a href={`mailto:${foundation.email}`}><img className={styles.icons} src={email} alt='email'></img></a>}
                            </div>

                        <Form foundationId={foundation.id}></Form>
                            
                        </div>

                    </div>
    
        </div>
    )
}




