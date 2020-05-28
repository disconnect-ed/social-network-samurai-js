import React from 'react';
import {NavLink} from "react-router-dom";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import './User.css';

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className='user-wrap justify-content-center justify-content-sm-start'>
            <div className='text-center'>
                <NavLink className='user-link m-auto pt-2 pb-2 pr-2' to={'/profile/' + user.id}>
                    <div className="user-avatar">
                        {user.photos.small != null ?
                            <img src={user.photos.small} alt=""/>
                            :
                            <div><FontAwesomeIcon size='5x' icon={faUser}/></div>
                        }
                    </div>
                </NavLink>
            </div>
            <div className='pl-4' >
                <NavLink to={'/profile/' + user.id}>
                    <p className='user-name'>{user.name}</p>
                </NavLink>
                <div>
                    {user.followed
                        ? <Button variant='danger' disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</Button>
                        : <Button variant='success' disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</Button>}

                </div>
            </div>
        </div>
    )
}

export default User;