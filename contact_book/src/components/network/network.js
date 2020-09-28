import React, { Component } from 'react'

export default class Network extends Component {
    render() {
        const {fb, inst} = this.props;
        return (
            <ul className="list-group list-group-horizontal justify-content-between">
                <li className="list-group-item btn-outline-light" ><a href={fb}><i className="fab fa-facebook-f"></i> Facebook</a></li>
                <li className="list-group-item btn-outline-light"><a href={inst}><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
        )
    }
}