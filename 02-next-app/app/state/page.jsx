const { useState } = require("react")

export default function state() {
    const [count, setCount] = useState(0);
    return (

        <>
            <div>
                <h2>{count}</h2>
                <button onClick={()=>setCount(count_1)}>Click Me</button>
            </div>
            </>

    )
}