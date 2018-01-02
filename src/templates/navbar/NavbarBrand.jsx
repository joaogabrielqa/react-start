import React, { Component } from 'react';

class NavbarBrand extends Component {
    render() {
        /*
            Properties values:
            route: route which the page will be redirected;
            image: url from the image;
        */
        return (
            <a href={this.props.route} className="navbar-brand">
                <img src={this.props.image} alt={this.props.alt} 
                    width={this.props.width} height={this.props.height}/>
                <h3 className="d-inline align-middle">{this.props.value}</h3>
            </a>
        );
    }
}

export default NavbarBrand;