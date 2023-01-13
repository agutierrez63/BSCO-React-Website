import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Shop } from './components/pages/Shop'
import { Cart } from './components/pages/Cart'
import { ContactUs } from './components/pages/Contact'
import { NotFound } from './components/pages/NotFound'

function Routes() {
  return (
    <Routes>
      <Route path="/" exact component={<Home/>}/>
      <Route path="/about" exact component={<About/>}/>
      <Route path="/shop" exact component={<Shop/>}/>
      <Route path="/cart" exact component={<Cart/>}/>
      <Route path="/contact" exact component={<ContactUs/>}/>
      <Route component={<NotFound/>}/>
    </Routes>
  )
}
