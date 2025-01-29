import React from "react";
import './App.css'
const fac=[{
    name:"nilesh",
    img:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
    experience:"22+years",
    workingsince:"jul-2009"
},
{
    name:"arjun",
    img:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
    experience:"14+years",
    workingsince:"jul-2013"
},
{
    name:"firoz",
    img:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/12---28-04-2023-02-06-51.jpg",
    experience:"20+years",
    workingsince:"Dec-2022"  
}]
function Mapdemo(){
        return(
            <div>
                {fac.map((f)=>{
                    return( 
                    <>
                        <img src={f.img}></img>
                        <h1>{f.name}</h1>
                        <h1>{f.experience}</h1>
                        <h1>{f.workingsince}</h1>
                    </>
                    )
                            
                })}
            </div>
        )
}
export default Mapdemo;