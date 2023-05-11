// import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './assets/css/App.css';
// import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Congratulation from './pages/Congratulation';
import NotFound from './pages/NotFound';

import {Provider} from './helpers/hooks/useGlobalContext';

function App() {
  return (
    <Provider>

    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories/:idc" element={<Details />} />
          <Route path="/categories/:idc/products/:idp" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
    </Provider>
  );
}

export default App;
