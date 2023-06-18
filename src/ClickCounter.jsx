import React, {useState} from "react";


export default function ClickCounter() {
    const [count, setCount] = useState(0)
    

    
    return (
            <div>
                <h3>{count}</h3>
                <button onClick={
                    () => setCount(count => count + 1)
                }>Click to increase the number</button>
            </div>
        );
    }
