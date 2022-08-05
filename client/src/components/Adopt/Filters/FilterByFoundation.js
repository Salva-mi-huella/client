import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtersConfig, getFoundations } from '../../../redux/actions'
import style from '../Adopt.module.css'


export default function FilterByFoundation(){

    const dispatch = useDispatch()
    const [active,setActive] = useState(false)

    useEffect(()=>{
        dispatch(getFoundations())
    },[dispatch])
    
    const arrFoundationsnames = useSelector(state=> state.foundations).map(foundantions => foundantions.name)

    
    function handleChange(e){
        let foundation = e.target.value
        if(e.target.value === "null") {
            setActive(false)
            foundation = null
        }else setActive(true)
        dispatch(filtersConfig({foundation}))
    }

    return(
        <select className={` ${style.filterConfig} ${active ? style.active : null}`} defaultValue="Fundación" onChange={(e)=>handleChange(e)} id="foundation">
            <option disabled >Fundación</option>
            <option value={"null"}> Todas </option>
            {arrFoundationsnames &&
            arrFoundationsnames.map(name=>(
                <option key={name} value={name}>{name}</option>)
            )}
        </select>
    )
}