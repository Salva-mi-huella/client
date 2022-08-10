import React from 'react';
import gif from "../../assets/loading.gif";
import styles from './Loading.module.css';
// import SVG from './SVG';

export default function Loading() {
    return (
        <>
            {/* <img className={styles.gif} src={gif} alt="Loading" /> */}
            {/* <img className={styles.gif} src='https://static.wixstatic.com/media/0da5a0_65a04e3d3a144d0da032433d6358399a~mv2.gif' alt="Loading" /> */}
            <div className={styles.container} >
                {/* <img className={styles.gif} src='https://barfdeshidratado.com/wp-content/uploads/2022/02/piq-loading.gif' alt="Loading" /> */}
                <img className={styles.gif} src={gif} alt="Loading" />
            </div>
            <div className={styles.waviy}>
                <span style={{"--i": 1}}>C</span>
                <span style={{"--i": 2}}>a</span>
                <span style={{"--i": 3}}>r</span>
                <span style={{"--i": 4}}>g</span>
                <span style={{"--i": 5}}>a</span>
                <span style={{"--i": 6}}>n</span>
                <span style={{"--i": 7}}>d</span>
                <span style={{"--i": 8}}>o</span>
                <span style={{"--i": 9}}>.</span>
                <span style={{"--i": 10}}>.</span>
                <span style={{"--i": 11}}>.</span>
            </div>
            {/* <h1>Loading . . .</h1> */}
            {/* <iframe title='Loading' src="https://embed.lottiefiles.com/animation/43017"></iframe> */}
        </>
    )
}