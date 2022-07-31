import React from 'react';

import Cards from '../Cards/Cards';
import Table from '../Table/Table';

import '../MainDash/MainDash.css';

const MainDash = ({requests_foundations}) => {
    return (
        <div className='MainDash'>

            <h1> Movimientos del Mes </h1>

            <Cards />
            <Table requests_foundations={requests_foundations}/>

        </div>
    )
}

export default MainDash;