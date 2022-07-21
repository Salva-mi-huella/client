import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';


export default function Profile() {

    const { user } = useAuth0();
    
    return (
            <div>
                <div className={styles.info}>
                    <h2> Bienvenido {user.name}!</h2>
                    <div className={styles.box}>
                    <img src={user.picture} alt='profile'></img>
                    <div className={styles.nameLast}>
                    <div>
                    <h5>Nombre: {user.given_name}</h5>
                    <h5>Correo: {user.email}</h5>
                    <h5>Direccion:</h5>
                    <h5>Celular:</h5>
                    <h5>Animales adoptados:</h5>
                    </div>
                    <div>
                    <h5>Apellido: {user.family_name ? user.family_name : "Sin apellido"}</h5>
                    <h5>Apodo: {user.nickname}</h5>
                    <h5>DNI:</h5>
                    <h5>Puntos:</h5>
                    </div>
                    </div>
                    </div>
                    <Link to='/home'><button className={styles.returnPage}>Volver a pagina principal</button></Link>
                </div>
            </div>
    )
}