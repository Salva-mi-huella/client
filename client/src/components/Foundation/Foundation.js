import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFoundationDetail } from '../../redux/actions/index';
import styles from './Foundation.module.css'
import paypal from '../../assets/paypal.png';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import web from '../../assets/web.png';


export function Foundation () {
    const [input, setInput] = useState({
        amount: 0,
    })

    const dispatch = useDispatch();
    const params = useParams();
    const foundation = useSelector(state => state.foundationDetail)
    console.log(foundation)

    useEffect(() => { 
        console.log(params.foundationId)
        dispatch(getFoundationDetail(params.foundationId))
     }, [])


     const handleOnChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
       }


    return (  

       foundation.id == params.foundationId && <div className={styles.container}>

            <div className={styles.containerInfo}>
                    <div>
                        <h1>{foundation.name}</h1>
                        <img className={styles.foundationImage} src={foundation.images[0]} alt='foundation'></img>
                    </div>

                    <div>
                        <p>Desde 1996, somos una organización especializada en la ayuda  gatos abandonados y/o maltratados; una organización totalmente independiente que no recibe subvenciones de organismos oficiales, empresas ni partidos políticos. Practicamos el sacrificio cero, de...</p>
                    </div>
            </div>

            <div className={styles.containerPets}>
                <h2>Nuestras huellas</h2>
                <div  className={styles.subcontainerPets}>
                {foundation.pets.map(pet => (
                    <div key={pet.id}> 
                        <Link to={`/huella/${pet.name}`} ><img className={styles.petImage} src={pet.images[0]} alt='pet'></img></Link>
                        <h3>{pet.name}</h3>
                    </div>
                ))}
                </div>
            </div>

            <div className={styles.containerDonate}>
                <h2>Dejá tu huella</h2>
                <img className={styles.paypal} src={paypal} alt='paypal'></img>
                <div>
                    <button>$100</button>
                    <button>$200</button>
                    <button>$500</button>
                    <button>$1000</button>
                    <button>$2000</button>
                    <button>$5000</button>
                </div>
                <div>
                    <label>Otro importe:</label>
                    <input onChange={handleOnChange} name='amount' value={input.amount} type='number' placeholder='$0,00'></input>
                    <button>Donar</button>
                </div>
            </div>


                    <div className={styles.containerContact}>
                        <div>
                            <h3>Ubicación:</h3><p>{foundation.location}</p>
                        </div>
                        <div>
                            <h3>Teléfono:</h3><p>{foundation.telephone_number}</p>
                        </div>
                        {foundation.web  && <a href={foundation.web} target="_blank" rel='noreferrer'><img  className={styles.icons} src={web} alt='web'></img></a>}
                        {foundation.instagram && <a href={foundation.instagram} target="_blank" rel='noreferrer'><img  className={styles.icons} src={instagram} alt='instagram'></img></a>}
                        {foundation.email && <a href={`mailto:${foundation.email}`}><img className={styles.icons} src={email} alt='email'></img></a>}
                    </div>
    
        </div>
    )
}




