import React from "react";
import ReactDOM from "react-dom";
import CardList from './components/cardList';

const App = () => {
    const data = [
        { name: "Iryna", surname: "Mertsalova", phone: "+380672345676", email: "irynamertsalova@gmail.com", fb: "https://facebook.com", instagram: "https://instagram.com", photo: 'https://robohash.org/iryna?set=set4&size=100x100' },
        { name: "Kate", surname: "Androsiuk", phone: "+380672345676", email: "kateandrosiuk@gmail.com", fb:"https://facebook.com", instagram: "https://instagram.com", photo: 'https://robohash.org/kate?set=set4&size=100x100' }
    ];
    return (
        <div className='row justify-content-around'>
            <CardList data={data} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));
