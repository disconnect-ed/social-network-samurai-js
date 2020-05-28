import React, {useState} from 'react';
import {faGlobe, faLink, faUser} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGithub, faInstagram, faTwitter, faVk, faYoutube} from '@fortawesome/free-brands-svg-icons';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileInfoAdditional from "./ProfileInfoAdditional";

const ProfileInfo = ({profile, status, isOwner}) => {

    const [info, showInfo] = useState(false)
    const onClick = () => {
        showInfo(!info)
    }

    return (
        <div className="profile-info-wrap">
            <div className='row pt-5'>
                <div className="col-lg-4 col-12">
                    <div className="avatar m-auto d-flex justify-content-center align-items-center">
                        {profile.photos.large ?
                            <img src={profile.photos.large} alt='user' className='avatar'/>
                        :
                            <div><FontAwesomeIcon icon={faUser}/></div>
                        }
                    </div>
                    {info &&
                    <div className="additional m-auto pt-3 d-lg-block d-none">
                        <ProfileInfoAdditional id={profile.userId}/>
                    </div>
                    }

                </div>
                <div className='col-lg-8 col-12'>
                    <div className="profile-header-wrap text-lg-left text-center">
                        <div>
                            <h2>{profile.fullName}</h2>
                        </div>
                        <ProfileStatusWithHooks status={status} />
                        <div>
                            <b>Ищу работу</b>: {profile.lookingForAJob ? <span style={{color: 'lime'}}>да</span> :
                            'нет'}
                        </div>
                        <div>
                            <p className='profile-info__button' onClick={onClick}>{
                                info ? 'Скрыть информациию' : 'Показать информацию'
                            }</p>
                        </div>
                    </div>
                    <ProfileData profile={profile} info={info} isOwner={isOwner} status={status}/>
                </div>
            </div>
            <hr/>
        </div>
    )
}

const ProfileData = ({profile, info}) => {

    return <div>
        {info &&
        <div className='profile-info-contacts col-12 mt-5 p-0'>
            <div>
                <h5>Мои профессиональные навыки:</h5>
                <p>{profile.lookingForAJobDescription}</p>
            </div>
            <hr/>
            <div>
                <h5>Обо мне:</h5>
                <p>{profile.aboutMe}</p>
            </div>
            <hr/>
            <div>
                <h5>Контакты:</h5>
                <div className="row">
                    <Contact contacts={profile.contacts}/>
                </div>
            </div>
        </div>
        }


    </div>
}


const Contact = ({contacts}) => {
    return <>
        {(contacts.vk !== null && contacts.vk !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.vk}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faVk}/></div>
                <div><b>ВКОНТАКТЕ</b></div>
            </a>
        </div>
        }
        {(contacts.facebook !== null && contacts.facebook !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.facebook}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faFacebookF}/></div>
                <div><b>FACEBOOK</b></div>
            </a>
        </div>
        }
        {(contacts.instagram !== null && contacts.instagram !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.instagram}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faInstagram}/></div>
                <div><b>INSTAGRAM</b></div>
            </a>
        </div>
        }
        {(contacts.twitter !== null && contacts.twitter !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.twitter}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faTwitter}/></div>
                <div><b>TWITTER</b></div>
            </a>
        </div>
        }
        {(contacts.website !== null && contacts.website !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.website}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faGlobe}/></div>
                <div><b>ВЕБ-САЙТ</b></div>
            </a>
        </div>
        }
        {(contacts.youtube !== null && contacts.youtube !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.youtube}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faYoutube}/></div>
                <div><b>YOUTUBE</b></div>
            </a>
        </div>
        }
        {(contacts.github !== null && contacts.github !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.github}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faGithub}/></div>
                <div><b>GITHUB</b></div>
            </a>
        </div>
        }
        {(contacts.mainLink !== null && contacts.mainLink !== '') &&
        <div className='col-xl-3 col-sm-4 col-6 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={contacts.mainLink}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={faLink}/></div>
                <div><b>ДОП. ССЫЛКА</b></div>
            </a>
        </div>
        }
    </>
}

export default ProfileInfo;