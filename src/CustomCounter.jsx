import React, {useState, useCallback} from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count => count + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount(count => count - 1)
    }, [])

    const reset = useCallback(() => {
        setCount(0)
    },[])
    
    return { count, increment, decrement, reset}

}

export default function CustomCounter() {

    const { count, increment, decrement, reset} = useCounter(0)

    return (
        <div>
            <h1><u>Counter</u></h1>
            <button onClick={decrement}>-</button>
            <span><b style={{fontSize:"48px",padding:"24px"}}>{count}</b> </span>
            <button onClick={increment}>+</button> 
            <br /> <br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}