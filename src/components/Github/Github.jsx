import React from 'react'
import {useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData();


  return (
    <div className=' bg-gray-200 text-2xl m-auto text-gray-600 p-9 my-5 text-center rounded-md max-w-md font-semibold'>
        <img style={{width:400}} src={data.avatar_url} alt="Github profile picture" />
        <h3>{data.login}</h3>
      GitHub Followers: {data.followers}
    </div>
  )
}
export default Github
export const gitHubLoader = async()=>{
    const response = await fetch('https://api.github.com/users/sarthaksarangi')
    return response.json();
}


