import React from 'react'
import Nav from './components/pages/Nav.jsx';
import Hero from './components/pages/Hero.jsx';
import Short from './components/pages/Short.jsx';
import Body from './components/pages/Body.jsx';
import Footer from './components/pages/Footer.jsx';
import BodyBottom from './components/pages/BodyBottom.jsx';



const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Short />
      <Body />
      <BodyBottom />
      <Footer />
    </div>
  )
}

export default App