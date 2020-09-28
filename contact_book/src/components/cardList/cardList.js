import React, { Component } from 'react'
import Card from '../card'

export default class CardList extends Component {
    render() {
        const { data, onDbDelete } = this.props;
        const cards = data.map(item => {
            console.log(item);
            return <Card data={item} onDbDelete={(id) => onDbDelete(item.id)}/>;
        })

        return (
            <>
                {cards}
            </>
        )
    }
}