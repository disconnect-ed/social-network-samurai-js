import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <div className='d-flex justify-content-center'>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        </div>

        <div className='row'>
            {
                users.map(u => <div className="col-xl-4 col-sm-6 col-12 mb-4">
                    <User user={u}
                          followingInProgress={props.followingInProgress}
                          key={u.id}
                          unfollow={props.unfollow}
                          follow={props.follow}
                    />
                    </div>
                )
            }
        </div>
    </div>
}

export default Users;