import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const socials = () => {
  return (
    <div className='socials'>
        <a href='https://www.linkedin.com/in/jamiekatsamatsas' className='icon'><BsLinkedin/></a>
        <a href='https://github.com/JamieKats' className='icon'><BsGithub/></a>
    </div>
  )
}

export default socials