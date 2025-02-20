import { useState } from "react"

function UseState(){
    const [count,setCount]=useState(0)
    const [inputvalue,setInputvalue]=useState()
    let temp = "";
    return(
    <>

       <form>
            <h1 className="flex-2xl font-bold">Counter:{count}</h1>
            <button  className="mt-2 px-4 bg-blue-500 text-white rounded-md"
            onClick={()=>{
                setCount(count+1)
            }}>
                increment
            </button><br /><br />


            <button  className="mt-2 px-4 bg-blue-500 text-white rounded-md"
            onClick={()=>{
                if(count==0)
                    {
                        setCount(0)
                    }
                    else{
                        setCount(count-1)
                    }
            }}>
                Decrement
            </button><br /><br />


            <button  className="mt-2 px-4 bg-blue-500 text-white rounded-md"
            onClick={()=>{
                setCount(count+5)
            }}>
                Increment+5
            </button><br /><br />


            <button  className="mt-2 px-4 bg-blue-500 text-white rounded-md"
            onClick={()=>{
                if(count<5)
                {
                    setCount(count)
                }
                else{
                    setCount(count-5)
                }
                
            }}>
                Decrement-5
            </button><br /><br />


            <button  className="mt-2 px-4 bg-blue-500 text-white rounded-md"
            onClick={()=>{
                setCount(0)
            }}>
                Reset
            </button><br /><br />
       </form>

       <input type="text" onChange={(e)=>{
        temp = e.target.value;
       }}/>
       <button onClick={()=>{
        setInputvalue(temp)
       }}>submit</button>
       <button type="sumit" onClick={(e)=>{
        setInputvalue('')
       }}>Reset</button>
       <h1>{inputvalue}</h1>
       </>
    )
}
 export default UseState