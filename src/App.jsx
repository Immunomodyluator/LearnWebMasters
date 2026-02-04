import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PizzaOfTheDay from './PizzaOfTheDay.jsx';
import Order from './Order.jsx';

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Immuno cafe</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
