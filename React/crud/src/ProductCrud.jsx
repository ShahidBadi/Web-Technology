// import { useState } from "react"

// const productcrud=()=>{
//     const [product,setproduct]=useState([
//         {id:1,name:"product A",price:1000},
//         {id:2,name:"product B",price:2000},
//         {id:3,name:"product C",price:3000},
//     ]);
//     const deleteproduct=(id)=>{
//         setproduct(product.filter((product)=>{
//             product.id !=id
//         }))
//     }
    

//     return(
//         <div>
//            <table>
//             <tr>
//                 <td>ID</td>
//                 <td>product</td>
//                 <td>price</td>
//             </tr>
//             <tr>
//                 {product.map((product)=>{
//                 })}
//             </tr>
//            </table>
//         </div>
//     )
// }

import { useState } from "react";


function Productcrud(){

    var product=[
        {
            id: 1,
            name: "Product1",
            category: "Electronics",
            price: 12000,
            rating: 3.4,   
        },
        {
            id: 2,
            name: "Product2",
            category: "Fashion",
            price: 14000,
            rating: 4,   
        },
        {
            id: 3,
            name: "Product3",
            category: "Sports",
            price: 10000,
            rating: 4,   
        }
    ]
    
    const [products,setProduct]=useState(product);

    return(
        <>
        
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">CRUD</th>
                </tr>
              </thead>
              <tbody>
                {products.map((val)=>{
                  return (
                      <tr>
                          <td scope="col">{val.id}</td>
                          <td scope="col">{val.name}</td>
                          <td scope="col">{val.category}</td>
                          <td scope="col">{val.price}</td>
                          <td scope="col">{val.rating}</td>
                          <td scope="col"><button onClick={()=>{
                            setProduct(
                                products.filter(a=>a.id!=val.id)
                            )
                          }}>Delete</button></td>
                      </tr>
                  )
                })}
              </tbody>
            </table>

        </>
    )
}

export default Productcrud;