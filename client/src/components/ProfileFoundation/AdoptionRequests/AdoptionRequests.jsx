import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '../Table/Table.jsx';

import styles from './AdoptionRequests.module.css'
import img from '../../../assets/cat-mouse.gif'

const AdoptionRequests = () => {


  // const user = JSON.parse(localStorage.getItem('user'));
  // let foundation = useSelector(state => state.foundations);

  // if (user) {
  //   foundation = foundation.find(f => f.email === user.email);
  //   console.log(foundation, 'foundation info');
  // }

  return (
    <div className={styles.adoptionRequest}>

      <h3 className={styles.h3}> Tabla de solicitudes </h3>

      <Table />

      <img src={img} />


    </div>
  )
}

export default AdoptionRequests;