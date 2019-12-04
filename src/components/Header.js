import React from 'react';
import { Link } from 'react-router-dom';
// const img = require("./src/images/privacy_logo.png");
import "./Header.css";

class Header extends React.Component{
    render() {
        return (
            <header className="topbar">
                <nav>
                    <Link className="logo" to="/">
                        {/* <img
                            className='privacyImage'
                            width='300'
                            height='50'
                            alt='Privacy Logo'
                            src={img}
                        /> */}
                    </Link>
                </nav>
            </header>
        )
    }
}

export default Header;