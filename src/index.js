import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import Gallery from './components/gallery/Gallery';
import Illustrations from './components/illustrations/Illustrations';
import Sound from './components/sounds/Sound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <App />
            </>
          }
        />
        <Route
          path='/sound/:id'
          element={
            <>
              <Sound />
            </>
          }
        />
        <Route
          path='/gallery'
          element={
            <>
              <Gallery />
            </>
          }
        />
        <Route
          path='/illustrations'
          element={
            <>
              <Illustrations />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
