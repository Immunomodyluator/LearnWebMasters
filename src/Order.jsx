import Pizza from './Pizza.jsx';

export default function Order() {
  const pizzaType = 'Hawaiian';
  const pizzaSize = 'Medium';
  return (
    <div className="order">
      <h2>Your Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === 'S'}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
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
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'L'}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-s">Large</label>
              </span>
            </div>
          </div>
          <button type={'submit'}>Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description={'another pep pizza'}
              image={'/public/pizzas/pepperoni.webp'}
            />
            <p>1000 РУБ</p>
          </div>
        </div>
      </form>
    </div>
  );
}
