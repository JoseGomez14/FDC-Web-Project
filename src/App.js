import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import Main from './components/main/Main'
import Gallery from './components/gallery/Gallery'
import Illustrations from './components/illustrations/Illustrations';
import Sound from './components/sounds/Sound';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Main/>
              </>
            }
          />
          <Route 
            path='/sounds/:id' 
            element={
              <>
                <Sound/>
              </>
            }
          />
          <Route 
            path='/gallery' 
            element={
              <>
                <Gallery/>
              </>
            }
          />
          <Route 
            path='/illustrations' 
            element={
              <>
                <Illustrations/>
              </>
            }
          />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
