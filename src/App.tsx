import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AudiophileTheme from "./theme/AudiophileTheme";
import CartProvider from "./contexts/CartContext";

import { ICartItem } from "./types/cart";

import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (item: ICartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id?: string) => {
    const remove = (prevItems: ICartItem[]) => {
      let filteredItems: ICartItem[] = [];
      if (id) {
        filteredItems = prevItems.filter((item) => item.product.slug !== id);
      }
      return filteredItems;
    };
    setCartItems(remove);
  };

  const updateItem = (id: string, quantity: number) => {
    const remove = (prevItems: ICartItem[]) => {
      const updatedItems = prevItems.map((item) => {
        if (item.product.slug === id) {
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems;
    };
    setCartItems(remove);
  };

  return (
    <ThemeProvider theme={AudiophileTheme}>
      <CartProvider
        value={{ cartItems, addToCart, removeFromCart, updateItem }}
      >
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/category/:categoryName">
              <Category />
            </Route>
            <Route exact path="/product/:productSlug">
              <ProductDetail />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
