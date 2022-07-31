import React from 'react';
import Table from '../Table/Table.jsx';

import styles from './AdoptionRequests.module.css'
import img from '../../../assets/cat-mouse.gif'

const AdoptionRequests = () => {
  return (
    <div className={styles.adoptionRequest}>

      <h3 className={styles.h3}> Tabla de solicitudes </h3>
      
      <Table />
      
      <img src={img} />


    </div>
  )
}

export default AdoptionRequests;