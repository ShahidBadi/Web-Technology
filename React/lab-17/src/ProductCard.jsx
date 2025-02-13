const pro=[
    {"name":"Mobile","price":15000,"rating":4.5,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRqz8JPMaGDP8sop4H2F4YonXpCsikCHLOw&s"},
    {"name":"A.C","price":30000,"rating":4,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRqz8JPMaGDP8sop4H2F4YonXpCsikCHLOw&s"},
    {"name":"T.V","price":20000,"rating":5,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRqz8JPMaGDP8sop4H2F4YonXpCsikCHLOw&s"},
]

function Product(){
    return(
        <>
        <h1>Product</h1>
            {pro.map((val)=>{
                return <div class="card" style={{width: "300px",display:"inline-block"}}>
                <img src={val.img} class="card-img-top " alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">{val.name}</h5>
                  <p class="card-text">{val.price}</p>
                  <p class="card-text">{val.rating}</p>
                  
                </div>
              </div>
            })}
        </>
    )
}
export default Product