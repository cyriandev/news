import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">News</Link>
                <Link className="me-2" to="/search"><ion-icon name="search-outline"></ion-icon></Link>
            </div>
        </nav>
    )
}

export default Header
