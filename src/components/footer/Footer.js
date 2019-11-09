import React from 'react';
import './Footer.css'
import logo from '../../resource/img/trevo.svg';
import NumerosResultado from '../numeros-resultado/NumerosResultado'
function Footer() {
  return (
    <footer className="App-footer">
    <img src={logo} className="App-logo" alt="logo" />
    <NumerosResultado />
  </footer>
  );
}

export default Footer;
