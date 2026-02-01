import { usePizzaOfTheDay } from './usePizzaOfTheDay.jsx';

const inil = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">From: {inil.format(pizzaOfTheDay.sizes.S)}</p>
          <img
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.description}
            className="pizza-of-the-day-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
