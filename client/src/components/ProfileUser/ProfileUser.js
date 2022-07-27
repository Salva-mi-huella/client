import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PersistentDrawerLeft from "./Drawer";
import styles from "./ProfileUser.module.css";

export default function ProfileUser() {
    const {user, isLoading} = useAuth0();
    
    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <PersistentDrawerLeft />
        </div>
/*         <div>
            <div>
            <div className={styles.dataContainer}>
                <button className={styles.button}>Editar datos ✎</button>
                <h1 className={styles.myData}>Mis Datos</h1>
                <div className={styles.data}>
                    <div>
                        <img className={styles.photo} src={user.picture}></img>
                    </div>
                    <div className={styles.Info}>
                        <p>Nombre: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Telefono: +54 9 ----------</p>
                        <p>Direccion: --------------</p>
                        <p>Fecha de nacimiento: dd/mm/aaaa</p>
                    </div>
                </div>
            </div>
            <h1>Mis donaciones</h1>
            
        </div>
        </div> */
    )
}