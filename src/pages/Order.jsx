import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/order.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import MobileBottomNav from '../components/MobileBottomNav'




function Order() {
    const [orders,setOrders]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
    orderget()
    },[])


   async function orderget() {
    const token = localStorage.getItem("token")
    const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/getOrder",{
      
        headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            }
    })

    const data =await response.json()
    if(response.ok){

     
      console.log(data);
      setOrders(data.data)
      
      

      

    }
    else{
      alert(data.message)
    }
    
  }



  return (
<>

<Navbar/>
  <div className="orders-container">


            <h1 className="orders-title">
                My Orders
            </h1>

            {
                orders.length === 0 ?

                    <div className="empty-orders">
                        <h2>No Orders Yet</h2>
                        <p>Place your first order to see it here.</p>
                    </div>

                    :

                    <div className="orders-grid">

                        {
                            orders.map((order) => (

                                <div className="order-card" key={order._id}>

                                    <img
                                    onClick={()=>navigate(`/productsDetails/${order.productId._id}`)}
                                        src={`https://pepper-backend-2.onrender.com/uploads/${order.productId.image}`}
                                        alt={order.productId.name}
                                    />

                                    <div className="order-details">

                                        <h2 onClick={()=>navigate(`/productsDetails/${order.productId._id}`)}>{order.productId.name}</h2>

                                        <p>
                                            Brand :
                                            <span>{order.productId.brand}</span>
                                        </p>

                                        <p>
                                            Quantity :
                                            <span>{order.quantity}</span>
                                        </p>

                                        <p>
                                            Total :
                                            <span>
                                                ₹{order.totalprice}
                                            </span>
                                        </p>

                                        <p className="status">
                                            {order.orderStatus}
                                        </p>

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

export default Order