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

        let name = this.state.name;
        let surname = this.state.surname;
        let phone = this.state.phone;
        let email = this.state.email;
        this.props.onAdd(name, surname, phone, email);
        name = surname = phone = email = '';
        this.setState((state)=> {return {
            name, surname, phone, email
        //   const newItem = { name: '', surname: '', phone='', email: '' };
        //  return {name: 'df'}
        };})

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
                <form className="align-items-center">
                    <input onChange={this.onNameChange} value={this.state.name} className="form-control m-2" placeholder="Enter name" />
                    <input onChange={this.onSurnameChange} value={this.state.surname} className="form-control m-2" placeholder="Enter surname" />
                    <input onChange={this.onPhoneChange} value={this.state.phone} className="form-control m-2" placeholder="Enter phone" />
                    <input onChange={this.onEmailChange} value={this.state.email} className="form-control m-2" placeholder="Enter email" />
                    <button className="btn btn-danger" onClick={this.onAdd}>Add</button>
                </form>
            </>
        )
    }
}