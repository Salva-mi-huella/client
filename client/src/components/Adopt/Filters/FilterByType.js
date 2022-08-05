import React, { useState }  from 'react'
import { useDispatch} from 'react-redux'
import { filtersConfig } from '../../../redux/actions'
import style from '../Adopt.module.css'


export default function FilterByType(){

    const dispatch = useDispatch()
    const [active , setActive] = useState('')
    
    function handleSelection(type){
        setActive(type)
        dispatch(filtersConfig({type}))    
    }
    
    return(
        <div >
            <input className={style.btnFilterType} onClick={()=>handleSelection(null)} type="submit" value="Todos"/>
            <input className={`${style.btnFilterType} ${active==="Gato" ? style.active : null}` }  onClick={()=>handleSelection("Gato")} type="submit" value="Gatos"/>
            <input className={`${style.btnFilterType} ${active==="Perro" ? style.active : null}` } onClick={()=>handleSelection("Perro")} type="submit" value="Perros"/>
        </div>
    )
}
