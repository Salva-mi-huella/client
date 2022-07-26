import React from 'react';
import { UpdatesData } from '../Data/Data';
import './Updates.css';

const Updates = () => {
    return (
        <div className="Updates">
            {UpdatesData.map((update) => {
                return (
                    <div className="update">
                        <img src={update.img} alt='User not available' />
                        <div className="news">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{update.name}</span>
                                <span> {update.news}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}

export default Updates;