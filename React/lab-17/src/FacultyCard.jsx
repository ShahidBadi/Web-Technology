const fac=[
    {"Fname":"Gopi","Lname":"sanghani","post":"HOD","salary":50000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"vishal","Lname":"patel","post":"Professor","salary":40000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"raj","Lname":"kumar","post":"ass.Professor","salary":30000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
]

function Faculty(){
    return(
        <>
        <h1>Faculty</h1>
            {fac.map((val)=>{
                return <div class="card" style={{width: "18rem",display:"inline-block"}}>
                <img src={val.img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">{val.Fname}</h5>
                  <p class="card-text">{val.Lname}</p>
                  <p class="card-text">{val.post}</p>
                  <p class="card-text">{val.salary}</p>
                </div>
              </div>
            })}
        </>
    )
}
export default Faculty