import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [username, setUsername] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/profileInfo', {
            credentials: "include"
        })
            .then((res) => res.json())
            .then(data => setUsername(data.username))
    }, [])
    return (
        <header>
            <Link to="/" className='logo'>My Blog</Link>
            <Link to='/logout'>log out</Link>
            <nav>
                {
                    username && (
                        <>
                            <Link to={'/create'}>Create post</Link>
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
