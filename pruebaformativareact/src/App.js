import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Informacion from './components/informacion';
import CardsProductos from './components/cards';
import CotizadorComponentes from './components/cotizador';
function App() {
  return (
    <div className="App">
       <Navbar />
       <Banner />
       <Informacion />
       <CotizadorComponentes />
      <header >
       
      </header>

    </div>
  );
}

export default App;
