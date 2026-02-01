import Pizza from './Pizza.jsx';
import { useEffect, useState } from 'react';

const inil = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState('pepperoni');
  const [pizzaSize, setPizzaSize] = useState('M');
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = inil.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const pizzaRes = await fetch('api/pizzas');
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order">
      <h2>Your Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id} dis>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-s">Pizza size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === 'S'}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'M'}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'L'}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type={'submit'}>Add to Cart</button>
          <div className="order-pizza">
            {loading ? (
              <h1>Loading pizza</h1>
            ) : (
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
            )}
            <p>{price}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
