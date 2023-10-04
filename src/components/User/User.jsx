import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();
  return (
    <div className=' bg-gray-700  max-w-sm m-auto  my-6 text-3xl text-center p-9  rounded-md text-white :'>
     User: {userId}
    </div>
  )
}

export default User
