import React, {useState} from "react";
import styles from "./ItemCard.module.css";
import img from "../../assets/paw-print.png";


export default function ItemCard(props) {

    const [cont, setCont] = useState(0)

    function contadorUp(){
        setCont(cont + 1)
    }
    function contadorDown(){
        if(cont > 0){
        setCont(cont - 1)
        }
    }

    return (
    <div className={styles.container}>
        <div className={styles.imagecard}>
            <img src={props.images} alt="Img Card" />
        </div>

        <div className={styles.productname}>
        <h4>{props.name}</h4>
        </div>

        <div className={styles.detail}>
            <h4>{props.points}</h4>
            <img className={styles.paws} src={img}></img>
        </div>

        <div className={styles.contador}>
            <button className="btn btn-outline-dark" onClick={contadorDown}>-</button>
            <h4>{cont}</h4>
            <button className="btn btn-outline-dark" onClick={contadorUp}>+</button>
        </div>
        <div className={styles.canje}>
            <button  className="btn btn-dark">CANJEAR</button>
        </div>
    </div>
    );
}
