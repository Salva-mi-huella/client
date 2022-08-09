import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
// import logo from '../../assets/logo.png'
import logo from '../../assets/yellow-paw.png'
import { Link } from 'react-router-dom';

import styles from '../Footer/Footer.module.css';
import { useAuth0 } from '@auth0/auth0-react';

import ProfileMenu from '../Profile/ProfileMenu';

import ig from '../../assets/instagram.png'
import mail from '../../assets/email-2.png'




export default function Footer() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();


  return (
    <>
      <div className={styles.background}>
        <CDBFooter className="shadow" >

          <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '100%' }}>

            <CDBBox display="flex" justifyContent="around" className="flex-wrap">

              <CDBBox className={styles.containerLogo}>
                <a href="/" className="d-flex align-items-center p-0 text-dark text-decoration-none">
                  <img className={styles.logo} alt="logo" src={logo} />
                  <div className={styles.mision}>
                    <span>Salva mi huella</span>
                  </div>
                </a>

                <p>
                  Nuestra misión es cambiar el destino no solo de muchos animales, sino también el tuyo. Este sitio propone conectar a tu futuro mejor amigo con vos. Sumate!
                </p>

                {/* MEDIA ICONS */}
                <CDBBox display="flex" className="mt-4 me-5 justify-content-center">

                  <div className={styles.iconContainer}>
                    <a href='mailto:salvamihuella.10@gmail.com' target="_blank" rel="noreferrer"><img src={mail} title="salvamihuella.10@gmail.com" className={styles.icons} alt='mail' ></img></a>
                    <a href="https://www.instagram.com/salva_mi_huella/" target="_blank" rel="noreferrer"><img src={ig} className={styles.icons} alt='ig' ></img></a>
                  </div>

                </CDBBox>



              </CDBBox>


              {/* CONTAINER INFO */}
              <CDBBox className={styles.containerInfo}>
                <p className="h4 mb-4" style={{ fontWeight: '700' }}>
                  Menu
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>

                  <div className={styles.links}>
                    <Link to='/adoptar'><button href="/adoptar">ADOPTA</button> <br /></Link>
                    <Link to='/donar'><button href="/donar">DONA</button> <br /></Link>
                    <Link to='/huellitas'><button href="/huellitas">HUELLITAS</button> <br /></Link>
                    <Link to='/tienda'><button href="/tienda">TIENDA</button> <br /></Link>
                  </div>

                </CDBBox>
              </CDBBox>



              {/* CONTAINER AYUDA */}
              <CDBBox className={styles.containerInfo}>
                <p className="h4 mb-4" style={{ fontWeight: '700' }}>
                  Ayuda
                </p>

                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>

                  <div className={styles.signUpContainer}>

                    <div className={styles.links}>
                      <Link to='/contacto'><button href="/contacto">FUNDACIONES</button> <br /></Link>
                      <Link to='/nosotros'><button href="/nosotros">SOBRE NOSOTROS</button> <br /></Link>
                      {/* <button href="/">SOPORTE</button> */}
                    </div>

                    {isAuthenticated ?
                      <div className={styles.links}>
                          <Link to='/perfil'><button>MI CUENTA</button></Link>
                      </div>
                      :
                      <div className={styles.links}>
                        <button onClick={() => loginWithRedirect()} >INGRESAR </button>
                      </div>}
                  </div>

                </CDBBox>
              </CDBBox>

            </CDBBox>

          </CDBBox>


        </CDBFooter>
      <div className={styles.copyright}>
        <small className="text-center mt-5">&copy; SALVA MI HUELLA, 2022. All rights reserved.</small>
      </div>
      </div>
    </>
  );
};