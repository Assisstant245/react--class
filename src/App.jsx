import React from 'react' ;
import Nav from './components/Nav'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Slider from './components/Slider/Slider';
import {Route,Routes} from "react-router-dom";

const App = () => {
 
  return (
    
    <>
    <Nav/>
    <Slider/>
      <Routes>
        <Route   path='/' element={<Home/>} />
        <Route   path='/Contact' element={<Contact/>} />
        <Route   path='/About' element={<About/>} />
        <Route   path='/Services' element={<Services/>} />
        <Route   path='/NotFound' element={<NotFound/>} />
      </Routes>
    
      </>
  );
}

export default App

