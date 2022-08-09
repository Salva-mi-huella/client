import React from 'react';
import Updates from '../Updates/Updates';
import styles from './RightSide.module.css';
import { Link } from 'react-router-dom';

const RightSide = ({ foundation }) => {
    return (
        <div className={styles.RightSide}>

            <Link className={styles.link} to={`fundacion/${foundation?.id}`}>
                <button className={styles.btnLink} >Ver mi sección</button>
            </Link>

            <div className={styles.updates}>
                <Updates foundation={foundation} />
            </div>

        </div >
    )
}

export default RightSide;