import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
import paw from '../../assets/paw.png';
import { useAuth0 } from '@auth0/auth0-react';


export default function NavBar() {

   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
            <nav className={styles.nav}>
                 <div>
                    <Link to='/home'><img className={styles.logo} src={logo} alt='logo'></img></Link> 
                 </div>
                 <div className={styles.navCenter}>
                    <Link className={styles.link} to='/adoptar'><h4>Adoptar</h4></Link>
                    <Link className={styles.link} to='/donaciones'><h4>Donar</h4></Link>
                    <Link className={styles.link} to='/noticias'> <h4>Noticias</h4></Link>
                    <Link className={styles.link} to='/nosotros'><h4>Sobre Nosotros</h4></Link>
                </div>

                <div className={styles.navCenter}>
                { isAuthenticated ? 
                        <div className={styles.profile}>
                          <Link to='/perfil'><img  className={styles.icons} src={profile} alt='profile'></img> </Link>
                            <img  className={styles.icons} src={paw} alt='paw'></img>
                          <button onClick={()=>logout({returnTo:'http://localhost:3000/home'})}>Cerrar sesión</button> 
                        </div>
                      : 
                      <div className={styles.signUp}>
                        <button onClick={() => loginWithRedirect()}  >INICIAR SESIÓN </button> 
                        <span> | </span>
                        <button onClick={() => loginWithRedirect()} >REGISTRARSE</button>
                      </div>}
                </div>
            </nav>
            
       )
 }