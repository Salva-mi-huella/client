import React from 'react';
import Card from '../Card/Card.jsx';
import { CardsData } from '../Data/Data';

import styles from '../Cards/Cards.module.css';

const Cards = () => {

    


    return (
        <div className={styles.analyticsCards}>
            {CardsData.map((card, id) => {
                return (
                    <div className={styles.parentContainer}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards