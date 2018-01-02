import React, { Component } from 'react';

class FooterMain extends Component {
    render(){
        return(
            <footer id={this.props.id} 
                className={`py-${this.props.paddingValue} 
                bg-${this.props.background} text-white fixed-bottom`}>
                {this.props.children}
            </footer>
        );
    }
}

export default FooterMain;