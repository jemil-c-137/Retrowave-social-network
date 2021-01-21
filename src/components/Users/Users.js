import React from 'react';

import Paginator from './Paginator';

import UserProfile from './UserProfile';

let Users = ({ users, totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {
  return (
    <div>
      <Paginator totalUsers={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onChange={onPageChanged} />

      {users.map((user) => (
        <UserProfile
          user={user}
          key={user.id}
          followingInProgress={props.followingInProgress}
          unFollowThunk={props.unFollowThunk}
          followThunk={props.followThunk}
        />
      ))}
    </div>
  );
};

export default Users;
