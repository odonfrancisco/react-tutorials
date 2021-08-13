import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        exact 
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/projects"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
