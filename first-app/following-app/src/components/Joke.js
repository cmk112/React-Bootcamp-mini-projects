import React from 'react'

function Joke(props) {

    return (
            <div className="container">
                <h3 style={{display: !props.joke.question && "none"}} className="question">Question: {props.joke.question}</h3>
                <h3 className="answer">Answer: {props.joke.answer}</h3>
            </div>

    )
}

export default Joke