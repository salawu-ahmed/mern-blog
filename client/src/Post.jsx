import React from 'react'
import {format} from 'date-fns'

const Post = ({title, summary, content, cover, createdAt}) => {
    return (
        <div className="post">
            <div className="image">
                <img src="../src/assets/pexels-binyaminmellish-106399.jpg" alt="" />
            </div>
            <div className="texts">
                <h2 className="title">{title}</h2>
                <p className="info">
                    <a href="#" className="author">Salawu Ahmed</a>
                    <time dateTime="">{format(new Date(createdAt), "yyyy-MM-dd")}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}

export default Post
