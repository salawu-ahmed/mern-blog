import React, { useEffect, useState } from 'react'
import Post from '../Post'

const Homepage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/posts')
    .then((res) => res.json())
    .then((posts) => setPosts(posts))
  }, [])
  return (
    <>
    {
      posts.length > 0 && (
        posts.map((post) => <Post {...post} key={post._id}/> )
      )
    }
    </>
  )
}

export default Homepage
