import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import '../styles/profile.css'
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import MobileBottomNav from "../components/MobileBottomNav";



function Profile() {
  const {cart,wishlist,order}=useContext(CartContext)
  const navigate = useNavigate()
   const [loading, setLoading] = useState(true);


  const cartlength=cart.length
  const wishlistLength =wishlist.length
  const orderLength = order.length

    const [item,setItem]=useState([])
    const [profile,setProfile]=useState({})
    const [error,seterror]=useState("")

    const [name,setName]=useState("")
    const[email,setEmail]=useState("")

    const [edit,setEdit]=useState(false)
    const[showLogout,setShowLogout]=useState(false)


    
    useEffect(()=>{
      const check = localStorage.getItem("isLoggedin")
      if(check !=="true"){

  navigate('/')
  return
}
orderget()
getprofile()


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

     
      
      setItem(data.data)
 
      
      

      

    }
    else{
      alert(data.message)
    }
    
     
  }



  async function getprofile() {
     setLoading(true);


     const token = localStorage.getItem("token")
     const response =await fetch(`https://pepper-backend-2.onrender.com/pepper/Profile`,{
      
         headers:{
               
                authorization:`Bearer ${token}`
            }
      
     })
     const data = await response.json()
     if(response.ok){
      console.log(data);
      
      setProfile(data.data)
           setName(data.data.name)
      setEmail(data.data.email)
     }
     else{
      setProfile([])
     }



setLoading(false);

    
  }

  async function editProfile() {
    if(name===""){
      seterror("username has empty")
      return
    }

    if(name.length<3){
      seterror("Username have atleast three Characters ")
      return
    }
    if(email===""){
      seterror("email has empty")
      return
    }
      if(email.length<3){
      seterror("email Name has atleast 3 letter")
      return
    }


    if(!email.includes("@gmail.com")){
      seterror(`email doesn't having "@gmail.com"`)
      return
    }

       if(email.length<13){
      seterror("email Name has atleast 3 letter")
      return
    }

  




 const token = localStorage.getItem("token")
    const response = await fetch(`https://pepper-backend-2.onrender.com/pepper/editProfile`,{
      method:"PUT",
         headers:{
               "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({name,email
             
            })


    })

    const data = await response.json()
    if(response.ok){
      
      
      getprofile()

      
      setEdit(false)
      seterror("")
      
      

    }else{
      alert(data.message)
    }




    
  }
  


  function logout(){
localStorage.removeItem("token")
localStorage.removeItem("isLoggedin")

navigate('/')



  }















  return (
    <>
    <Navbar/>
    


     <div className="container py-5">

      
      <div className="profile-header">

        <div className="profile-user">

          <div className="profile-image">
            <i className="bi bi-person-fill"></i>
          </div>

          <div className="profile-details">
            <h2>{name}</h2>
            <p>
              <i className="bi bi-envelope"></i> {email}
            </p>
            <p>
              <i className="bi bi-calendar3"></i> Member Since 2026
            </p>
          </div>

        </div>

        <button onClick={()=>setEdit(!edit)}  className="edit-btn">
          <i className="bi bi-pencil-square"></i> Edit Profile
        </button>

     </div>

  {edit &&     <div className="profile-edit">
  <h3>Edit Profile</h3><i onClick={()=>setEdit(!edit)} className="bi bi-x-octagon-fill editprofilecancel"></i>

  <label className="form-label">Name</label>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
  />

  <label className="form-label">Email</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
  />
  <p className="error">{error}</p>

  <button onClick={editProfile}>
    <i className="bi bi-check-circle-fill"></i> Update Profile
  </button>
</div>
}
  

      <div className="row g-4 mt-4">

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <i className="bi bi-bag-check-fill"></i>
            <h3>{orderLength}</h3>
            <p>Orders</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <i className="bi bi-heart-fill"></i>
            <h3>{wishlistLength}</h3>
            <p>Wishlist</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <i className="bi bi-cart-fill"></i>
            <h3>{cartlength}</h3>
            <p>Cart</p>
          </div>
        </div>

      

      </div>

      

      <div className="row g-4 mt-4">

        <div className="col-lg-3 col-md-6" onClick={()=>navigate('/orders')}  >
          <div className="action-card">
            <i className="bi bi-box-seam"></i>
            <h5>My Orders</h5>
          </div>
        </div>

        <div className="col-lg-3 col-md-6" onClick={()=>navigate('/wishlist')}>
          <div className="action-card">
            <i className="bi bi-heart"></i>
            <h5>Wishlist</h5>
          </div>
        </div>

 <div className="col-lg-3 col-md-6" onClick={()=>navigate('/cart')}>
          <div className="action-card">
            <i className="bi bi-cart"></i>
            <h5>cart</h5>
          </div>
        </div>
     

       

      </div>

     

      <div className="recent-orders mt-5">

        <h3 className="mb-4">Recent Orders</h3>


{item.map((sends)=>
        <div className="order-item" key={sends._id}>

          <div className="order-left">
            
              <img onClick={()=>navigate(`/productsDetails/${sends.productId._id}`)}   src={`https://pepper-backend-2.onrender.com/uploads/${sends.productId.image}`} alt="" />

            <div >
              <h5 onClick={()=>navigate(`/productsDetails/${sends.productId._id}`)} >{sends.productId.name}</h5>
              <p onClick={()=>navigate('/orders' )}>{sends.orderStatus} • {sends.productId.price}</p>
            </div>
          </div>

          <span className="badge bg-success">
            Delivered
          </span>

        </div>
        )}

    

      </div>

      {/* Logout */}

      <div className="text-center mt-5">

        <button className="logout-btn" onClick={()=>setShowLogout(!showLogout)}>
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>

  {showLogout && (
  <div className="logout-overlay">
    <div className="logout-modal">
      <i className="bi bi-exclamation-triangle-fill logout-icon"></i>

      <h3>Logout</h3>

      <p>Are you sure you want to logout?</p>

      <div className="logout-actions">
        <button
          className="cancel-btn"
          onClick={() => setShowLogout(false)}
        >
          Cancel
        </button>

        <button
          className="confirm-btn"
          onClick={logout}
          
        >
          Logout
        </button>
      </div>
    </div>
  </div>
)}







      </div>
      
 



    </div>
    



<Footer/>

  <MobileBottomNav/>
    </>
  );
}

export default Profile;