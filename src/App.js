
import './App.css';
import Antefoot from './components/Antefoot';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Presentacion from './components/Presentacion';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro titlePizza="LAS MEJORES PIZZAS DE CESOS"/>
      <Presentacion/>
      <Antefoot/>
      <Footer/>
      
    </div>
    
  );
}

export default App;
