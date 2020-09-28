import React, { Component } from 'react';

export default class Photo extends Component {
    render() {
        const { src, onDbDelete } = this.props;
        return (
            <header>
                <img className="img-thumbnail" src={src} alt="..." />
                <a className="btn btn-outline-secondary float-right mt-3" onClick={onDbDelete}><i class="fas fa-times"></i></a>
            </header>
        )
    }
}

function Delete(event) {

}
