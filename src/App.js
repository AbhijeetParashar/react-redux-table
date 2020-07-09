import React from 'react';
import './App.scss';
import HomePage from './layout/HomePage';
import UserDetail from './layout/UserDetail';
import { Route,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/user/:id" component={UserDetail}/>
    </BrowserRouter>
  );
}

export default App;
