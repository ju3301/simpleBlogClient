import './App.css';
import Header from './components/Header'
import React from 'react';
import Articles from './components/Articles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Articles />
      </div>
    );
  }
}

export default App;
