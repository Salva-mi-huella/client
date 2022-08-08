import React from 'react';

import Loading from '../../Loading/Loading.js';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';

import styles from '../MainDash/MainDash.module.css';

const MainDash = () => {
    return (
        <div className={styles.MainDash}>

            <h1 className={styles.h1Dash} > Movimientos del Mes </h1>
            
            <Cards />
            <Table />

        </div>
    )
}

export default MainDash;