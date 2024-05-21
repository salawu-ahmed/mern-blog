import React from 'react'
import {format} from 'date-fns'

const Post = ({title, summary, content, cover, createdAt, author}) => {
    return (
        <div className="post">
            <div className="image">
                <img src={'http://localhost:4000/'+cover} alt="" />
            </div>
            <div className="texts">
                <h2 className="title">{title}</h2>
                <p className="info">
                    <a href="#" className="author">{author.username}</a>
                    <time dateTime="">{format(new Date(createdAt), "yyyy-MM-dd")}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}

export default Post
