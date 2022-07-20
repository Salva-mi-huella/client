import React, { useEffect } from 'react'
import Card from './Card.js'
import banner from '../../assets/adoptBanner.png'
import {  useDispatch, useSelector } from 'react-redux';
import style from './Adopt.module.css'
import { getAllPets, getFoundations } from '../../actions/index.js';
import FilterByType from './Filters/FilterByType.js';


export default function Adopt(){
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllPets())
        dispatch(getFoundations())
    },[dispatch])
    
    const arrAllPets = useSelector(state=> state.allPets )
    const arrFoundationsnames = useSelector(state=> state.foundations).map(foundantions => foundantions.name)

    return (
        <>
            <div className={style.banner}>
                {/* Cambiar esta imagen */}
                <img src={banner} alt="Banner of animals"/>
            </div>
            <div className={style.containerFunction}>
                <div>
                    <h3>¿Cómo funciona?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Illum modi repudiandae,eligendi ipsum, quod  Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <div>
                    <h3>¿Cómo funciona?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Illum modi repudiandae,eligendi ipsum, quod  Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
            <div className={style.allAnimals}>
            <h2>Conoce nuestras Huellas</h2>
                <div className={style.allAnimals__filters}>
                    <FilterByType/>
                    <div className={style.filtersBy}>
                        <h5>Filtrar por</h5>
                        <select id="foundation">
                            Traer de DB
                            {arrFoundationsnames ?
                                arrFoundationsnames.map(name=>(
                                    <option value={name}>{name}</option>
                                )):
                                <option>Foundations</option>}
                        </select>
                        <select id="gender">
                            <option value="male">Macho</option>
                            <option value="female">Hembra</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={style.cardContainer}>
                {arrAllPets ?
                    arrAllPets.map(pet => (
                        <Card 
                        name={pet.name}
                        img={pet.images} 
                        id={pet.id}
                        />
                    ))
                    :
                    //Add loading component
                    <h3>Cargando..</h3>
                }
            </div>
        </>
    )
}