import React, { useEffect, useState } from 'react'
import Card from './Card.js'
import banner from '../../assets/banneradopt.png'
import steps from '../../assets/adoptSteps.png'
import {  useDispatch, useSelector } from 'react-redux';
import style from './Adopt.module.css'
import { filtersConfig } from '../../redux/actions'
import { getAllPets } from '../../redux/actions/index.js';
import FilterByType from './Filters/FilterByType.js';
import FilterByFoundation from './Filters/FilterByFoundation.js';
import FilterByGender from './Filters/FilterByGender.js';
import SearchBar from './Filters/SearchBar.js';
import Location from './Filters/Location.js';


export default function Adopt(){
    
    const dispatch = useDispatch()
    const [filteredPets, setFilteredPets] = useState(null)
    
    useEffect(()=>{
        dispatch(getAllPets())
    },[dispatch])

    const arrAllPets = useSelector(state=> state.allPets )
    const filters = useSelector(state=> state.filtersConfig )

    //In case page is reload
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
        if(filters.city){
            filteringPets = filteringPets.filter(pet => pet.foundation.name === filters.city)
        }
        if(filters.name){
            filteringPets = filteringPets.filter(pet => (pet.name).toLowerCase().includes((filters.name).toLowerCase()))
        }
        if(!filteringPets.length && arrAllPets.length && !filters.name) alert("No hay animales en adopcion con esas caracteristicas")
        setFilteredPets(filteringPets)
        
    },[filters,arrAllPets])


    return (
        <>
            <div className={style.banner}>
                <h1 className={style.sectionTitle}>Adoptá</h1>
                <p >En este espacio va un eslogan para captar la atención</p>
                <img src={banner} alt="Banner of animals"/>
            </div>
            <div className={style.containerFunctionality}>
                <h2 className={style.innerTittles}>¿Cómo funciona?</h2>
                <div className={style.containerSteps} >
                    <div>
                        <div className={style.functionalitySteps}>
                            <span>-Paso 1-</span>
                            <p>Lo primero que debes hacer es elegir aquel animal que más se adapte a tus necesidades,
                                para ello tendras distintos filtros disponibles que te ayudarán a tomar la decision.
                            </p>
                        </div>
                        <div className={style.functionalitySteps}>
                            <span>-Paso 2-</span>
                            <p> Una vez elegido dicho animal tendras que presionar el boton "Salva mi huella",
                                de esta manera podras ponerte en contacto con la fundación que tenga la posesión del animal
                                para coordinar la entrega.
                            </p>
                        </div>
                    </div>
                    <img id={style.steps} src={steps} alt="steps"/>
                </div>
            </div>
            <h2 className={style.innerTittles} >Conoce nuestras Huellas</h2>
            <div className={style.allAnimals}>
                <div className={style.allAnimals__filters}>
                        <FilterByType/>
                        <SearchBar/>
                        <div className={style.containerToggle}>
                            <div className={style.filterIcon}>
                                <i className="fa-solid fa-filter"></i>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <div className={style.containerFiltersBy}>
                                <div className={style.filtersBy}>
                                    <FilterByFoundation/>
                                    <FilterByGender/>
                                    <Location/>
                                </div>
                            </div>
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