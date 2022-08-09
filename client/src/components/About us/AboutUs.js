import React, { useEffect } from "react";
import styles from "./AboutUs.module.css";
import githubpng from "../../assets/pngegg.png";
import fotolauti from "../../assets/fotoLauti.jpeg";
import henry from "../../assets/henry-logo2.png";
import logo from "../../assets/logo-YW.png";
import Footer from "../Footer/Footer";



export default function AboutUs(){

    useEffect(() => { 
        window.scrollTo(0, 0);
     }, [])


    return(
        <div>
            <div className={styles.history}>
                <div className={styles.historyInfo} >
                <h2 className={styles.titles}>Nuestra historia</h2>
                <p>Somos un grupo de 8 estudiantes que cursaron juntos durante toda la etapa de bootcamp del reconocido instituto Soy Henry en pos de convertirnos en programadores Full-Stack. Llegados a la fase final del mismo, decidimos unir fuerzas y armar un equipo para dar vida a este proyecto que representa nuestros valores como personas y la unión que hemos formado a lo largo de este camino.</p>
                </div>
                <div className={styles.henryImage}>
                    <img className={styles.henry} src={henry} alt="logo-henry"></img>
                </div>
            </div>
            <div className={styles.nosotros}>
                <div>
                    <img className={styles.mission} src={logo} alt="mission"></img>
                </div>
                <div className={styles.missionInfo}>
                <h2 className={styles.titles}>Nuestra misión</h2>
                <p>Salvar a todos aquellos animales que se encuentran necesitados de un hogar y del cariño que se merecen. Por eso decidimos crear este espacio donde blablabla</p>
                </div>
            </div>
            <div >
                <div>
                <h2 className={styles.titles}>Nuestro equipo</h2>
                </div>
                <div className={styles.devs}>
                <div className={styles.primeraFila}>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C5603AQF9LNQZ6LkLsA/profile-displayphoto-shrink_800_800/0/1657144387881?e=1663804800&v=beta&t=lBRmkDqhoAEVnm6n-GEvgZWBkKZo33ezoy3eCb1qKOw"></img>
                    <h3 className={styles.name}>Cristian Paez</h3>
                    <a href="https://www.linkedin.com/in/cristian009/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/CRISTIAN0026" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C5603AQEn1Ptkv_HEBA/profile-displayphoto-shrink_800_800/0/1655412540415?e=1663804800&v=beta&t=MZKljuv1JAUtlsANwm2s0hHF71jy_mcEtcapeeZlLHo"></img>
                    <h3 className={styles.name}>Enuar Montaña</h3>
                    <a href="https://www.linkedin.com/in/enuar-montaña-orozco-47494b14b/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/EnuarM" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQHaWelQmdBchg/profile-displayphoto-shrink_800_800/0/1655417322112?e=1663804800&v=beta&t=4X9FdRjcwxuYAddzLHu_a4xSUhLRFwO3QH_-lIy4sYg"></img>
                    <h3 className={styles.name}>Joaquín Gioffre</h3>
                    <a href="https://www.linkedin.com/in/joaquingioffre/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/gioacchinogioffre" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQGD8RjYwjK-ww/profile-displayphoto-shrink_800_800/0/1658426063167?e=1663804800&v=beta&t=hJ7oRxzIg2qoCgGFghMvdlVhpqTHHeut50RWBNCBmDM"></img>
                    <h3 className={styles.name}>Juliano Argumedo</h3>
                    <a href="https://www.linkedin.com/in/julianoargumedo/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>         
                    <a href="https://github.com/jargumedo" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>   
                </div>
                </div>
                <div className={styles.segundaFila}>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src={fotolauti}></img>
                    <h3 className={styles.name}>Lautaro Bua</h3>
                    <a href="https://www.linkedin.com/in/lautaro-bua-b180811b7/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/Lauti0122" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4E03AQEhNFEeaTgERw/profile-displayphoto-shrink_400_400/0/1658521157185?e=1663804800&v=beta&t=vUt5ZSrvLcSnLBuLBaUo35mQHqrCBrpNuywHLp1yWq4"></img>
                    <h3 className={styles.name}>Lisandro Landaburu</h3>
                    <a href="https://www.linkedin.com/in/lisandro-landaburu-b205a5214/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/Lichi96" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQFPThHAkp2Adg/profile-displayphoto-shrink_800_800/0/1629750672014?e=1663804800&v=beta&t=H-xLcqHLBazQXh5hnx3w0i_ZHrtOS9kZkLLb_vPxPaM"></img>
                    <h3 className={styles.name}>Nicolás Planas</h3>
                    <a href="https://www.linkedin.com/in/nicolas-planas-9a4568180/" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/NicolasPlanas1998" target="_blank" rel="noreferrer">
                        <img  alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img alt="foto-perfil" className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4E03AQG9fkb-aure_w/profile-displayphoto-shrink_800_800/0/1598918678672?e=1663804800&v=beta&t=zh4Mdtor8b7ajDKu_X4tghqY14Egm2czyMvn2_2n7DI"></img>
                    <h3 className={styles.name}>Santiago Seisdedos</h3>
                    <a href="https://www.linkedin.com/in/santiago-seisdedos-b3a8841b5" target="_blank" rel="noreferrer">
                        <img alt="foto-linkedin" className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>        
                    <a href="https://github.com/SantiagoSeisdedos" target="_blank" rel="noreferrer">
                        <img alt="foto-github" className={styles.githubImg} src={githubpng} ></img>
                    </a>      
                </div>
                </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
