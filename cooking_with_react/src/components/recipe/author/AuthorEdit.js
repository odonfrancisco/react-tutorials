import React from 'react'

export default function AuthorEdit(props) {
    const {
        index,
        author,
        handleAuthorChange,
        handleAuthorDelete
    } = props;

    // function handleChange(input) {
    //     handleAuthorChange(key, )
    // }
    
    return (
        <div className="recipe-edit__ingredient-grid">
            <input 
                className="recipe-edit__input"
                value={author}
                onChange={e => handleAuthorChange(index, e.target.value)}
            />
            <button
                className="btn btn--danger"
                onClick={() => handleAuthorDelete(index)}
            >
                &times;
            </button>
        </div>
    )
}
