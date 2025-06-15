import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Button } from 'react-bootstrap';

class App extends Component {

    handleClick() {
        // console.log('I see you!');
        axios.get('https://api.github.com/users/maecapozzi').then(response => this.setState({id:response.data.id}));
    }
    constructor() {
        super();
        this.state = { 
            id: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="button_container">
                <Button variant="primary" className="btn" onClick={this.handleClick}>Натисни мене</Button>
                <p>{this.state.id}</p>
            </div>
        );
    }
}

export default App;

