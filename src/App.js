import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {


  return (
    <div className="App">
      <header>
          <NavBar />
      </header>

      <main>
          <ItemListContainer  />

          <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
