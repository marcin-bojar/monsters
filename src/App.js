import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    this.setState({ monsters: users });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className='App'>
        <input type="search" placeholder="search monsters" onChange= { e => this.setState({ searchField: e.target.value })} />
        <CardList monsters= { filteredMonsters } /> 
      </div>  
    );
  }
}

export default App;
