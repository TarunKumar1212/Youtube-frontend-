import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/home'
import { useState} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Video from './pages/Video/Video';
import Profile from './pages/Profile/Profile.js';



function App() {
  const [sideNavbar, setsideNavbar] = useState(true)

  const setsideNavbarFun = (value) =>{
    setsideNavbar(value)
  }
  return (

    <BrowserRouter>
    <div className="App">

      <NavBar sideNavbar = {sideNavbar} setsideNavbarFun ={setsideNavbarFun}/>
      <Routes>
        <Route path='/' element={<Home sideNavbar = {sideNavbar}/>} />
        <Route path='/watch/:id' element={<Video/>}/>
        <Route path='/user/:id' element={<Profile sideNavbar = {sideNavbar}/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
