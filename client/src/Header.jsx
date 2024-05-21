import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContex'

const Header = () => {
    const {userInfo, setUserInfo} = useContext(UserContext)
    const navigate = useNavigate()
    const logout = () => {
        fetch('http://localhost:4000/logout', {
            method: "POST",
            credentials: "include"
        })
        setUserInfo(null)
        navigate('/login')
    }
    
    useEffect(() => {
        fetch('http://localhost:4000/profileInfo', {
            credentials: "include"
        })
        .then((res) => res.json())
        .then(data => setUserInfo(data))
    }, [])
    const username = userInfo?.username
    

    return (
        <header>
            <Link to="/" className='logo'>My Blog</Link>
            <nav>
                {
                    username && (
                        <>
                            <Link to={'/create'}>Create post</Link>
                            <button onClick={logout}>log out</button>
                        </>
                    )
                }
                {
                    !username && (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )
                }
            </nav>
        </header>
    )
}

export default Header
