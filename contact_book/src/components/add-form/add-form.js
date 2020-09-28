import React, { Component } from "react"

export default class AddForm extends Component {

    state = {
        name: '',
        surname: '',
        phone: '',
        email: ''
    }
    onAdd = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.surname, this.state.phone, this.state.email);
        this.setState({ name: "", surname: "", phone="", email: "" })

    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onSurnameChange = (event) => {
        this.setState({ surname: event.target.value })
    }
    onPhoneChange = (event) => {
        this.setState({ phone: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <>
                <form className="align-items-center d-flex">
                    <input onChange={this.onNameChange} value={this.state.text} className="form-control" placeholder="Enter name" />
                    <input onChange={this.onSurnameChange} value={this.state.text} className="form-control" placeholder="Enter surname" />
                    <input onChange={this.onPhoneChange} value={this.state.text} className="form-control" placeholder="Enter phone" />
                    <input onChange={this.onEmailChange} value={this.state.text} className="form-control" placeholder="Enter email" />
                    <button className="btn btn-danger" onClick={this.onAdd}>Add</button>
                </form>
            </>
        )
    }
}