import React from 'react'
import banner from '../../assets/adoptBanner.png'


export default function Adopt(){
    return (
        <>
            <div>
                <img src={banner}/>
            </div>
            <div>
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
            <div>
                <h2>Conoce nuestras Huellas</h2>
                <div>
                    <div>
                        <input type="submit" value="Todos"/>
                        <input type="submit" value="Gatos"/>
                        <input type="submit" value="Perros"/>
                    </div>
                    <div>
                        <h5>Filtrar por</h5>
                        <select id="foundation">
                            {/* Traer de DB */}
                            <option value="ej-1">patitas</option>
                            <option value="ej-2">garritas</option>
                        </select>
                        <select id="gender">
                            {/* Traer de DB */}
                            <option value="male">Macho</option>
                            <option value="female">Hembra</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                {/* Cards de los gatos */}
            </div>
        </>
    )
}