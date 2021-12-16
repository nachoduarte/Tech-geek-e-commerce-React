import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import CartContextProvider from './context/CartContext.js';

function App() {


  return (
    <CartContextProvider>
    <Router>
      <div className="App">
        <header>
            <NavBar />
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <ItemListContainer  />
            </Route>

            <Route exact path="/category/:category">
              <ItemListContainer  />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
