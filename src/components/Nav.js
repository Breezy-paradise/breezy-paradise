import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div>
            <nav className="main-nav">
                <h2 className="navbar-brand">Logo</h2>
                <ul>
                    <li className="nav-link">
                        <a>Register</a>
                    </li>
                    <li className="nav-link">
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
