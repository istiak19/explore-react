import { useState } from "react"

export default function Count(){
    const [count,setCount]=useState(0)
    const handleCount=()=>{
        let newCount=count+1
        setCount(newCount)
    }
    return(
        <div>
            <h3>Counter {count}</h3>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}