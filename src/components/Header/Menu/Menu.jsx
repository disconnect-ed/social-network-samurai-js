import React from 'react';
import {Link} from "react-router-dom";
import {faBars, faCog, faEnvelope, faMusic, faNewspaper, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Menu = ({logout, showMenu}) => {
    return (
        <nav className='header-menu'>
            <div className="header-menu__button_inner">
                <div className='header-menu__button' onClick={() => showMenu(false)}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
            <div className='header-menu-link-wrap'>
                <Link className='header-menu-link' to="/profile" onClick={() => showMenu(false)}>
                        <span className='header-menu-link-icon'>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                    <span className='header-menu-link-text'> Профиль</span>
                </Link>
            </div>
            <div className='header-menu-link-wrap'>
                <Link className='header-menu-link' to="/dialogs" onClick={() => showMenu(false)}>
                        <span className='header-menu-link-icon'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </span>
                    <span> Сообщения</span>
                </Link>
            </div>
            <div className='header-menu-link-wrap'>
                <Link className='header-menu-link' to="/users" onClick={() => showMenu(false)} >
                        <span className='header-menu-link-icon'>
                            <FontAwesomeIcon icon={faUsers}/>
                        </span>
                    <span> Пользователи</span></Link>
            </div>
            <div className='header-menu-link-wrap'>
                <Link className='header-menu-link' to="/news" onClick={() => showMenu(false)}>
                        <span className='header-menu-link-icon'>
                            <FontAwesomeIcon icon={faNewspaper}/>
                        </span>
                    <span> Новости</span></Link>
            </div>
            <div className='header-menu-link-wrap'>
                <Link className='header-menu-link' to="/music" onClick={() => showMenu(false)}>
                        <span className='header-menu-link-icon'>
                            <FontAwesomeIcon icon={faMusic}/>
                        </span>
                    <span> Музыка</span>
                </Link>
            </div>
            <div className='header-menu-link-wrap'>
                <Link className='header-menu-link' to="/settings" onClick={() => showMenu(false)}>
                        <span className='header-menu-link-icon'>
                            <FontAwesomeIcon icon={faCog}/>
                        </span>
                    <span> Настройки</span>
                </Link>
            </div>
            <div className='header-menu-link-wrap'>
                <div className='header-menu-link' onClick={logout}>
                    <span>Выйти</span>
                </div>
            </div>
        </nav>
    )
}

export default Menu;