import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
    return (
            <nav className='nav-menu' >
                <div className='navbar-link-wrap' >
                    <NavLink className='navbar-link' to="/profile" >
                        <span className='navbar-link-icon'>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className='navbar-link-text'>Профиль</span>
                    </NavLink>
                </div>
                <div className='navbar-link-wrap'>
                    <NavLink className='navbar-link' to="/dialogs" >
                        <span className='navbar-link-icon'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span>Сообщения</span>
                    </NavLink>
                </div>
                <div className='navbar-link-wrap'>
                    <NavLink className='navbar-link' to="/users" >
                        <span className='navbar-link-icon'>
                            <FontAwesomeIcon icon={faUsers} />
                        </span>
                        <span>Пользователи</span></NavLink>
                </div>
                <div className='navbar-link-wrap'>
                    <NavLink className='navbar-link' to="/news" >
                        <span className='navbar-link-icon'>
                            <FontAwesomeIcon icon={faNewspaper} />
                        </span>
                        <span>Новости</span></NavLink>
                </div>
                <div className='navbar-link-wrap'>
                    <NavLink className='navbar-link' to="/music" >
                        <span className='navbar-link-icon'>
                            <FontAwesomeIcon icon={faMusic} />
                        </span>
                    <span>Музыка</span>
                    </NavLink>
                </div>
                <div className='navbar-link-wrap'>
                    <NavLink className='navbar-link' to="/settings" >
                        <span className='navbar-link-icon'>
                            <FontAwesomeIcon icon={faCog} />
                        </span>
                    <span>Настройки</span>
                    </NavLink>
                </div>
            </nav>
    )
}

export default Navbar;