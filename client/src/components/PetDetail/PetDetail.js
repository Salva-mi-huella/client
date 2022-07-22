import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import styles from './PetDetail.module.css';
import * as data from "../../mocks/ListAnimalsMock/ListAnimalsMock.json";
import { getPetDetail } from '../../actions/index';



export default function PetDetail(props){

    const dispatch = useDispatch();

    const {id} = useParams()

    useEffect(()=>{
        dispatch(getPetDetail(id))
    }, [dispatch])

    const pet = useSelector(state=>state.petDetail)

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
                <p className={styles.petInfo}>Fundacion: <br></br>{pet.foundation?.name}</p>
                <p className={styles.petInfo}>Edad:<br></br> {pet.age}</p>
                <p className={styles.petInfo}>Sexo:<br></br> {pet.gender}</p>
            </div>
            </div>
            </div>
        
        </div>
    )
}