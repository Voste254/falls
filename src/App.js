import Topbar from './components/dashboard/Topbar'
import Sidebar from './components/dashboard/Sidebar'
import React from 'react';
import './App.css';
import Navbar from './components/landing-page/Navbar';
import HeroSection from './components/landing-page/Herosection';
import Footer from './components/landing-page/Footer';
import Services from './components/landing-page/Services';

function Dashboard(){
  return(
    <>
      <Topbar/>
      <Sidebar/>
      </>
  );
}
function Landingpage(){
  return(
    <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Footer/>
    </>
    
  )
}
function App() {
  return (
    <div className="App">
      
      <Landingpage/>
      
      
    </div>
  );
}

export default App;
