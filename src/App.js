import AboutUs from './components/main/AboutUs';
import Allies from './components/main/Allies';
import Objetives from './components/main/Objectives';
import Productions from './components/main/Productions';
import History from './components/main/History';
import Home from './components/main/Home';
import MetaTags from './components/main/MetaTags';

/**
 * Componente encargado de mostrar la información de página principal
 * muestra la información general del grupo FDC
 * 
 * @returns los elementos de la página principal
 */
function App() {
  return (
    <main className="App">
      <MetaTags
        title="Fuera de Contexto 💚 | Grupo de investigación"
        description="Somos un grupo de investigación <em>ONDAS</em> que estudia la fauna del municipio de Santo Domingo (Antioquia). Adscritos a la Institución Educativa Técnico Industrial Tomás Carrasquilla (IETITC). ¡Conoce más de FDC!"
        url="https://fueradecontexto.co/"
      />

      <Home id='home'/>
      
      <AboutUs id='about-us'/>

      <Productions id='productions'/>

      <Objetives id='objectives'/>

      <Allies id='allies'/>

      <History id='history'/>
    </main>
  );
}

export default App;