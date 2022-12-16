import React from 'react'
import Navigation from './components/Navigation';
import About from './components/sections/About';
import Home from './components/sections/Home';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer';
import Partners from './components/sections/Partners';
import Info from './components/sections/Info';
import Contact from './components/sections/Contact';


const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navigation/>
      <Home/>
      <About/>
      <Roadmap/>
      <Info/>
      <Showcase/>
      <Partners/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;