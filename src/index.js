import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Contacts from './components/main/Contacts';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Page404 from './components/main/Page404';

const APP = (<HelmetProvider>
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
      <Route path='/*' element={
        <Page404 />
      }></Route>
    </Routes>
    <Contacts id="contact" />
    <Footer />
  </BrowserRouter>
</HelmetProvider>);

const rootElement = document.getElementById('root');
if(rootElement.hasChildNodes()){
  ReactDOM.hydrateRoot(rootElement, APP);
}else{
  const root = ReactDOM.createRoot(rootElement);
  root.render(APP);
}
