import React from "react";
import {ButtonGroup, DropdownButton, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const HeaderDropDown = ({login, avatar, logout}) => {
    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id={`dropdown-variants-${'Primary'}`}
                variant={'Primary'.toLowerCase()}
                title={login}
            >

                <div className='text-center'>
                    <Link to='/profile'>Мой профиль</Link>
                </div>
                <hr/>
                <div className='text-center'>
                    <Link to='/settings'>Настройки</Link>
                </div>
                <hr/>
                <div className='text-center'>
                    <Button variant="danger" onClick={logout}>Выйти</Button >
                </div>
            </DropdownButton>
            <div className='header-avatar d-flex justify-content-center align-items-center' >
                {avatar !== null && avatar.photos.small ?
                    <img src={avatar.photos.small} alt="avatar"/> :
                    <div><FontAwesomeIcon icon={faUser}/></div>
                }
            </div>
        </>
    )
}

export default HeaderDropDown;