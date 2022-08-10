import React from 'react';
import Card from '../Card/Card.jsx';
import { CardsData } from '../Data/Data';
import { useSelector } from 'react-redux';

import styles from '../Cards/Cards.module.css';

import {
    MdPaid,
    MdPets,
} from 'react-icons/md';

const Cards = () => {

    let date = new Date();
    let month = date.getMonth() + 1;
    console.log(month)

    const user = JSON.parse(localStorage.getItem('user'));
    let foundation = useSelector(state => state.foundations);

    if (user) {
        foundation = foundation.find(f => f.email === user.email);
    }

    const totalDonations = foundation?.donations?.filter(d => d.date.slice(5, -3) == month).reduce((acc, curr) => acc + curr.amount, 0);
    const amountsDonations = foundation?.donations?.map(d => d.amount);
    const dates = foundation?.donations?.map(d => d.date);

    const totalPets = foundation?.pets?.length;
    const adoptedPets = foundation?.pets?.filter(p => p.adopted === true).length;
    const percent = Math.round(adoptedPets / totalPets * 100)
    console.log(percent)

    return (
        <div className={styles.analyticsCards}>

            <div className={styles.parentContainer}>
                        <Card
                            title={'Huellas Salvadas'}
                            color= {{backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)", boxShadow: "0px 10px 20px 0px #e0c6f5"}}
                            barValue={percent}
                            value={adoptedPets}
                            png={MdPets}
                            series={[{ name: "Adopciones",data: [3, 4, 2, 5, 4, 10, 10]},]}
                        />
            </div>

            <div className={styles.parentContainer}>
                        <Card
                            title={'Donaciones'}
                            color= {{backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",boxShadow: "0px 10px 20px 0px #FDC0C7"}}
                            barValue={100}
                            value={`$ ${new Intl.NumberFormat().format(totalDonations)} USD`}
                            png={MdPaid}
                            xaxis={{categories: dates, type: 'datetime'}}
                            series={[{ name: "Donaciones",data: amountsDonations},]}
                        />
            </div>

        </div>
    )
}

export default Cards