"use client"
import Product from "./page"

export default function ProductButton(props) {

    console.log(props)
    return(
        <div>
            <button onClick={() => { console.log(props.price) }}>Click Me</button>
          
        </div>
    )
}