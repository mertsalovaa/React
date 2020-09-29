import React, { Component } from "react";
import Photo from '../photo';
import Info from '../info';
import Network from '../network';

import "./card.css"

export default class Card extends Component {
  
    render() {

        const { data, onDbDelete, selected } = this.props;

onClickSelect = () =>{
    return{
        selected: !selected
    }
}

        let className = "card m-3 p-3";
        if (!selected) {
            className += ' selected'
        }
        else {
            className += ' custom-card'
        }
        return (
            <div className={className} onClick={this.onClickSelect}>
                <div className="col">
                    <Photo src={data.photo} data={data.name} onDbDelete={onDbDelete} />
                </div>
                <div className="col">
                    <Info data={data} />
                </div>
                <Network fb={data.fb} inst={data.instagram} />
            </div>
            // <div className="col-10 col-sm-6 col-md-4 col-lg-3 card p-4 custom-card">

        );
    }
}