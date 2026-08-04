import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Login() {
  const {ordergetContext,GetcartContext,getWishlistContext}=useContext(CartContext)
const navigate = useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [Uname,setname]=useState("")
const [error,seterror]=useState("")

useEffect(()=>{
  const check = localStorage.getItem("isLoggedin")
   const token = localStorage.getItem("token");
   if(token){
            ordergetContext()
        GetcartContext()
        getWishlistContext()
   }

  if(check==="true"){
    navigate('/home')

  }
},[])




  async function GetUser(e) {
 e.preventDefault()

   





   
      const response = await fetch("http://localhost:3030/pepper/Login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password

        })
      })
      const data = await response.json()
  
      if(response.ok){
       

        
        localStorage.setItem("token",data.data)
      localStorage.setItem("isLoggedin","true")
      localStorage.setItem("role",data.role)
        
        setname("")
        setEmail("")
        setPassword("")
             ordergetContext()
        GetcartContext()
        getWishlistContext()

         if(data.role==="admin"){
          navigate('/admin/productPost')      
        }else{
         navigate('/home')
        }

        

      
      }else{
        seterror(data.message)
      }
      



    
  }













  return (
    <>
 <div className="login-page">
      <div className="login-card">
         
      

        

        <h1>Welcome</h1>
        <p>Sign in to continue your shopping journey.</p>

        <form>

          <div className="input-group">
            <input
            value={Uname}
              onChange={(e)=>setname(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="input-group">
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="input-group">
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <p>{error}</p>

          

          <button onClick={(e)=>GetUser(e)} className="login-btn">
            Login 
          </button>


          <div className="bottom-text">
            Don't have an account? <Link to={'/register'}> Register</Link>
          </div>

        </form>

      </div>
    </div>

    
    
    </>
  )
}

export default Login