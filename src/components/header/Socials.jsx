import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const socials = () => {
  return (
    <div className='socials'>
        <a href='www.linkedin.com/in/jamiekatsamatsas' className='icon' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/JamieKats' className='icon' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default socials