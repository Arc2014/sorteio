import React from 'react';
import './App.css';
import Header from '../header/Header'
import Home from '../home/Home'
import Footer from '../footer/Footer'
import { Provider } from 'react-redux'
import store from '../../store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
