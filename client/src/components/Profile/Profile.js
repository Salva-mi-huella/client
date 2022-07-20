import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Profile.module.css';

export default function Profile() {

   const { user } = useAuth0();

    return (
            <div>
                <div className={styles.info}>
                    <h1> Bienvenido {user.name}!</h1>
                    <img src={user.picture} alt='profile'></img>
                </div>
            </div>
    )
}