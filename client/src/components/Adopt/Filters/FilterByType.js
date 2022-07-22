import React  from 'react'
import { useDispatch} from 'react-redux'
import { filtersConfig } from '../../../actions'


export default function FilterByType(){

    const dispatch = useDispatch()
    
    function handleSelection(type){
        dispatch(filtersConfig({type}))
    }
    
    return(
        <div>
            <input onClick={()=>handleSelection(null)} type="submit" value="Todos"/>
            <input onClick={()=>handleSelection("Gato")} type="submit" value="Gatos"/>
            <input onClick={()=>handleSelection("Perro")} type="submit" value="Perros"/>
        </div>
    )
}
