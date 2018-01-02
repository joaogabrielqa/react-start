import React, { Component } from 'react';

export default class NavbarMain extends Component {

    /*
        Properties values:
        minWidth: xs|sm|md|lg;
        background: light|primary|info|success|warning|danger;
        paddingValue: 0|1|2|3|4|... (See Bootstrap 4 values)
    */

    render() {
        return (
            <nav className=
                {`navbar navbar-toggleable-${this.props.minWidth} fixed-top py-${this.props.paddingValue} navbar-light bg-${this.props.background}`}>
                <div className="container">
                    {this.props.children}
                </div>
            </nav>
        );
    }
}