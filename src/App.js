import React, { Component } from 'react';
import MovieList from './containers/MovieList.js';
import Button from './components/Button.js';
import data from './data/data.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }
  render() {
    return (
      <div className="app">

        <h1 className="app-title"> {this.title}</h1>
        <MovieList movieData={data}/>
        <Button />
      </div>

    );
  }
}

export default App;
