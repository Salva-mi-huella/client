import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { filtersConfig, getFoundations } from '../../../redux/actions'
import style from '../Adopt.module.css'


export default function FilterByLocation(){

    const dispatch = useDispatch()
    const [active,setActive] = useState(false)

    useEffect(()=>{
        dispatch(getFoundations())
    },[dispatch])
    
    const foundation = useSelector(state=> state.foundations)

    let foundationXLocation = []

    foundation.forEach(element => {
        foundationXLocation.push({
            name: element.name,
            city: element.city})
    });

   
    function handleChange(e){
        let city = e.target.value
        if(e.target.value === "null") {
            setActive(false)
            city = null}
        else setActive(true)
        dispatch(filtersConfig({city}))
    }

    return(
        <select className={` ${style.filterConfig} ${active ? style.active : null}`}  defaultValue="Ubicación" onChange={(e)=>handleChange(e)} id="gender">
            <option disabled >Ubicación</option>
            <option value="null"> Todas </option>
            {foundationXLocation && foundationXLocation.map(foundation =>(
                <option key={foundation.name} value={foundation.name}>{foundation.city}</option>
            ))}
        </select>
    )
}