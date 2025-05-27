import Topbar from './components/dashboard/Topbar'
import Sidebar from './components/dashboard/Sidebar'
import React from 'react';
import './App.css';
import Navbar from './components/landing-page/Navbar';
import HeroSection from './components/landing-page/Herosection';
import Footer from './components/landing-page/Footer';
import Services from './components/landing-page/Services';
import { Route, Routes } from 'react-router-dom';
import Login from './components/landing-page/Login';

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
    
    <Routes>
      <Route path='/' element={<>
      <Navbar/>
      <HeroSection/>
      <Services/>
        <Footer/>
      </>} >
                    
      </Route>
      <Route exact path='/login' element={<Login/>} />
      <Route  path='/dashboard' element={<Dashboard/>} />


    </Routes>    
  
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
