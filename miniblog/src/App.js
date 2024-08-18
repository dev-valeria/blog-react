import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
             <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

