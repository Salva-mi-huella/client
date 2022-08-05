import React, { useState } from 'react'
import { useDispatch,  } from 'react-redux'
import { filtersConfig } from '../../../redux/actions'
import style from '../Adopt.module.css'


export default function FilterByGender(){

    const dispatch = useDispatch()
    const [active,setActive] = useState(false)

    function handleChange(e){
        let gender = e.target.value
        if(e.target.value === "null") {
            setActive(false)
            gender = null
        }else setActive(true)
        dispatch(filtersConfig({gender}))
    }

    return(
        <select className={`${style.filterConfig} ${active ? style.active : null}`}  defaultValue="Sexo" onChange={(e)=>handleChange(e)} id="gender">
            <option disabled >Sexo</option>
            <option value="null"> Todos </option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
        </select>
    )
}