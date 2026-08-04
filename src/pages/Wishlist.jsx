import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/wishlist.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import MobileBottomNav from "../components/MobileBottomNav";


function Wishlist() {
  const [wishlist,setWishlist]=useState([])
  const {getWishlistContext,GetcartContext}=useContext(CartContext)

  useEffect(()=>{
getWishlist()
  },[])

  async function getWishlist() {
 const token = localStorage.getItem("token")
    const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/getwishlist",{
       headers:{
                
                authorization:`Bearer ${token}`
            }
    })


    const data = await response.json()
    if(response.ok){
       
       
       setWishlist(data.data)
       
    }else{
      alert(data.message)
    }
    

    
  }

   async function removeWish(id) {
 const token = localStorage.getItem("token")
    const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/removeWishlist",{

          method:"DELETE",
       headers:{
                 "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                productId:id
            })

    })


    const data = await response.json()
    if(response.ok){
       
       getWishlist()
       getWishlistContext()

       
    }else{
      alert(data.message)
    }
    

    
  }

















     async function addtocart(id) {
        const token = localStorage.getItem("token")
        const response= await fetch("https://pepper-backend-2.onrender.com/pepper/products/postcart",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                productId:id
            })
        })
        const data = await response.json()
        if(response.ok){

            GetcartContext()
            
        }
        else{
            alert(data.message)
        }
        
    }






  return (
    <>
    <Navbar/>
      <div className="wishlist-container">

            <h1 className="wishlist-title">
                My Wishlist
            </h1>

            {
                wishlist.length === 0 ?

                    <div className="wishlist-empty">
                        <h2>Your Wishlist is Empty ❤️</h2>
                    </div>

                    :

                    <div className="wishlist-grid">

                        {
                            wishlist.map((item) => (

                                <div className="wishlist-card" key={item._id}>

                                    <img
                                       src={`http://localhost:3030/uploads/${item.productId.image}`}
                                        alt={item.productId.name}
                                    />

                                    <h2>{item.productId.name}</h2>

                                    <h3>
                                        ₹{item.productId.price.toLocaleString()}
                                    </h3>

                                    <div className="wishlist-buttons">

                                        <button className="cart-btn" onClick={()=>addtocart(item.productId._id)}>
                                            Add To Cart
                                        </button>

                                        <button
                                            className="remove-btn"
                                            onClick={()=>removeWish(item.productId._id)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))
                        }

                    </div>
            }

        </div>
<MobileBottomNav/>
        </>
  )
}

export default Wishlist