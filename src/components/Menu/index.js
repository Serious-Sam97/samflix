import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav>
            <img class="Logo" src={Logo} alt="SamFlix logo"/>
        </nav>
    );
}

export default Menu;