import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Contacts from './components/main/Contacts';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <App />
          </>}
        />
        <Route path='/about/:id' element={
          <>
            <About />
          </>}
        />
        <Route path='/gallery' element={
          <>
            <Gallery />
          </>}
        />
      </Routes>
      <Contacts />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
