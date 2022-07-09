import React from 'react'
import './header.css'
import ME from '../../assets/jamie-cropped.png'
import Socials from './Socials' 

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="left">
          <h5>Hello I'm</h5>
          <h1>Jamie Katsamatsas</h1>
          <div className="socials_wrapper">
            <div className="socials_one">
              <Socials />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="me">
            <img src={ME} alt="me"></img>
          </div>
          <div className="socials_two">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header