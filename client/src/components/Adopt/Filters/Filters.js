import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import FilterByFoundation from "./FilterByFoundation";
import FilterByGender from "./FilterByGender";
import FilterByLocation from "./FilterByLocation";
import FilterByType from "./FilterByType";
import SearchBar from "./SearchBar";
import style from '../Adopt.module.css'
import { filtersConfig, getAllPets, petsFiltered } from "../../../redux/actions";



export default function Filters(){
    
    const dispatch = useDispatch()
        
    useEffect(()=>{
        dispatch(getAllPets())
    },[dispatch])

    const arrAllPets = useSelector(state=> state.allPets )
    const filters = useSelector(state=> state.filtersConfig )

    //In case browser reload
    useEffect(()=>{
        return function clean(){
            dispatch(filtersConfig({type:null,foundation:null,gender:null }))}
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
        
        dispatch(petsFiltered(filteringPets)) 
        
    },[filters,arrAllPets])
    return(
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
                    <FilterByLocation/>
                </div>
            </div>
    </div>
</div>
    )
}