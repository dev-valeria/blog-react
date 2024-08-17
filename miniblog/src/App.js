import React from 'react'; 
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/Home/home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
