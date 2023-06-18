import React, {useEffect, useState} from "react";


export default function ClickCounter(props) {
    const [count, setCount] = useState(0)
    
    let { onCounterChange } = props;

    useEffect(() => {
        onCounterChange({count})
    }, [count,onCounterChange])

    
    return (
            <div>
                <h3>{count}</h3>
                <button onClick={
                    () => setCount(count => count + 1)
                }>Click to increase the number</button>
            </div>
        );
    }
