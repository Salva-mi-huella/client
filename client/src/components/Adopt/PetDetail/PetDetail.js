import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams, Link} from 'react-router-dom';
import styles from './PetDetail.module.css';
import { getPetDetail } from '../../../redux/actions/index';
import Loading from '../../Loading/Loading';




export default function PetDetail(){


    const dispatch = useDispatch();

    const history = useHistory();

    const {id} = useParams()
    
    const pet = useSelector(state => state.petDetail);

    const [renderImg, setRenderImg] = useState("");

    useEffect(()=>{
        dispatch(getPetDetail(id));
        window.scrollTo(0, 0);
    }, [dispatch, id])


    useEffect(() => {
        pet.images && setRenderImg(pet.images[0]);
    }, [pet.images])

    const handleOnClick = (e) => {
        setRenderImg(e.target.src);
    }
    

    return(
            pet && pet.name ? 
                <div className={styles.containerDetail}>         
                        <div className={styles.containerImg}>
                            {
                                pet.images && pet.images.length > 0 &&
                                    <div className={styles.imgHigh}>
                                        <img src={renderImg} alt={pet.name} />
                                    </div>
                            }
                            {
                                pet.images && pet.images.length > 1 &&
                                    <div className={styles.images}>
                                        {
                                            pet.images.map(i => <img key={i} onClick={handleOnClick} className={styles.thumb} src={i} alt={pet.name} />)
                                        }
                                    </div>
                            }
                        </div>
                        <div className={styles.containerInfo}>
                            <div className={styles.infoTitle}>
                                <h2>Hola, <br></br>soy {pet.name}</h2>     
                                {/* <h2>soy {pet.name} !</h2> */}
                            </div>
                            <div className={styles.infoDesc}>
                                <p>{pet.description}</p>
                            </div>
                            <div className={styles.infoExtra}>
                                <div>
                                    <p className={styles.pTitle}>Fundación</p>
                                    {pet.foundation && pet.foundation.images.length > 0 && <Link to={`/fundacion/${pet.foundationId}`}><img src={pet.foundation.images[0]} alt={pet.name} /></Link>}
                                </div>
                                <div>
                                    <p className={styles.pTitle}>Edad</p>
                                    <p className={styles.pInfo}>{pet.age}</p>
                                </div>
                                <div>
                                    <p className={styles.pTitle}>Sexo</p>
                                    <p className={styles.pInfo}>{pet.gender}</p>
                                </div>
                            </div>
                            <div className={styles.btn}>
                                <button onClick={() => history.push("/formulario-adopcion")}>¿Salvás mi huella?</button>
                            </div>
                        </div> 
                    </div>
                : <div className={styles.contanierLoading}><Loading /></div>
    )

}