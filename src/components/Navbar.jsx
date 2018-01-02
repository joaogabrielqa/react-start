import React, { Component } from 'react';

import NavbarMain from '../templates/navbar/NavbarMain';
import NavbarButton from '../templates/navbar/NavbarButton';
import NavbarBrand from '../templates/navbar/NavbarBrand';
import NavbarList from '../templates/navbar/NavbarList';
import NavbarListItem from '../templates/navbar/NavbarListItem';

class Navbar extends Component {
    render() {
        return (
            <NavbarMain minWidth='md' background='primary' paddingValue='0'>
                <NavbarButton position='right' />
                <NavbarBrand image='mlogo.png' alt='' width='50' height='50' value='B-Serviços'/>
                <NavbarList>
                    <NavbarListItem route='/home' value='Inicio'/>
                    <NavbarListItem route='/work' value='Quem Somos'/>
                    <NavbarListItem route='#' value='Cadastre-se'/>
                </NavbarList>
            </NavbarMain>
        );
    }
}

export default Navbar;