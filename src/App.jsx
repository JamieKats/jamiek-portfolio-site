import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Contact />
        <Portfolio />
        <Footer />
    </>
  )
}

export default App