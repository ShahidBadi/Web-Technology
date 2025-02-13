const pro=[
    {"name":"Mobile","price":15000,"rating":4.5,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRqz8JPMaGDP8sop4H2F4YonXpCsikCHLOw&s"},
    {"name":"A.C","price":30000,"rating":4,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRqz8JPMaGDP8sop4H2F4YonXpCsikCHLOw&s"},
    {"name":"T.V","price":20000,"rating":5,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRqz8JPMaGDP8sop4H2F4YonXpCsikCHLOw&s"},
]

function Producttab(){
    return(
        <>
        <h1>Product</h1>
        <table className="table table-bordered border border-dark ">
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {pro.map((val)=>{
                return( 
                    <tr>
                        
                        <td><img src={val.img} alt="..." /></td>

                        <td>{val.name}</td>

                        <td>{val.price}</td>

                        <td>{val.rating}</td>

                    </tr>
                )})}
                </tbody>
        </table>
        </>
    )
}
export default Producttab