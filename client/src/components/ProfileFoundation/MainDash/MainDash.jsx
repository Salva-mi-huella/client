import React from 'react';

import Loading from '../../Loading/Loading.js';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';

import styles from '../MainDash/MainDash.module.css';

const MainDash = ({ requests, foundation }) => {

    return (
        <div className={styles.MainDash}>

            <h2 className={styles.h1Dash} > Resumen </h2>

            <Cards foundation={foundation && foundation} />
            <Table requests={requests} />

        </div>
    )
}

export default MainDash;