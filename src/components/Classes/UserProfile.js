import React from 'react'
import user from './user'
function UserProfile(props) {
  const { email, username, fullName } = props.user

  return (
    <div>
      <h2>{fullName}</h2>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
    </div>
  )
}

export default UserProfile
