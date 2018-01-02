import React, { Component } from 'react';

import FooterMain from '../templates/footer/FooterMain';
import FooterSecondary from '../templates/footer/FooterSecondary';

class Footer extends Component {
    render() {
        return (
            <FooterMain id='main-footer' paddingValue='5' background='warning'>
                <div className="container">
                    <h1>Footer</h1>
                </div>
                <FooterSecondary background='success' paddingValue='0'>
                    <h6>Footer Secundário</h6>
                </FooterSecondary>
            </FooterMain>
        );
    }
}

export default Footer;