import User2 from "./User2"
import { useEffect, useState } from "react"

export default function User(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return(
        <div>
            <h3>User: {user.length}</h3>
            {
                user.map(use=><User2 use={use}></User2>)
            }
        </div>
    )
}