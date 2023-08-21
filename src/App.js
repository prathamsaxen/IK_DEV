import React from 'react';
import './App.css';

// Components
import Navbar from './Components/Navbar/Navbar';
import HeroWrapper from './Components/Hero-Wrapper/HeroWrapper';
import Ellipse from './Components/Ellipse/Ellipse';
import ServicesGroup from './Components/ServicesGroup/ServicesGroup';
import AboutUs from './Components/About-Us/AboutUs';
import LogoList from './Components/LogoList/LogoList';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroWrapper/>
     <Ellipse top={"765px"} left={"483px"} height={"72px"} width={"72px"}/>
     <ServicesGroup/>
     <AboutUs/>
     <Ellipse top={"2381px"} left={"815px"} height={"72px"} width={"72px"}/>
     <LogoList/>
     <Footer/>
    </div>
  );
}
export default App;
