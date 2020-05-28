import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className='mt-3'>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]} />
        </div>
        <div className='mt-3 text-right'>
            <button className='btn btn-success' >Добавить запись</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {

    // const currentDate = () => {
    //     const now = new Date();
    //     const answer = `${now.getFullYear()}.${now.getMonth()}.${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    //     return answer
    // }

    let postsElements =
        [...props.posts].reverse()
            .map(p => <Post solid={faHeart} key={p.id} text={p.message} avatar={p.avatar} name={p.name} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        const name = props.authUserProfile.fullName;
        const avatar = props.authUserProfile.photos.small;
        const text = values.newPostText;
        props.addPost({text, name, avatar});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className='row mt-5'>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;