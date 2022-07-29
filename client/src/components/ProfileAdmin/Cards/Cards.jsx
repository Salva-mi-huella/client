import React from 'react';
import '../Cards/Cards.css';
import Card from '../Card/Card.jsx';
import { CardsData } from '../Data/Data';

const Cards = () => {
    return (
        <div className="Cards">
            {CardsData.map((card, id) => {
                return (
                    <div className="parentContainer">
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