import React from "react";
import {Alert} from "react-bootstrap";

const ProfileInfoAdditional = ({id}) => {
    return (
            <Alert variant="primary">
                <h5>Дополнительная информация:</h5>
                <hr/>
                <div>
                    <h6>ID пользователя:</h6>
                    <p>{id}</p>
                </div>
                <hr/>
            </Alert>
    )
}

export default ProfileInfoAdditional;