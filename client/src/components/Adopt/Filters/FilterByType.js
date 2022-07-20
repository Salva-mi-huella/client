import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtersConfig } from '../../../actions'


export default function FilterByType(){

    const dispatch = useDispatch()
    const arrAllPets = useSelector(state=> state.allPets )
    const config = useSelector(state=> state.filtersConfig )

    
    function handleSelection(type){
        dispatch(filtersConfig({type}))
        let newRender = arrAllPets.filter(pet =>{
            
        })

    }
    
    return(
        <div>
            <input onClick={()=>handleSelection("all")} type="submit" value="Todos"/>
            <input onClick={()=>handleSelection("cat")} type="submit" value="Gatos"/>
            <input onClick={()=>handleSelection("dog")} type="submit" value="Perros"/>
        </div>
    )
}
