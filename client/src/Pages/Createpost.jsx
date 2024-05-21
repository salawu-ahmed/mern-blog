import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Createpost = () => {
  return (
    <form>
      <input type='text' placeholder='Title'/>
      <input type="summary" placeholder='summary' />
      <input type="file" name="" id="" />
      <ReactQuill />
      <button style={{marginTop: '5px'}}>Create post</button>
    </form>
  )
}

export default Createpost
