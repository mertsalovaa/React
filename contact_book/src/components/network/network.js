import React from 'react'

const Network = ({ fb, inst }) => {
    return (
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item" ><i className="fab fa-facebook-f"></i>{fb}</li>
            <li className="list-group-item" ><i className="fab fa-instagram"></i>{inst}</li>
        </ul>
    )
}

export default Network;