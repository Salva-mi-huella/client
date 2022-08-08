import React from 'react';
// import AdoptionReview from '../AdoptionReview/AdoptionReview';
import Updates from '../Updates/Updates';
import styles from './RightSide.module.css';
import { Link } from 'react-router-dom';

const RightSide = ({ foundation }) => {
    return (
        <div className={styles.RightSide}>
            <Link className={styles.link} to={`fundacion/${foundation?.id}`}><button>Ver mi sección</button></Link>
            <div className={styles.updates}>
                <h3 className={styles.RightSideTitle}> Recientes </h3>
                <Updates />
            </div>

        </div >
    )
}

export default RightSide;