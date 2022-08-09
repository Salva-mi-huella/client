import React from 'react';
import styles from '../Cards/Cards.module.css';
import Card from '../Card/Card.jsx';
import { CardsData } from '../Data/Data';

const Cards = () => {
    return (
        <div className={styles.Cards}>
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