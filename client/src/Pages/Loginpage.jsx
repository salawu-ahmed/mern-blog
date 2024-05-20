import React, { useState } from 'react'

const Loginpage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include'
      })
      if(res.ok) {
        alert("Login successful")
      }
    } catch (error) {
      console.log(error)
      alert
    }

  }

  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default Loginpage
