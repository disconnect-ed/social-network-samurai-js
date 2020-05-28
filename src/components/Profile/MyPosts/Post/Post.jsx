import React, {useState} from 'react';
import './Post.css'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Post = (props) => {

    const currentDate = () => {
        const now = new Date();
        const answer = `${now.getFullYear()}.${now.getMonth()}.${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
        return answer
    }

    const [like, setLike] = useState(false);
    const date = currentDate();
    return (
        <div className='col-xl-4 col-lg-6 col-12 mb-5'>
            <div className='profile-post p-3 '>
                <div className="d-flex align-items-center">
                    <div className="post-avatar mr-3">
                        <img src={props.avatar}/>
                    </div>
                    <div className="post-name">
                        <h5>{props.name}</h5>
                    </div>
                </div>
                <div className='col-10 ml-5 pt-2 pb-2'>
                    {props.text}
                </div>
                <div className='d-flex justify-content-between pt-2'>
                    <div className='profile-post-date'>
                        {date}
                    </div>
                    <div className='profile-post-likes' onClick={() => setLike(!like)}>
                        <FontAwesomeIcon icon={like ? props.solid : faHeart}/>
                        {like ? <b>{+props.likesCount + 1}</b> : props.likesCount}</div>
                </div>

            </div>

        </div>
    )
}

export default Post;