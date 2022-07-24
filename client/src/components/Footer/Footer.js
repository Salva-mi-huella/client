import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import styles from '../Footer/Footer.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../Profile/ProfileMenu';
import { style } from '@mui/system';

import ig from '../../assets/instagram.png'
import mail from '../../assets/email-2.png'
import eslogan from '../../assets/eslogan2.png'



export default function Footer() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();


  return (
    <>
      <div className={styles.top}>
        <div className={styles.eslogan}>
          <div id='imagen'>
            <img className={eslogan} src={eslogan} alt='eslogan'></img>
          </div>
          <div>
            <p>vos también podes <span>todos los días</span></p>
            <h2> Salvar mi huella</h2>
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <CDBFooter className="shadow" >

          <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '100%' }}>

            <CDBBox display="flex" justifyContent="around" className="flex-wrap">

              <CDBBox className={styles.containerLogo}>
                <a href="/" className="d-flex align-items-center p-0 text-dark text-decoration-none">
                  <img alt="logo" src={logo} width="80px" />
                  <div className={styles.mision}>
                    <span className="ml-3 h4 font-weight-bold mt-3">Salva mi huella</span>
                  </div>
                </a>

                <p className="my-3 text-wrap " style={{ width: '350px' }}>
                  Nuestra misión es cambiar el destino no solo de muchos animales, sino también el tuyo. Este sitio propone conectar a tu futuro mejor amigo con vos. Sumate!
                </p>

                {/* MEDIA ICONS */}
                <CDBBox display="flex" className="mt-4 me-5 justify-content-center">

                  <div className={styles.iconContainer}>
                    <img src={mail} className={styles.icons} ></img>
                    <img src={ig} className={styles.icons} ></img>
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
                    <Link to='/noticias'><button href="/noticias">NOTICIAS</button> <br /></Link>
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
                      <button href="/">SOPORTE</button>
                    </div>

                    {isAuthenticated ?
                      <div className={styles.links}>
                          <Link to='/perfil'><button>MI CUENTA</button></Link>
                      </div>
                      :
                      <div className={styles.links}>
                        <button onClick={() => loginWithRedirect()} >INICIAR SESION </button>
                        {/* <span> | </span> */}<br />
                        <button onClick={() => loginWithRedirect()} >REGISTRARSE</button>
                      </div>}
                  </div>

                </CDBBox>
              </CDBBox>


              {/* NOT USED */}
              {/* <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                  Products
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                  <CDBFooterLink href="/">Windframe</CDBFooterLink>
                  <CDBFooterLink href="/">Loop</CDBFooterLink>
                  <CDBFooterLink href="/">Contrast</CDBFooterLink>
                </CDBBox>
              </CDBBox> */}


            </CDBBox>

          </CDBBox>


        </CDBFooter>
      </div>
      <div className={styles.copyright}>
        <small className="text-center mt-5">&copy; SALVA MI HUELLA, 2022. All rights reserved.</small>
      </div>
    </>
  );
};