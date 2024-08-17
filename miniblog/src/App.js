import React from 'react'; 
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/Home/home';
import About from './pages/About/About';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
