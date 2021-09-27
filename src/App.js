import './App.css';
import Header from './components/Header'
import React from 'react';
import Articles from './components/Articles';
import SearchAppBar from './components/SearchAppBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <SearchAppBar />

        <Articles />
      </div>
    );
  }
}

export default App;
