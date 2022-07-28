import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsFiltered } from "../../../redux/actions";


export default function Paginate(){
    
    const dispatch = useDispatch()
    
    const {filtered} = useSelector(state => state.petsFiltered)
    const arrAllPets = useSelector(state=> state.allPets )
    const [actualPage, setActualPage] = useState(1)
    const [firstIndex, setFirstIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(12)
    
    // useEffect(()=>{
    //     if(filtered){
    //         let renderPage = filtered.slice(firstIndex, lastIndex)
    //         dispatch(petsFiltered(filtered,renderPage))
    //     }
        
    // },[dispatch])
    


    // Setup number of rendering pages
    let pagesUI = []
    let pets = filtered || arrAllPets 
    if(arrAllPets){
        let totalPages = pets.length / 12 
        for (let i = 1; i <= totalPages; i++) {
            pagesUI.push(i)
          }
    }
    function handleSelect(e){
        let page = e.target.value
        setActualPage(page)
        let firstIndex = (page * 12) - 12
        setFirstIndex(firstIndex)
        let lastIndex = (page * 12)
        setLastIndex(lastIndex)

        let renderPage = pets.slice(firstIndex, lastIndex)
        dispatch(petsFiltered(pets,renderPage))
        console.log(firstIndex, lastIndex)
    }

    return(
        <>
            <ul>
                {pagesUI.length &&
                    pagesUI.map(n=>(
                        //Revisar si esta bien usar LI
                        <li key={n} onClick={e => handleSelect(e)} value={n} >{n}</li>
                    ))
                }
            </ul>
        </>
    )
}