import { Profiler, useState } from 'react'
// ========import pages==============

import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import ProductPost from './admin/ProductPost';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import About from './pages/About';
import Order from './pages/Order';

import { Route,Routes} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

// ==========Admin pages============










function App() {




  return (
    <>

<Routes>
 
<Route path='/'  element={<Login/>}   />
<Route path='/register' element={<Register/>}  />

<Route path='/home'   element={<Home/>}  />
<Route path='/products/:category' element={<Product/>}   />
<Route path='/productsDetails/:id' element={<ProductDetails/>}   />
<Route path='/cart' element={<Cart/>}/>
<Route path='/orders' element={<Order/>}   />
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/profile' element={<Profile/>} />
<Route path='/about' element={<About/>}/>



     
<Route path='/admin/productPost' element={<ProductPost/>} />












</Routes>










     
    </>
  )
}

export default App
