import React from "react";
import { BrowserRouter as Router }from 'react-router-dom';
import { Globalstyle } from "./globalStyles";

import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from './components/Products/data';
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Globalstyle/>
      <Hero />
      <Products heading='Turn it up to 11' data={productData} />
      <Feature />
      <Products heading='Sweet Swag' data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
