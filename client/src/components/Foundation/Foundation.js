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
import * as data from "../../mocks/ListFundationMock/ListFundationMock.json";


let foundationHardCoded = {
    pets: [{name:'Jorgito', img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}, {name:'Matilda', img: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067'}, {name:'Norber', img: 'https://www.elcampitorefugio.org/imgs/uploaded/Slide_820640.jpg'}]
}


export function Foundation () {
    const [input, setInput] = useState({
        amount: 0,
    })

    const dispatch = useDispatch();
    const foundation = useSelector(state => state.foundationDetail)

    useEffect(() => { 
        // const id = this.props.match.params.foundationId
        dispatch(getFoundationDetail('d375e472-2f7c-4bd6-94c5-42fe3083d39a'))
     }, [])

     const handleOnChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
       }

       console.log('hola', foundation)


    return (  

       foundation.length>0 && <div className={styles.container}>

            <div className={styles.containerContact}>
                <div>
                    <h1>{foundation[0].name}</h1>
                    <div>
                        <h3>Ubicación:</h3><p>{foundation[0].location}</p>
                    </div>
                    <div>
                        <h3>Teléfono:</h3><p>{foundation[0].telephone_number}</p>
                    </div>
                    {foundation[0].web.length && <a href={foundation[0].web} target="_blank" rel='noreferrer'><img  className={styles.icons} src={web} alt='web'></img></a>}
                    {foundation[0].instagram.length && <a href={foundation[0].instagram} target="_blank" rel='noreferrer'><img  className={styles.icons} src={instagram} alt='instagram'></img></a>}
                    {foundation[0].email.length && <a href={`mailto:${foundation[0].email}`}><img className={styles.icons} src={email} alt='email'></img></a>}
                </div>
                <img className={styles.foundationImage} src={foundation[0].img} alt='foundation'></img>
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
                    <button>Donar</button>
                </div>
            </div>

            <div className={styles.containerPets}>
                <h2>Nuestras huellas</h2>
                <div  className={styles.subcontainerPets}>
                {foundationHardCoded.pets.map(pet => (
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




