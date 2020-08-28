import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users } ));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }); //we have to state the context of 'this' to get it to work We must define it in the constructor OR use the arrow function (which means react will bind it for us :) )
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Roboflix</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
    </div>
    );
  } 
}

export default App;