import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsFiltered } from "../../../redux/actions";
import style from '../Adopt.module.css'



export default function Paginate(){
    
    const dispatch = useDispatch()
    
    const {filtered} = useSelector(state => state.petsFiltered)
    
    // Setup number of rendering pages
    let pagesUI = []
    if(filtered){
        let totalPages = filtered.length / 12 
        for (let i = 1; i <= totalPages; i++) {
            pagesUI.push(i)
          }
    }
    function handleSelect(e){
        let page = e.target.value
        let firstIndex = (page * 12) - 12
        let lastIndex = (page * 12)

        let renderPage = filtered.slice(firstIndex, lastIndex)
        dispatch(petsFiltered(filtered,renderPage))
    }

    return(
        <>
            {pagesUI.length > 1 && 
            <ul>
                <li className={style.arrow}>
                    <i className="fa-solid fa-circle-left" ></i>
                </li>
                {
                    pagesUI.map(n=>(
                        <li key={n} className={style.pages} onClick={e => handleSelect(e)} value={n} >{n}</li>
                    ))
                }
                <li className={style.arrow}>
                    <i className="fa-solid fa-circle-right"></i>
                </li>
            </ul>
            }
        </>
    )
}