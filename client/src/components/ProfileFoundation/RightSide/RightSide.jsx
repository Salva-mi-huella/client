import React from 'react';
import AdoptionReview from '../AdoptionReview/AdoptionReview';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3> Updates </h3>
                <Updates />
            </div>

            <div>
                <h3> Adoption review </h3>
                <AdoptionReview />
            </div>

        </div>
    )
}

export default RightSide;