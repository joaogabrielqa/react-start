import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class NavbarListItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link to={this.props.route} className="nav-link">{this.props.value}</Link>
            </li>
        );
    }
}

export default NavbarListItem;