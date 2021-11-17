import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import NavBar from './components/NavBar.js';

function App() {


  return (
    <div className="App">
      <header>
          <NavBar />
      </header>

      <main className="landingDisplay">
      
      <p className="fontReg mainTextColor">
          Tech-geek computadoras - aun no cargamos nuestros productos!
      </p>

      </main>
    </div>
  );
}

export default App;
