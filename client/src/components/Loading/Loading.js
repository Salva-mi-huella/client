import React from 'react';
// import gif from "../../assets/cat-mouse.gif";
import styles from './Loading.module.css';
// import SVG from './SVG';

export default function Loading() {
    return (
        <>
            {/* <img className={styles.gif} src={gif} alt="Loading" /> */}
            {/* <img className={styles.gif} src='https://static.wixstatic.com/media/0da5a0_65a04e3d3a144d0da032433d6358399a~mv2.gif' alt="Loading" /> */}
            <div className={styles.container} >
                <img className={styles.gif} src='https://barfdeshidratado.com/wp-content/uploads/2022/02/piq-loading.gif' alt="Loading" />
            </div>
            {/* <h1>Loading . . .</h1> */}
            {/* <iframe title='Loading' src="https://embed.lottiefiles.com/animation/43017"></iframe> */}
        </>
    )
}