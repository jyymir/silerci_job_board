import React from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {

  const { userId } = useParams();

  return (
    <div>Profile
      <h1>The user ID is {userId}</h1>
    </div>
  )
}

export default Profile
