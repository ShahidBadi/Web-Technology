import { useEffect, useState } from "react"

function UseEffect(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("hello world")
    },[count])
    return(
    <>
        <div>
            <h1>{count}</h1>
            <button onClick={
               ()=>setCount(count+1)
            }>Increment</button>
        </div>
       </>
    )
}
 export default UseEffect