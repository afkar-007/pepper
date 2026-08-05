import React from 'react'
import '../styles/Register.css'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



function Register() {
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password ,setPassword]=useState("")
    const [error,setError]=useState("")
    const [showPassword,setShowPassword]=useState(false)



    async function UserPost() {
        if(name===""){
            setError("Username has empty ")
            return
        }
        if(name.length<3){
            setError("Username have atleast 3 characters")
            return
        }
        if(email===""){
            setError("Email has empty")
            return
        }
         if(email.length<3){
      setError("email Name has atleast 3 letter")
      return
    }

        if(!email.includes("@gmail.com")){
      setError(`email doesn't having "@gmail.com"`)
      return
    }

       if(email.length<13){
      setError("email Name has atleast 3 letter")
      return
    }
    if(password===""){
        setError("Password has empty")
            return
    }
    if(password.length<4){
        setError("Password Name has atleast 4 letter")
      return
    }





      const response =  await fetch("https://pepper-backend-2.onrender.com/pepper/",{
            method:"POST",
             headers: {
            "Content-Type": "application/json"
        },
            body:JSON.stringify({
                name:name,
                email:email,
                password:password
            })
        })

       const data = await response.json()
     
       if(response.ok){
        alert(data.message)
        navigate('/')
       }
       
        
    }











  return (
    <>


    <div className="register-container">
    <div className="register-box">

        <h1>Create Account</h1>
        <p>Join Pepper and start shopping today.</p>

        <div className="input-group">
            <label>Name</label>
            <input
            onChange={(e)=>setName(e.target.value)}
                type="text"
                value={name}
                placeholder="Enter your name"
            />
        </div>

        <div className="input-group">
            <label>Email</label>
            <input
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                value={email}
            />
        </div>

        <div className="input-group">
            <label>Password</label>
            <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type={showPassword?"text":"password"}
                placeholder="Create password"
            />
                          <i
        className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} eye-icon`}
        onClick={() => setShowPassword(!showPassword)}
    ></i>
        </div>
      {error &&  <p className='errorreg'> {error}</p>}

        <button onClick={UserPost} className="register-btn">
            Create Account
        </button>

        <div className="login-text">
            Already have an account? <Link to={'/'}>Login</Link>
        </div>

    </div>
</div>


    </>
  )
}

export default Register