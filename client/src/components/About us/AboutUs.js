import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import githubpng from "../../assets/pngegg.png";


export default function AboutUs(){
    return(
        <div>
            <h1 className={styles.title}>Sobre Nosotros</h1>
            <div className={styles.history}>
                <h2>Nuestra historia</h2>
                <p>Desde 2017 intentamos crear soluciones con un objetivo claro: democratizar las finanzas acercando el potencial de las criptomonedas a todos los argentinos. En menos de un año logramos posicionar a Qubit Brokers, nuestra primera plataforma, dentro de las principales del país.En 2020 lanzamos Let’sBit, con la intención de llevar las criptomonedas a la región. Hoy somos más de 50 personas construyendo la solución cripto para pagos, inversiones y créditos para todos los latinoamericanos.</p>
            </div>
            <div className={styles.nosotros}>
                <h2>Nuestra misión</h2>
                <p>Estamos orgullosos de formar parte de un equipo totalmente enfocado al desarrollo de una aplicacion basada en ayudar al rescate de mascotas que todavia no encontraron un hogar y una familia para darles el amor que merecen.</p>
                {/* <img src="https://www.baenegocios.com/__export/1657139582196/sites/cronica/img/2022/07/06/seleccion_argentina_camiseta_1.jpg_1867853326.jpg"></img> */}
            </div>
            <div >
                <div>
                <h2 className={styles.titleFounder}>Nuestro equipo</h2>
                </div>
                <div className={styles.devs}>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQEAc8qWBTa7NQ/profile-displayphoto-shrink_800_800/0/1658420921977?e=1663804800&v=beta&t=H5bXixSgzZw4thQG2rfHUwvfrCzI5BUYqubJP6lNMxQ"></img>
                    <h3 className={styles.name}>Juliano Argumedo</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/julianoargumedo/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>         
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>   
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4E03AQG9fkb-aure_w/profile-displayphoto-shrink_800_800/0/1598918678672?e=1663804800&v=beta&t=zh4Mdtor8b7ajDKu_X4tghqY14Egm2czyMvn2_2n7DI"></img>
                    <h3 className={styles.name}>Santiago Seisdedos</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/santiago-seisdedos-b3a8841b5" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>        
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>      
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQHaWelQmdBchg/profile-displayphoto-shrink_800_800/0/1655417322112?e=1663804800&v=beta&t=4X9FdRjcwxuYAddzLHu_a4xSUhLRFwO3QH_-lIy4sYg"></img>
                    <h3 className={styles.name}>Joaquin Gioffré</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/joaquingioffre/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQFprOVFIxp_rg/profile-displayphoto-shrink_800_800/0/1658426049778?e=1663804800&v=beta&t=jY4bpB3FTQ0R9kqKYirSrBLQ46vK43Pnf8THv0nbaiA"></img>
                    <h3 className={styles.name}>Lautaro Bua</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/lautaro-bua-b180811b7/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/Lauti0122" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C4D03AQFPThHAkp2Adg/profile-displayphoto-shrink_800_800/0/1629750672014?e=1663804800&v=beta&t=H-xLcqHLBazQXh5hnx3w0i_ZHrtOS9kZkLLb_vPxPaM"></img>
                    <h3 className={styles.name}>Nicolas Planas</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/nicolas-planas-9a4568180/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C5603AQEn1Ptkv_HEBA/profile-displayphoto-shrink_800_800/0/1655412540415?e=1663804800&v=beta&t=MZKljuv1JAUtlsANwm2s0hHF71jy_mcEtcapeeZlLHo"></img>
                    <h3 className={styles.name}>Enuar Montaña</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/enuar-montaña-orozco-47494b14b/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://media-exp1.licdn.com/dms/image/C5603AQF9LNQZ6LkLsA/profile-displayphoto-shrink_800_800/0/1657144387881?e=1663804800&v=beta&t=lBRmkDqhoAEVnm6n-GEvgZWBkKZo33ezoy3eCb1qKOw"></img>
                    <h3 className={styles.name}>Cristian Paez</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/cristian009/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                <div className={styles.info}>
                    <img className={styles.devImg} src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"></img>
                    <h3 className={styles.name}>Lisandro Landaburu</h3>
                    <h5>Co-Founder</h5>
                    <a href="https://www.linkedin.com/in/juliano-argumedo-blanco-999381222/" target="_blank">
                        <img className={styles.linkedinImg} src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png"></img>
                    </a>  
                    <a href="https://github.com/jargumedo" target="_blank">
                        <img className={styles.githubImg} src={githubpng} ></img>
                    </a>            
                </div>
                </div>
            </div>
        </div>
    )
}