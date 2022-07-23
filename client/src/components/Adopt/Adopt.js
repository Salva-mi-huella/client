import React, { useEffect, useState } from 'react'
import Card from './Card.js'
import banner from '../../assets/adoptBanner.png'
import {  useDispatch, useSelector } from 'react-redux';
import style from './Adopt.module.css'
import { filtersConfig } from '../../redux/actions'
import { getAllPets } from '../../redux/actions/index.js';
import FilterByType from './Filters/FilterByType.js';
import FilterByFoundation from './Filters/FilterByFoundation.js';
import FilterByGender from './Filters/FilterByGender.js';


export default function Adopt(){
    
    const dispatch = useDispatch()
    const [filteredPets, setFilteredPets] = useState(null)
    
    useEffect(()=>{
        dispatch(getAllPets())
    },[dispatch])

    const arrAllPets = useSelector(state=> state.allPets )
    const filters = useSelector(state=> state.filtersConfig )

    useEffect(()=>{
        return function clean(){
            dispatch(filtersConfig({type:null}))
            dispatch(filtersConfig({foundation:null}))
            dispatch(filtersConfig({gender:null}))
        }
    },[])


    useEffect(()=>{
        let filteringPets = arrAllPets

        if(filters.type ){
            filteringPets = filteringPets.filter(pet => pet.type === filters.type)
        }
        if(filters.foundation){
            filteringPets = filteringPets.filter(pet => pet.foundation.name === filters.foundation)
        }
        if(filters.gender){
            filteringPets = filteringPets.filter(pet => pet.gender === filters.gender)
        }
        if(!filteringPets.length && arrAllPets.length) alert("No hay animales en adopcion con esas caracteristicas")
        setFilteredPets(filteringPets)
        
    },[filters,arrAllPets])


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
                            <FilterByFoundation/>
                            <FilterByGender/>
                    </div>
                </div>
            </div>
            <div className={style.cardContainer}>
                {filteredPets ?
                    filteredPets.map(pet => (
                        <Card 
                        id={pet.id}
                        key= {pet.id}
                        name={pet.name}
                        img={pet.images} 
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