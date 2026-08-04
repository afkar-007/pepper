
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrolltoTop.jsx'

import CartProvider from './context/CartContext.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
<ScrollToTop/>
 <CartProvider>
    <App />
</CartProvider>

 </BrowserRouter>
)
