import React from 'react'

function Text({slides,count}) {
    console.log(slides)
    return (
        <div>
            <h1 data-testid="title">{slides[count].title}</h1>
            <p data-testid="text">{slides[count].text}</p>
        </div>
    )
}

export default Text
