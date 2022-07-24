import React from 'react';
import style from './NotFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound () {
    return ( 
        <div className={style.container}>
            <Link className={style.link} to="/home">
                <button className={style.btn}>Inicio</button>
            </Link>
        </div>
     );
}

