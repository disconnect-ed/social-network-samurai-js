import React, {useState} from "react";
import ProfileDataForm from "../Profile/ProfileInfo/ProfileDataForm";
import userPhoto from "../../assets/images/user.png";
import ProfileStatusWithHooks from "../Profile/ProfileInfo/ProfileStatusWithHooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Settings = ({profile, savePhoto, saveProfile, updateStatus, status}) => {

    const [save, setSave] = useState(false)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            setSave(true),
            setTimeout(() => setSave(false), 3000)
        )
    }

    return (
        <div className='settings-wrap p-3'>
            <div className='row flex-md-row-reverse'>

                <div className="col-xl-5 col-lg-6 col-md-12 ml-auto text-center">
                    <div className='settings-photo'>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='settings-avatar-wrap text-center d-flex justify-content-center align-items-center'>
                                {profile.photos.large ?
                                    <img src={profile.photos.large} className='settings-avatar'/>
                                    :
                                    <div><FontAwesomeIcon icon={faUser}/></div>
                                }
                            </div>
                        </div>
                        <h3>Изменить фотографию</h3>
                        <div className="text-center">
                            <input className='file-upload' type={"file"} onChange={onMainPhotoSelected}/>
                        </div>
                    </div>
                    <div className="settings-status mt-5 mb-5">
                        <h3>Изменить статус</h3>
                        <div className='text-center'>
                            <ProfileStatusWithHooks editMode={true} status={status} updateStatus={updateStatus}/>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div>
                        <h3>Изменить контактные данные</h3>
                        <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}
                                         save={save}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;