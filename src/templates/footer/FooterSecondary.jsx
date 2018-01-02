import React, { Component } from 'react';

class FooterSecondary extends Component {
    render(){
        return(
            <div className={`py-${this.props.paddingValue} bg-${this.props.background} text-white fixed-bottom`}>
                {this.props.children}
            </div>
        );
    }
}

export default FooterSecondary;
