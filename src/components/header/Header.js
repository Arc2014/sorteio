import React from 'react';
import './Header.css'
import logo from '../../resource/img/trevo.svg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Números da sorte LOTOFÁCIL</h3>
        </header>
    );
}

export default Header;
