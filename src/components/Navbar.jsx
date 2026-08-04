import React, { useEffect, useState } from 'react'
import '../components_Styles/Navbar.css'
import logo from '../assets/Pepper.png'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'



function Navbar() {
    const{cart,wishlist,order}=useContext(CartContext)
    
    const totalItems = cart.length;
    const totalWishlist=wishlist.length
    const orderTotal=order.length


    const navigate = useNavigate()
    const [sidediv,setSideDiv]=useState(false)
    



  


   







  return (
    <>


<nav className="navbar">


    <img src={logo} className="logo" alt="logo"
     
   />

    <div className="nav-links">
        <p onClick={()=>navigate('/home')}>Home</p>

      
        
        <p onClick={()=>navigate('/cart')}>Cart <i className="bi bi-bag  cartbag"></i> {totalItems}</p>
        <p onClick={()=>navigate('/wishlist')}>Wishlist <i className="bi bi-heart"></i> {totalWishlist}</p>
        <p onClick={()=>navigate('/orders')}>Orders <i className="bi bi-border-style"></i> {orderTotal}</p>
        <p onClick={()=>navigate('/about')}>About</p>
        <p onClick={()=>navigate('/profile')}>Profile <i className="bi bi-person-lines-fill"></i></p>
    </div>
 
<button   onClick={()=>setSideDiv(!sidediv)}  className='menubutton'><i className=" menu bi bi-list"></i></button>
   
  





</nav>

{sidediv &&
<div className='sidebar'>

    <i
        className="bi bi-x-lg close"
        onClick={() => setSideDiv(false)}
    ></i>

    <p onClick={()=>navigate('/home')}>Home</p>
    <p onClick={()=>navigate('/cart')}>Cart <i className="bi bi-cart"></i> {totalItems} </p>
    <p onClick={()=>navigate('/wishlist')}>Wishlist <i className="bi bi-heart"></i> {totalWishlist}</p>
    <p onClick={()=>navigate('/orders')}>Orders {orderTotal}</p>
    <p onClick={()=>navigate('/about')}>About</p>
    <p onClick={()=>navigate('/profile')}>Profile <i className="bi bi-person-lines-fill"></i></p>

</div>
}
    
    
    </>
  )
}

export default Navbar