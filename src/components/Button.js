import React,{useState} from 'react'

function Button({slides ,count, setCount}) {
    const increaseCount=()=>{
        setCount(count+1)
    }
  
    const restart=()=>{
        setCount(0)
    }
  
    const decreaseCount=()=>{
        setCount(count-1)
    }

    return (
        <div>
            <button disabled={count==0} onClick={decreaseCount} data-testid="button-Prev" >Prev</button>
            <button disabled={count==0} onClick={restart} data-testid="button-restart" >Restart</button>
            <button disabled={count==slides.length-1} onClick={increaseCount} data-testid="button-Next" >Next</button>
        </div>
    )
}

export default Button
