import React from 'react'
import './navigation.css'

const Navigation = () => {
  return (
    <navigation className="navigation">
      <div className="logo">
        <h3>&#123; &#125;</h3>
        <h3>JamieK</h3>
      </div>

      <div className="links">
        <a className='link' href='#about'>about</a>
        <a className='link' href='#contact'>contact</a>
      </div>
    </navigation>
  )
}

export default Navigation