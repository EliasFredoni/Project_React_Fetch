import React from 'react'

function SchabloneOne(props) {
    return (
        <div>
            <img src={props.urlToImage} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>{props.author}</h2>
            <button>BUTTON</button>
        </div>
    )
}

export default SchabloneOne;
