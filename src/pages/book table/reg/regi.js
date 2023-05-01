import React, { Component, useRef, useState } from 'react'

import './regi.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Regi = () => {
    const nav=useNavigate()

    
    const handleRegisteration = async (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const contact = document.getElementById('contact').value
        const password = document.getElementById('password').value
        const gender = document.getElementById('gender').value


        try {
            axios.post('https://zaikaarbackend-production.up.railway.app/users', { username: name, email: email, phone: contact, password: password, gender: gender }).then((res) => {
                console.log(res.data)
                
                alert('user added!!!')
                nav('/')
            })
        } catch (err) {
            console.log(err)
        }
        // try{
        //     let result= await axios.get('http://localhost:4000/')
        //     console.log(result.data)
            
        // }catch(err){
        //     console.log(err.data)
        // }
    }
    const navigate = useNavigate();

    return (
        <div>
            <div className="form-container2">
                <form className="form2" onSubmit={handleRegisteration}>
                    <h1>Registration</h1>
                    <div className="form-seg2">
                        <label>Name : </label>
                        <input id='name' type='text' name="name" required  />
                    </div>
                    <div className="form-seg2">
                        <label>Contact : </label>
                        <input id='contact' type='number' name="contact"  />
                    </div>
                    <div className="form-seg2">
                        <label>Gender : </label>
                        {/* <input type='text' name="email" /> */}
                        <select id='gender'>

                            <option value="male">Male</option>

                            <option value="female">Female</option>



                        </select>
                    </div>
                    <div className="form-seg2">
                        <label>Email : </label>
                        <input type='email' name="email" id='email'  />
                    </div>
                    <div className="form-seg2">
                        <label>Password : </label>
                        <input type='password' name="password" id="password"  />
                    </div>

                    
                    <button type='submit' className="submit-btn2">Submit</button>
                    <button className="login-bt" >Already have account? Login</button>

                </form>
            </div>
        </div>
    )

}

export default Regi;