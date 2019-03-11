import React, { Component } from 'react';

import CharacterList from './components/CharacterList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    console.log(this.getCharacters('https://swapi.co/api/people/'));
    console.log(this.getCharacters('https://swapi.co/api/people/?page=2'));
    console.log(this.getCharacters('https://swapi.co/api/people/?page=3'));
    console.log(this.getCharacters('https://swapi.co/api/people/?page=4'));
    console.log(this.getCharacters('https://swapi.co/api/people/?page=5'));
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
        // would have to set up a button to switch between pages with prevState //
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1 >React Wars</h1>
        </div>
        <CharacterList starwarsChars={ this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
