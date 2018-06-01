import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/movies">Movies</Link></li>
            </ul>
        )
    }
}

export default Navigation;