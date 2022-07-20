import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import styles from './PetDetail.module.css';
import * as data from "../../mocks/ListAnimalsMock/ListAnimalsMock.json";
import { getPetDetail } from '../../actions/index';



export default function PetDetail(props){
    /* let pet = {
        name: 'Bobby',
        img1: "https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg",
        img2: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc",
        img3: "https://dam.ngenespanol.com/wp-content/uploads/2019/02/gato-dia-internacional.png",
        img4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        fundation: "Fundacion Affinity",
        age: "2 años",
        sex: "Macho"

    } */
    const dispatch = useDispatch();

    const params = useParams()

    useEffect(()=>{
        dispatch(getPetDetail(params.nombreHuella))
    }, [dispatch])

    const pet = useSelector(state=>state.petDetail)
    console.log(pet)
    
    return(
        <div>
            
            <div className={styles.containerImg}>
                {pet.images?.map((e)=>{
                    return(
                        <img className={styles.img} src={e} alt="img1"/>
                    )
                })}
            </div> 
            <div className={styles.container}>
            <div className={styles.info}>
                <h1>Hola, soy {pet.name}!</h1>
                <p>{pet.description}</p>
            </div>
            <div className={styles.adopt}>
            <div>
                <button className={styles.button}>Salvas mi huella?</button>
            </div>
            <div className={styles.pet}>
                <p className={styles.petInfo}>Fundacion: <br></br>{pet.foundation_name}</p>
                <p className={styles.petInfo}>Edad:<br></br> {pet.age}</p>
                <p className={styles.petInfo}>Sexo:<br></br> {pet.genre}</p>
            </div>
            </div>
            </div>
        
        </div>
    )
}