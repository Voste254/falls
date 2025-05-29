import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div style={{textAlign:'center'}}> 
        <h1>This is the login page</h1>
        <Link to='/dashboard'>
         <button>Login</button>
        </Link>
       
    </div>
  )
}

