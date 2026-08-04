import { createContext, useEffect, useState } from "react";
import Wishlist from "../pages/Wishlist";

export const CartContext = createContext()

function CartProvider ({children}){
    const [cart,setCart]=useState([])
    const [wishlist,setWishlist]=useState([])
    const [order,setOrder]=useState([])

     useEffect(()=>{
    GetcartContext()
    getWishlistContext()
    ordergetContext()

  },[])


     async function GetcartContext() {
    const token = localStorage.getItem("token")

    if(!token){
      setCart([])
      return
    }




    const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/getcart",{
          headers:{
               
                authorization:`Bearer ${token}`
            },
    })
    const data= await response.json()

    if(response.ok){

       
        setCart(data.data)
       console.log(data);
       
        
    }else{
       setCart([])
    }
    

  }



 async function getWishlistContext() {
 const token = localStorage.getItem("token")
 if(!token){
  setWishlist([])
  return
 }



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





async function ordergetContext() {

    const token = localStorage.getItem("token")

    if(!token){
      setOrder([])
      return
    }
    const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/getOrder",{
      
        headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            }
    })

    const data =await response.json()
    if(response.ok){

     
      console.log(data);
      setOrder(data.data)
      
      

      

    }
    else{
      alert(data.message)
    }
    
  }





















 

  return(
    <CartContext.Provider value={{cart,setCart,GetcartContext,wishlist,getWishlistContext,order,ordergetContext}} >
{children}
    </CartContext.Provider>




  )




}

export default CartProvider