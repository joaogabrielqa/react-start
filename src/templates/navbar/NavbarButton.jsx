import React, { Component } from 'react';

class NavbarButton extends Component {
    render() {
        return (
            <button className={`navbar-toggler navbar-toggler-${this.props.position}`}>
                <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarNav"></span>
            </button>
        );
    }
}

export default NavbarButton;