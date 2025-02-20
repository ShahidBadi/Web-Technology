import { useEffect, useState } from "react"

function Calculator(){
    const [input,setInput]=useState("")
    const handleclick=(value)=>{
        setInput(input+value);
    }
    const handleclear=()=>{
        setInput("")
    }

    const handlecalculate=()=>{
        setInput(eval(input))
    }

    return(
    <>
        <div>
            <table>
                <tr>
                    <td colSpan={3}><input type="text" value={input} readOnly></input></td>
                </tr>
                <tr>
                    <td><button onClick={()=>handleclick("1")}>1</button></td>
                    <td><button onClick={()=>handleclick("2")}>2</button></td>
                    <td><button onClick={()=>handleclick("3")}>3</button></td>
                    <td><button onClick={()=>handleclick("+")}>+</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=>handleclick("4")}>4</button></td>
                    <td><button onClick={()=>handleclick("5")}>5</button></td>
                    <td><button onClick={()=>handleclick("6")}>6</button></td>
                    <td><button onClick={()=>handleclick("-")}>-</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=>handleclick("7")}>7</button></td>
                    <td><button onClick={()=>handleclick("8")}>8</button></td>
                    <td><button onClick={()=>handleclick("9")}>9</button></td>
                    <td><button onClick={()=>handleclick("*")}>*</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleclear}>C</button></td>
                    <td><button onClick={()=>handleclick("0")}>0</button></td>
                    <td><button onClick={handlecalculate}>=</button></td>
                    <td><button onClick={()=>handleclick("/")}>/</button></td>
                </tr>
            </table>
        </div>
       </>
    )
}
 export default Calculator