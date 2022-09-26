import AboutUs from './components/main/AboutUs';
import Allies from './components/main/Allies';
import Objetives from './components/main/Objectives';
import Productions from './components/main/Productions';
import History from './components/main/History';
import Contacts from './components/main/Contacts';
import Home from './components/main/Home';

/**
 * Componente encargado de mostrar la información de página principal
 * muestra la información general del grupo FDC
 * 
 * @returns los elementos de la página principal
 */
function App() {
  return (
    <main className="App">
      <Home id='home'/>
      
      <AboutUs id='about-us'/>

      <Productions id='productions'/>

      <Objetives id='objectives'/>

      <Allies id='allies'/>

      <History id='history'/>

      <Contacts id='contact'/>
    </main>
  );
}

export default App;