import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsFiltered } from "../../../redux/actions";
import style from '../Adopt.module.css'



export default function Paginate(){
    
    const dispatch = useDispatch()
    
    const {filtered} = useSelector(state => state.petsFiltered)
    let [actualPage, setActualPage] = useState(1)
    
    useEffect(()=>{
        if(filtered){
            let firstIndex = (actualPage * 12) - 12
            let lastIndex = (actualPage * 12)
            let renderPage = filtered.slice(firstIndex, lastIndex)
            dispatch(petsFiltered(filtered,renderPage))
        }
    },[actualPage])
    // Setup number of rendering pages
    let pagesUI = []
    if(filtered){
        let totalPages = Math.ceil(filtered.length / 12 )
        for (let i = 1; i <= totalPages; i++) {
            pagesUI.push(i)
          }
    }
    function handleSelect(e){
        setActualPage(e.target.value)
    }
    function handleArrow(direction){
        if(direction === "left")  setActualPage(actualPage -1)
        else setActualPage(actualPage +1)
    }

    return(
        <>
            {pagesUI.length > 1 && 
            <ul>
                {
                    actualPage !== 1 && 
                        <li onClick={() => handleArrow("left")} className={style.arrow}>
                            <i className="fa-solid fa-circle-left" ></i>
                        </li>
                }
                {
                    pagesUI.map(n=>(
                        <li key={n} className={style.pages} onClick={e => handleSelect(e)} value={n} >{n}</li>
                    ))
                }
                {
                    pagesUI.length !== actualPage && 
                    <li onClick={() => handleArrow("right")} className={style.arrow}>
                        <i className="fa-solid fa-circle-right"></i>
                    </li>

                }
            </ul>
            }
        </>
    )
}