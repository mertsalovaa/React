import React from "react";
import Photo from '../photo';
import Info from '../info';
import Network from '../network';

import "./card.css"

const Card = ({ data }) => {
    console.log(data);
    return (
            <div className="card m-3">
                <div className="col">
                    <Photo src={data.photo} data={data.name}/>
                </div>
                <div className="col">
                    <Info data={data} />
                </div>
                <Network fb={data.fb} inst={data.instagram} />
            </div>
        // <div className="col-10 col-sm-6 col-md-4 col-lg-3 card p-4 custom-card">

    );
}

export default Card;