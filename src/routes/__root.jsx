import { useState } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import PizzaOfTheDay from '../PizzaOfTheDay.jsx';
import Header from '../Header.jsx';
import { CartContext } from '../contexts.jsx';

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext>
        <ReactQueryDevtools />
        <TanStackRouterDevtools />
      </>
    );
  },
});
