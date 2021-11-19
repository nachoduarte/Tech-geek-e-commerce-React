import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {


  return (
    <div className="App">
      <header>
          <NavBar />
      </header>

      <main>
          <ItemListContainer greeting="Bienvenido!, aun no cargamos los productos" />
      </main>
    </div>
  );
}

export default App;
