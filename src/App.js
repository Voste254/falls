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
import Signup from './components/landing-page/Signup';
import Body from './components/dashboard/Body';

function Dbody() {
  return (
    <div style={{ display: 'flex', marginTop: '70px', height: 'calc(100vh - 70px)', overflow: 'hidden' }} >
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Body />
      </div>
    </div>
  );
}

function Dashboard(){
  return(
   <>
   <Topbar/>
   <Dbody/>
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
      <Route path='/login' element={<Login/>} />
      <Route  path='/dashboard' element={<Dashboard/>} />
      <Route path='/signup' element={<Signup/>} />



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
