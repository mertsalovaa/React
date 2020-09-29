import React, { Component } from "react"

export default class Search extends Component {
   state = {
       text: ''
   }
   
    onSearchChange = (event) => {       
        let text = event.target.value ;
        this.setState({text})
        this.props.onSearch(event.target.value);
    }
    render() {
        return (
            <>
                <input onChange={this.onSearchChange} value={this.state.text} class="form-control form-control-dark m-3 w-100" type="text" placeholder="Search" aria-label="Search"></input>
            
            </>
        )
    }
}