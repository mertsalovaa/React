import React, { Component } from 'react'
import Card from '../card'

export default class CardList extends Component {

    render() {
        const { data, onDbDelete, onSelectClick } = this.props;
        const cards = data.map(item => {
            return <Card key={item.id} data={item} onDbDelete={(id) => onDbDelete(item.id)} onSelectClick={onSelectClick} selected={item.selected} />;
        })

        return (
            <>
                {cards}
            </>
        )
    }
}