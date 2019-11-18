import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav() {
    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <NavLink class="navbar-brand" exact to={'/'}>ANYWHERE FITNESS</NavLink>
                </div>
                <ul class="nav navbar-nav">
                    <li><NavLink exact to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/classes'}>Classes</NavLink></li>
                    <li><NavLink to={'/Sign-Up'}>Sign-Up</NavLink></li>
                    <li><NavLink to={'/Login'}>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}



