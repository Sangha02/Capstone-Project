import React, { Component, useRef, useState } from 'react'
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import './login.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";





const Login=({setLogin,setUser})=>{
    

    const nav=useNavigate()

    // const handleChange=(e)=>{
    //     const { name,value}=e.target
    //     setUser(
    //         {
    //             ...user,
    //             [name]:value
    //         }
    //     )

    // }
    
    // const login=(e)=>{
    //     e.preventDefault()
    //     if(user.email===data.email&&user.password===data.password){
            
    //         setUser({})
    //         setLogin(true)
    //     }else{
    //         alert('wrong email or password')
    //     }
    // }
    const handleLogin=async(e)=>{
        e.preventDefault()
        const email=document.getElementById('email').value
        const password=document.getElementById('password').value
        let result=null
        try{
            result= await axios.get('https://zaikaarbackend-production.up.railway.app/users',{params:{email:email,password:password}})
            console.log(result.data)
            if(result.data.password===password){
                alert('login successful!')
                setUser({id:result.data._id,name:result.data.username,contact:result.data.phone,email:result.data.email,gender:result.data.gender,bookings:result.data.bookings})
                setLogin(true)
                localStorage.setItem('user',{name:result.data.username,contact:result.data.phone,email:result.data.email,gender:result.data.gender})
                localStorage.setItem('login',true)
            }else{
                alert('wrong password or email')
            }
        }catch(err){
            console.log(err.data)
        }
        
    }

    return(
        <div className="background">
            <div className="form-container">
            <form className="form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="form-seg">
                    <label>Email : </label>
                    <input type='email' name="email" id="email" required />
                </div>
                <div className="form-seg">
                    <label>Password : </label>
                    <input type='password' name="password" id="password" required />
                </div>
                <p>Don't Have an account? Go to the <em className="link" onClick={()=>{nav('/register')}}>Register</em> page.</p>
                <button type='submit' className="submit-btn">Login</button>
                <button className="regi-btn" >Don't have account ? Click to Register</button>
                
            </form>
        </div>
        </div>
    )
}
export default Login;