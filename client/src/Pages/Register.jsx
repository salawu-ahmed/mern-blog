import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const register = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:4000/register',{
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(!res.ok) {
                alert('Registration failed')
            }
            const data = await res.json()
            console.log(data);
            } catch (error) {
                console.error(error);
                alert("Registration failed")
            }
        }
  return (
    <form onSubmit={register}>
        <h1>Register</h1>
        <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button>Register</button>
    </form>
  )
}

export default Register
