import React from 'react';
import gif from "../../assets/cat-mouse.gif";
import styles from './Loading.module.css';
// import SVG from './SVG';

export default function Loading () {
    return (
        <>
            <img className={styles.gif} src={gif} alt="Loading" />
        </>    
    )
}