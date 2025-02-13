const array=[1,2,3,4,5]

function Map(){
    return (
        <>
            {array.map((val,index)=>{
                return <h1>{index+1}-{val**2}</h1>
            })}
        </>
    )
}

export default Map;