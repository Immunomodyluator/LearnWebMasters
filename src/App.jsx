import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PizzaOfTheDay from './PizzaOfTheDay.jsx';
import Order from './Order.jsx';
import Header from './Header.jsx';
import {CartContext} from './contexts.jsx';

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
