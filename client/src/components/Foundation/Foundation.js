import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFoundationDetail } from '../../actions/index';
import styles from './Foundation.module.css'
import paypal from '../../assets/paypal.png';
import foundationImage from '../../assets/fundacion.png';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import web from '../../assets/web.png';

let foundation = {
    name: 'Garritas a salvo',
    img: foundationImage,
    location: 'Caballito - CABA',
    email: 'garritasasalvo@hotmail.com',
    telephone_number: '011-15-15-1515',
    web: 'https://www.elcampitorefugio.org',
    instagram: 'https://www.instagram.com/garritasasalvo/',
    pets: [{name:'Jorgito', img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}, {name:'Matilda', img: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067'}, {name:'Norber', img: 'https://www.elcampitorefugio.org/imgs/uploaded/Slide_820640.jpg'}]
}


export function Foundation () {
    const [input, setInput] = useState({
        amount: 0,
    })

    const dispatch = useDispatch();
    // const foundation = useSelector(state => state.foundationDetail)

    useEffect(() => { 
        // const id = this.props.match.params.foundationId
        // dispatch(getFoundationDetail(id))
     }, [])

     const handleOnChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
       }

    return (  
        <div className={styles.container}>

            <div className={styles.containerContact}>
                <div>
                    <h1>{foundation.name}</h1>
                    {foundation.web.length && <a href={foundation.web} target="_blank" rel='noreferrer'><img  className={styles.icons} src={web} alt='web'></img></a>}
                    {foundation.instagram.length && <a href={foundation.instagram} target="_blank" rel='noreferrer'><img  className={styles.icons} src={instagram} alt='instagram'></img></a>}
                    {foundation.email.length && <a href={`mailto:${foundation.email}`}><img className={styles.icons} src={email} alt='email'></img></a>}
                    <div>
                        <h3>Ubicación:</h3><p>{foundation.location}</p>
                    </div>
                    <div>
                        <h3>Teléfono:</h3><p>{foundation.telephone_number}</p>
                    </div>
                </div>
                <img className={styles.foundationImage} src={foundation.img} alt='foundation'></img>
            </div>

            <div className={styles.containerDonate}>
                <h2>Nos das una patita?</h2>
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
                </div>
            </div>

            <div className={styles.containerPets}>
                <h2>Nuestras huellas</h2>
                <div  className={styles.subcontainerPets}>
                {foundation.pets.map(pet => (
                    <div>
                        <Link to={`/huella/${pet.id}`} ><img className={styles.petImage} src={pet.img} alt='pet'></img></Link>
                        <h3>{pet.name}</h3>
                    </div>
                ))}
                </div>
            </div>


    
        </div>
    )
}




