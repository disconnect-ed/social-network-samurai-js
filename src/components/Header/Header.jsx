import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import HeaderDropDown from "./HeaderDropDown/HeaderDropDown";
import {faBars,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Menu from "./Menu/Menu";

const Header = (props) => {

    const [menu, showMenu] = (useState(false))

    return (
        <>
            <Container fluid className='pl-0 pr-0'>
                <header>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="/">Социальная сеть</Navbar.Brand>
                        <Nav className="ml-auto d-md-flex d-none">
                            {props.isAuth
                                ? <HeaderDropDown login={props.login} logout={props.logout} avatar={props.avatar}/>
                                : <NavLink to={'/login'}>Login</NavLink>}
                        </Nav>
                        <Nav className="ml-auto d-md-none d-block">
                            <div className='header-menu__button' onClick={() => showMenu(true)}>
                                <FontAwesomeIcon icon={faBars}/>
                            </div>
                        </Nav>
                    </Navbar>
                </header>
            </Container>
            {menu &&
            <Menu showMenu={showMenu} logout={props.logout} />
            }
        </>
    )
}

export default Header;