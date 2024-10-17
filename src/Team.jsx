import { useState } from "react"
const styleBody={
    margin:'20px',
    padding:'15px',
    border:'2px solid red'
}


export default function Team(){
    const [count,setCount]=useState(0)
    const handleUpdate=()=>{
        let newUpdate=count+1
        setCount(newUpdate)
    }

    const handleReduce=()=>{
        let newCount=count-1 
        setCount(newCount)
    }
    return(
        <div style={styleBody}>
            <h4>Team Update: {count}</h4>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleReduce}>Add Reduce</button>
        </div>
    )
}