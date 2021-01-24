import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Home/>
    </div> 
  );
}

export default App;
