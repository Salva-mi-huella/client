import React, {useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { filtersConfig, getFoundations } from '../../../redux/actions'
import style from '../Adopt.module.css'


export default function Location(){

    const dispatch = useDispatch()

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

    console.log(foundationXLocation)
   
    function handleChange(e){
        let city = e.target.value
        if(e.target.value === "null") city = null
        dispatch(filtersConfig({city}))
    }

    return(
        <select className={style.filterConfig}  defaultValue="Ubicación" onChange={(e)=>handleChange(e)} id="gender">
            <option disabled >Ubicación</option>
            <option value="null"> Todas </option>
            {foundationXLocation && foundationXLocation.map(foundation =>(
                <option key={foundation.name} value={foundation.name}>{foundation.city}</option>
            ))}
        </select>
    )
}