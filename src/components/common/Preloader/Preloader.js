import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div className='m-auto text-center mt-5 pt-5'>
        <img src={preloader} />
    </div>
}

export default Preloader;