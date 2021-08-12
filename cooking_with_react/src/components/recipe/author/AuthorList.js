import React from 'react'
import Author from './Author'

export default function AuthorList({ authors }) {
    const authorElements = authors.map((author, i) => (
        <Author 
        key={i}
        author={author}/>
    ))
    
    return (
        <div>
            {authorElements}
        </div>
    )
}
