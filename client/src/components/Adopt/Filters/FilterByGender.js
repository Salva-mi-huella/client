import React ,{useEffect}from 'react'
import { useDispatch,  } from 'react-redux'
import { filtersConfig } from '../../../actions'


export default function FilterByGender(){

    const dispatch = useDispatch()
    
    function handleChange(e){
        let gender = e.target.value
        if(e.target.value === "null") gender = null
        dispatch(filtersConfig({gender}))
    }

    return(
        <select defaultValue="Sexo" onChange={(e)=>handleChange(e)} id="gender">
            <option disabled >Sexo</option>
            <option value="null"> Todos </option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
        </select>
    )
}