import React from 'react';
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
          <ItemListContainer  />
      </main>
    </div>
  );
}

export default App;
