import React from 'react';
import styles from './PetDetail.module.css';


export default function PetDetail(){
    let pet = {
        name: 'Bobby',
        img1: "https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg",
        img2: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc",
        img3: "https://dam.ngenespanol.com/wp-content/uploads/2019/02/gato-dia-internacional.png",
        img4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        fundation: "Fundacion Affinity",
        age: "2 años",
        sex: "Macho"

    }
    
    return(
        <div>
            
            <div className={styles.containerImg}>
                <img className={styles.img} src={pet.img1} alt="img1"></img>
                <img className={styles.img} src={pet.img2} alt="img2"></img>
                <img className={styles.img} src={pet.img3} alt="img3"></img>
                <img className={styles.img} src={pet.img4} alt="img4" ></img>
            </div>
            <div>
                <h1>Hola, soy {pet.name}!</h1>
                <p>{pet.description}</p>
            </div>
            <div>
                <button>Salvas mi huella?</button>
            </div>
            <div>
                <p>Fundacion: {pet.fundation}</p>
                <p>Edad: {pet.age}</p>
                <p>Sexo: {pet.sex}</p>
            </div>
        </div>
    )
}