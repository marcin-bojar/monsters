import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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

  handleChange = (e) => {
     this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters" 
          handleChange= { this.handleChange } 
        />
        <CardList monsters= { filteredMonsters } /> 
      </div>  
    );
  }
}

export default App;
