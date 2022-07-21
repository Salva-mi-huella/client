import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtersConfig, getFoundations } from '../../../actions'


export default function FilterByFoundation(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFoundations())
    },[dispatch])
    
    const arrFoundationsnames = useSelector(state=> state.foundations).map(foundantions => foundantions.name)

    
    function handleChange(e){
        let foundation = e.target.value
        if(e.target.value === "null") foundation = null
        dispatch(filtersConfig({foundation}))
    }

    return(
        <select onChange={(e)=>handleChange(e)}id="foundation">
            <option value={"null"}>Refugio</option>

            {arrFoundationsnames &&
            arrFoundationsnames.map(name=>(
                <option key={name} value={name}>{name}</option>)
            )}
        </select>
    )
}