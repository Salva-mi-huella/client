import React, {useState} from "react";
import styles from "./ItemCard.module.css";
import img from "../../assets/paw-print.png";
import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function ItemCard(props) {
    const dispatch = useDispatch();

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

        <div className={styles.canje}>
            <button onClick={()=>dispatch(addToCart(props.id))} className="btn btn-dark">AGREGAR</button>
        </div>
    </div>
    );
}
