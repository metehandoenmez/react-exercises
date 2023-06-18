import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay"
import "./App.css"


export default function Counter() {
    const [count, setCount] = useState(0)
    const [isHidden, setIsHidden] = useState(false)
 
    
    
    useEffect(() => {

        console.log("Component mounted.")

        const intervalId = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log("Component unmounted.")
        }
    },[])
    

         const handleHidden = () => {
            setIsHidden(!isHidden)
         }


        return (
            <div>
                {!isHidden ? (
                    <CounterDisplay name="display" count={count} />
                )
                    :
                (
                    <p>The counter is hidden.</p>
                    
                ) }
                <br />
                <button  onClick={handleHidden}>{!isHidden ? "Hide" : "Show"}</button>
            </div>
        );
}
