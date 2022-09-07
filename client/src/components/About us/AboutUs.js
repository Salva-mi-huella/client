import React, { useEffect } from "react";
import styles from "./AboutUs.module.css";
import fotolauti from "../../assets/fotoLauti.jpeg";
import henry from "../../assets/henry-logo2.png";
import logo from "../../assets/logo-YW.png";
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <div className={styles.history} data-aos="fade-left"
                data-aos-duration="1500">
                <div className={styles.historyInfo} /* data-aos="fade-right"
                        data-aos-duration="1500"  */>
                    <h2 className={styles.titles}>Nuestra historia</h2>
                    <p>Somos un grupo de 8 estudiantes que cursaron juntos durante toda la etapa de bootcamp del reconocido instituto Soy Henry en pos de convertirnos en programadores Full-Stack. Llegados a la fase final del mismo, decidimos unir fuerzas y armar un equipo para dar vida a este proyecto que representa nuestros valores como personas y la unión que hemos formado a lo largo de este camino.</p>
                </div>
                <div className={styles.henryImage} /* data-aos="fade-left"
                        data-aos-duration="1500" */>
                    <img className={styles.henry} src={henry} alt="logo-henry"></img>
                </div>
            </div>
            <div className={styles.nosotros} data-aos="fade-right"
                data-aos-duration="1500">
                <div>
                    <img className={styles.mission} src={logo} alt="mission" ></img>
                </div>
                <div className={styles.missionInfo}>

                <h2 className={styles.titles}>Nuestra misión</h2>
                <p>Vencer la superpoblación, abandono e indiferencia que sufren millones de animales en nuestro país. Para ello creamos este espacio en donde las fundaciones y vos puedan trabajar en conjunto para seguir salvando a todos aquellas huellas que se encuentran necesitadas de un hogar y del cariño que se merecen.</p>

                </div>
            </div>
            <div >
                <div data-aos="fade-bottom"
                    data-aos-duration="1500">
                    <h2 className={styles.titleFounder}>Nuestro equipo</h2>
                </div>
                <div className={styles.devs} data-aos="fade-bottom" data-aos-duration="1500">
                    <div className={styles.primeraFila}>
                        {/* CRISTIAN PAEZ */}
                        <div className={styles.info}>

                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C5603AQF9LNQZ6LkLsA/profile-displayphoto-shrink_800_800/0/1657144387881?e=1663804800&v=beta&t=lBRmkDqhoAEVnm6n-GEvgZWBkKZo33ezoy3eCb1qKOw"></img>
                            <h3 className={styles.name}>Cristian Paez</h3>

                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/cristian009/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/CRISTIAN0026" >
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* ENUAR MONTAÑA*/}
                        <div className={styles.info}>
                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C5603AQEn1Ptkv_HEBA/profile-displayphoto-shrink_800_800/0/1655412540415?e=1663804800&v=beta&t=MZKljuv1JAUtlsANwm2s0hHF71jy_mcEtcapeeZlLHo"></img>
                            <h3 className={styles.name}>Enuar Montaña</h3>

                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/enuar-montaña-orozco-47494b14b/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/EnuarM" >
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* JOAQUIN GIOFFRE*/}
                        <div className={styles.info}>
                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQHaWelQmdBchg/profile-displayphoto-shrink_800_800/0/1655417322112?e=1663804800&v=beta&t=4X9FdRjcwxuYAddzLHu_a4xSUhLRFwO3QH_-lIy4sYg"></img>
                            <h3 className={styles.name}>Joaquín Gioffre</h3>

                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/joaquingioffre/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/gioacchinogioffre" >
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>

                        </div>

                        {/*JULIANO ARGUMEDO */}
                        <div className={styles.info}>
                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQGD8RjYwjK-ww/profile-displayphoto-shrink_800_800/0/1658426063167?e=1663804800&v=beta&t=hJ7oRxzIg2qoCgGFghMvdlVhpqTHHeut50RWBNCBmDM"></img>
                            <h3 className={styles.name}>Juliano Argumedo</h3>


                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/julianoargumedo/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/jargumedo" >
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.segundaFila}>

                        {/*LAUTARO BUA */}
                        <div className={styles.info}>
                            <img alt="foto-perfil" className={styles.devImg} src={fotolauti}></img>
                            <h3 className={styles.name}>Lautaro Bua</h3>

                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/lautaro-bua-b180811b7/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/Lauti0122" >
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>

                        </div>

                        {/*LISANDO LANDABURU */}
                        <div className={styles.info}>
                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/D4D35AQGRePiSWoqOcg/profile-framedphoto-shrink_400_400/0/1660676195595?e=1663189200&v=beta&t=voEcoGNk7sD6n8EZrIHEj_BWehtjL7lMYRzNOrgLJFI"></img>
                            <h3 className={styles.name}>Lisandro Landaburu</h3> 


                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/lisandro-landaburu-b205a5214/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/LichiLandaburu">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>

                        </div>

                        {/*NICOLAS PLANAS*/}
                        <div className={styles.info}>

                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQFPThHAkp2Adg/profile-displayphoto-shrink_800_800/0/1629750672014?e=1663804800&v=beta&t=H-xLcqHLBazQXh5hnx3w0i_ZHrtOS9kZkLLb_vPxPaM"></img>
                            <h3 className={styles.name}>Nicolás Planas</h3>

                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/nicolas-planas-9a4568180/">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/NicolasPlanas1998">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>

                        </div>

                        {/*SANTIAGO SEIDEDOS*/}
                        <div className={styles.info}>
                            <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4E03AQG9fkb-aure_w/profile-displayphoto-shrink_800_800/0/1598918678672?e=1663804800&v=beta&t=zh4Mdtor8b7ajDKu_X4tghqY14Egm2czyMvn2_2n7DI"></img>
                            <h3 className={styles.name}>Santiago Seisdedos</h3>

                            <div className={styles.wrapper}>

                                <a id={styles.a} className={styles.button} href="https://www.linkedin.com/in/santiago-seisdedos-b3a8841b5">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>

                                <a id={styles.a} className={styles.button} href="https://github.com/SantiagoSeisdedos">
                                    <div className={styles.icon}>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
