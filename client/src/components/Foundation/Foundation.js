import React, { useEffect } from 'react';
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
import Footer from '../Footer/Footer.js'


export default function Foundation () {

    const dispatch = useDispatch();
    const params = useParams();
    const foundation = useSelector(state => state.foundationDetail)

    const description = foundation?.description?.split('.')
    description?.pop()

    useEffect(() => { 
        dispatch(getFoundationDetail(params.foundationId))
        window.scrollTo(0, 0);
     }, [dispatch, params.foundationId])


    return (  

       foundation.id === parseInt(params.foundationId) && <div >

            <div className={styles.containerInfo}>
                    <div className={styles.namePicture}>
                        <h1>{foundation.name}</h1>
                        <img className={styles.foundationImage} src={foundation.images[0]} alt='foundation'></img>
                    </div>

                    <div className={styles.description}>
                        <div>
                            <h3>¿Quienes somos?</h3>
                            {description.length>0 && description.map(d =>
                            <p>{`${d}.`}</p>
                            )}
                        </div>
                    </div>
            </div>

             <div className={styles.containerDonate}>
                <div>
                    <h2>Dejá tu huella</h2>
                    <img src={heart_paw} alt="heart-paw"></img>

                </div>
                    <p>Nuestro trabajo sería imposible sin el aporte voluntario de innumerables personas que día a día nos apoyan en esta causa con sus donaciones. Creemos que la mejor manera que existe de cambiar la realidad de nuestras huellas, es trabajando en conjunto con vos. <br></br><br></br>¿Nos ayudás a ayudarlos?
                    </p>

                  <Link to='/donar'><button>Quiero ayudar</button></Link>
            </div>

            <div className={styles.containerPets}>
                <div className={styles.subPets}>
                    <h2>Nuestras huellas</h2>
                </div>
                {/* <Aside/> */}
                <PetSlick foundation={foundation}/>
            </div>


                    <div className={styles.data}>
                            <div >
                                <img src={foundation.images[0]} alt='foundationImage'></img><h3>{foundation.name}</h3>
                            </div>

                            <div >
                             <h3>Teléfono:</h3><p>{foundation.telephone_number}</p> 
                            </div>

                            <div>
                               <p>{`${foundation.address}, ${foundation.city}, ${foundation.state}.`}</p>
                            </div>


                            <div>
                                {foundation.email &&
                                <div>
                                    <a href={`mailto:${foundation.email}`}><img className={styles.icons} src={email} alt='email'></img></a>
                                </div>}
                                {foundation.website &&
                                <div>
                                <a href={foundation.website} target="_blank" rel='noreferrer'><img  className={styles.icons} src={web} alt='web'></img></a>
                                </div>}

                                {foundation.instagram &&
                                <div>
                                <a href={foundation.instagram} target="_blank" rel='noreferrer'><img  className={styles.icons} src={instagram} alt='web'></img></a>
                                </div>}
                            </div>

                    </div>
                
                    <div className={styles.containerContact}>
                        <GoogleMaps foundation={foundation} lat={foundation.lat} lng={foundation.lng} />
                        <div>

                        <Form foundationId={foundation.id}></Form>
                            
                        </div>

                    </div>

                    <Footer/>
        </div>
    )
}




