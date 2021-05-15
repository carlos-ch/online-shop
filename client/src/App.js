import { Route } from 'react-router-dom';
import './App.scss';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
