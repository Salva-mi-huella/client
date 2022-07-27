import React from "react";
import styles from "./ItemCard.module.css";
import img from "../../assets/paw-print.png";

export default function ItemCard(props) {
  return (
    <div className={styles.container}>
        <div>
            <img className={styles.imgproduct} src={props.images} alt="Img Card" />
        </div>

        <div className={styles.productname}>
        <h4>{props.name}</h4>
        </div>

        <div className={styles.detail}>
            <h4>{props.points}</h4>
            <img className={styles.paws} src={img}></img>
        </div>
    </div>
  );
}
