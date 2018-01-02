import React, { Component } from 'react'; 

export default class Section extends Component {
    
    render(){
        return (
            <section>
                <div className="container">
                    { this.props.children }
                </div>
            </section>
        );
    }
}