import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import MobileBottomNav from "../components/MobileBottomNav";


function Cart() {
  const {ordergetContext,GetcartContext}=useContext(CartContext)

  
    const navigate = useNavigate()
  const [product,setProduct]=useState([])
  const [total,setTotal]=useState(0)

  useEffect(()=>{
    GetCart()

  },[])

  async function GetCart() {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3030/pepper/products/getcart",{
          headers:{
               
                authorization:`Bearer ${token}`
            },
    })
    const data= await response.json()

    if(response.ok){

        setProduct(data.data)
        setTotal(data.total)
       console.log(data);
       
        
    }
    

  }





  async function increaseQuantity(id) {
        const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3030/pepper/products/increase",{
        method:"PUT",
          headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                productId:id
            })
        
    })

   
    GetCart()
    
    
  }

 async function decreaseQuantity(id) {
        const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3030/pepper/products/decrease",{
        method:"PUT",
          headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                productId:id
            })
        
    })

   
    GetCart()
    
    
  }



  async function remove(id) {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3030/pepper/products/remove",{
     method:"DELETE",
     headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
              productId:id
            })
    })
    GetCart()
    const data = response.json()
    if(response.ok){
      GetcartContext()
    }




    
  }



  async function orderPost() {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3030/pepper/products/orderpost",{
      method:"POST",
        headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            }
    })

    const data =await response.json()
    if(response.ok){
     
      GetCart()
      ordergetContext()
      GetcartContext()
      navigate('/orders')
      

    }
    else{
      alert(data.message)
    }
    
  }
  





















  
  if(!product){
    return(<></>)
  }

 
  
 



    return (
        <>
        <Navbar/>

   <div className="cart-container">
      <h1 className="cart-title">🛒 My Cart</h1>
      
          <div className="cart-summary">
            <h2>Total: {total}  ₹</h2>

            <button className="checkout-btn" onClick={orderPost}>
              Proceed to Checkout
            </button>
          </div>

      {product.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {product.map((item) => {
              // Skip deleted products
              if (!item.productId) {
                return (
                  <div className="cart-card" key={item._id}>
                    <h3>Product no longer available</h3>
                  </div>
                );
              }

              return (
                <div className="cart-card" key={item._id}>
                  <div className="cart-image" onClick={()=>navigate(`/productsDetails/${item.productId._id}`)}>
                    <img
                    
                       src={`http://localhost:3030/uploads/${item.productId.image}`}
                      alt={item.productId.name}
                    />
                  </div>

                  <div className="cart-details">
                    <h2 onClick={()=>navigate(`/productsDetails/${item.productId._id}`)}>{item.productId.name}</h2>

                    <p>
                      <strong>Brand:</strong> {item.productId.brand}
                    </p>

                    <p>
                      <strong>Price:</strong> ₹{item.productId.price}
                    </p>

                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>

                    <p>
                      <strong>Subtotal:</strong> ₹
                      {item.productId.price * item.quantity}
                    </p>

                    <div className="cart-buttons">
                      <button onClick={()=>decreaseQuantity(item.productId._id)} >-</button>

                      <span>{item.quantity}</span>

                      <button onClick={()=>increaseQuantity(item.productId._id)}>+</button>

                      <button className="remove-btn" onClick={()=>remove(item.productId._id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </>
      )}
    </div>
 

            
            
            
            
            
            
            
            
            
            
            
        
            <MobileBottomNav/>
        


        </>
      
      
    )
    

        
        
        
        
        
        
        
    
}

export default Cart