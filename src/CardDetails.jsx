import React, { useRef, useEffect } from 'react';

export default function CardDetails({initialData}) {
    const modelRef = useRef("")
    const yearRef = useRef("")
    const colorRef = useRef("")

    useEffect(() => {
        if (initialData.model) {
            modelRef.current.value = initialData.model;
          }
          if (initialData.year) {
            yearRef.current.value = initialData.year;
          }
          if (initialData.color) {
            colorRef.current.value = initialData.color;
          }
    }, [initialData])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Your order for ${yearRef.current.value} ${colorRef.current.value} ${modelRef.current.value} has been received. Plese wait for your delivery message. Drive Safe!`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                Model: <input type="text" ref={modelRef} />
                Year: <input type="text" ref={yearRef} />
                Color: <input type="text" ref={colorRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}