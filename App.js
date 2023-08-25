import logo from './images/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Upload from './upload';
import Login from './login';
import Profile from './profile';
import Premium from './premium';
import Settings from './settings';
import Home from './home';
import { Link, Routes, Route,useLocation } from 'react-router-dom';
import { BsSearch, BsFillHouseDoorFill, BsFillPlusCircleFill, BsFillPersonFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';

function App() {
  const location=useLocation();
  return (
    <div>
      {location.pathname !== '/' && (
      <div className="sidebar">
        <ul className="sidebar-list">
          <li style={{ padding: '0px 0px 0px 50px' }}><img src={logo} alt='Logo'></img></li>
          <li className="decibel">DECIBEL</li><br></br>
          <li className="sidebar-item"><Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>Home  <BsFillHouseDoorFill /></Link></li><br></br>
          {/* <li className="sidebar-item"><Link style={{ textDecoration: 'none', color: 'inherit' }}>Search <BsSearch /></Link></li><br></br> */}
          <li className="sidebar-item"><Link to='/upload' style={{ textDecoration: 'none', color: 'inherit' }}>Create Podcast  <BsFillPlusCircleFill /></Link></li><br></br>
          <li className="sidebar-item"><Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>Profile  <BsFillPersonFill /></Link></li><br></br>
          <li className="sidebar-item"><Link to='/premium' style={{ textDecoration: 'none', color: 'inherit' }}>Premium 👑</Link></li><br></br>
          <li className="sidebar-item"><Link to='/settings' style={{ textDecoration: 'none', color: 'inherit' }}>Settings  <FiSettings /></Link></li><br></br>
          <li className="sidebar-item"><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Sign Out  <GoSignOut /></Link></li>
        </ul>
      </div>
      )}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/upload' element={<Upload />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
