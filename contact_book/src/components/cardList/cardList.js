import React from 'react'
import Card from '../card'

const CardList = ({ data }) => {
    console.log(data);
    const cards = data.map(item => {
        console.log(item);
        return <Card data={item} />;
    })

    return (
        <>
            {cards};
        </>
    )
}

export default CardList;