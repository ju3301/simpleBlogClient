import './App.css';
import Header from './components/Header'
import React from 'react';
import { default as Articles } from './components/Articles';
import SearchAppBar from './components/SearchAppBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <SearchAppBar />
          <Switch>
            <Route path="/" exact component={() => <Articles />} />
            <Route path="/login" exact component={() => <Login />} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
