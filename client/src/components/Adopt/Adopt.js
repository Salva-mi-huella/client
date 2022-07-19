import React from 'react'
import Card from './Card.js'
import banner from '../../assets/adoptBanner.png'
import style from './Adopt.module.css'


export default function Adopt(){
    return (
        <>
            <div className={style.banner}>
                {/* Deberiamos cambiarla por una PNG */}
                <img src={banner} alt="Banner of animals"/>
            </div>
            <div className={style.containerFunction}>
                <div>
                    <h3>¿Cómo funciona?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Illum modi repudiandae,eligendi ipsum, quod  Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <div>
                    <h3>¿Cómo funciona?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Illum modi repudiandae,eligendi ipsum, quod  Lorem ipsum 
                        dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
            <div className={style.allAnimals}>
            <h2>Conoce nuestras Huellas</h2>
                <div className={style.allAnimals__filters}>
                    <div>
                        <input type="submit" value="Todos"/>
                        <input type="submit" value="Gatos"/>
                        <input type="submit" value="Perros"/>
                    </div>
                    <div className={style.filtersBy}>
                        <h5>Filtrar por</h5>
                        <select id="foundation">
                            {/* Traer de DB */}
                            <option value="ej-1">patitas</option>
                            <option value="ej-2">garritas</option>
                        </select>
                        <select id="gender">
                            <option value="male">Macho</option>
                            <option value="female">Hembra</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={style.cardContainer}>
                <Card/>
            </div>
        </>
    )
}