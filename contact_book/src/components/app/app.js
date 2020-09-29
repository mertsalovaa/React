import CardList from "../cardList"
import React, { Component } from "react"
import AddForm from "../add-form"
import Search from "../search";

export default class App extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "Iryna",
                surname: "Mertsalova",
                phone: "+380672345676",
                email: "irynamertsalova@gmail.com",
                fb: "https://facebook.com",
                instagram: "https://instagram.com",
                photo: 'https://robohash.org/iryna?set=set4&size=100x100',
                selected: false
            },
            {
                id: 4,
                name: "atehaH",
                surname: "dejntgedjn",
                phone: "+380672345676",
                email: "setjwtju@gmail.com",
                fb: "https://facebook.com",
                instagram: "https://instagram.com",
                photo: 'https://robohash.org/ejaj?set=set4&size=100x100',
                selected: false                
            },
            {
                id: 2,
                name: "Kate",
                surname: "Androsiuk",
                phone: "+380672345676",
                email: "kateandrosiuk@gmail.com",
                fb: "https://facebook.com",
                instagram: "https://instagram.com",
                photo: 'https://robohash.org/kate?set=set4&size=100x100', 
                selected: false
            }
        ],
        search: []
    };

    deleteItem = (id) => {
        let { data } = this.state;
        let index = data.findIndex(x => x.id === id)

        let dataBefore = data.slice(0, index);
        let dataAfter = data.slice(index + 1);

        this.setState((state) => { return { data: [...dataBefore, ...dataAfter] }; });
    }

    rand = 2000;
    addItem = (name, surname, phone, email) => {
        let { data } = this.state;
        this.setState(({ data }) => {
            const newItem = {
                id: this.rand++,
                name: name,
                surname: surname,
                phone: phone,
                email: email,
                fb: "https://facebook.com",
                instagram: "https://instagram.com",
                photo: `https://robohash.org/${surname}?set=set4&size=100x100`
            }
            return { data: [...data, newItem] }
        })
    }

    searchItems = (text) => {

        console.log(text)
        let { data } = this.state;
        let search = data.filter(x => x.name.indexOf(text) >= 0);
        console.log(search);
        if (search.length > 0)
            this.setState({ search: [...search] })
        else
            this.setState({ search: [...data] })
    }

    selectedItems = () => {
        let {data} = this.state;
        let select = data.filter(x=>!x.selected);

        this.setState({data: select})
    }

    render() {

        return (
            <div className='row justify-content-around'>
                <Search onSearch={this.searchItems} />
                <CardList data={this.state.search.length==0?this.state.data: this.state.search}
                    onDbDelete={(id) => this.deleteItem(id)} />
                <AddForm onAdd={this.addItem} />
                <button className="btn btn-outline-success" onClick={this.selectedItems}>Remove selected </button>

            </div>
        )
    }
}