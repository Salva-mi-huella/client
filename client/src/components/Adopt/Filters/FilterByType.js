import React  from 'react'
import { useDispatch} from 'react-redux'
import { filtersConfig } from '../../../redux/actions'
import style from '../Adopt.module.css'


export default function FilterByType(){

    const dispatch = useDispatch()
    
    function handleSelection(type){
        dispatch(filtersConfig({type})) //type: perro
    }
    
    return(
        <div >
            <input className={style.btnFilterType} onClick={()=>handleSelection(null)} type="submit" value="Todos"/>
            <input className={style.btnFilterType} onClick={()=>handleSelection("Gato")} type="submit" value="Gatos"/>
            <input className={style.btnFilterType} onClick={()=>handleSelection("Perro")} type="submit" value="Perros"/>
        </div>
    )
}
