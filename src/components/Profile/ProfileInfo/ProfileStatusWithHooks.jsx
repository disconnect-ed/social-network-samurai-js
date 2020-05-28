import React, {useState, useEffect} from 'react';
import {Alert} from "react-bootstrap";

const ProfileStatusWithHooks = (props) => {
    let [save, setSave] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const deactivateEditMode = () => {
        props.updateStatus(status).then(
            setSave(true),
            setTimeout(() => setSave(false), 3000)
        )
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !props.editMode &&
            <div>
                <b className='d-inline'>Статус: </b> <span >{props.status || "-------"}</span>
            </div>
            }
            {props.editMode &&
            <div>
                <div>
                    <input className='form-control'
                           value={status} onChange={onStatusChange} />
                </div>
                {save && <div className='mt-4'>
                    <Alert variant={"success"}>
                        Изменения успешно сохранены!
                    </Alert>
                </div>
                }
                <div className='mt-4'>
                    <button disabled={save} onClick={deactivateEditMode} className='btn btn-success'>Сохранить</button>
                </div>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;