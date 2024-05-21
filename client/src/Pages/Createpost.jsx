import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom'

const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ]
}
const formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const Createpost = () => {
    const [redirect, setRedirect] = useState(false)
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('file', files[0])
    const createNewPost = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:4000/createpost', {
                method: 'POST',
                body: data,
                credentials: "include"
            })
            if(res.ok){
                setRedirect(true)
            }
            const received = await res.json()
        } catch (error) {
            console.error(error);
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <form onSubmit={createNewPost}>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="summary"
                placeholder='summary'
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />
            <input
                type="file"
                name="file"
                id=""
                onChange={(e) => setFiles(e.target.files)}
            />
            <ReactQuill
                value={content}
                modules={modules}
                formats={formats}
                onChange={newValue => setContent(newValue)}
            />
            <button
                style={{ marginTop: '5px' }}
            >
                Create post
            </button>
        </form>
    )
}

export default Createpost
