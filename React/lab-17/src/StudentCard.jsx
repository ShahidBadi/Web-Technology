const stu=[
    {"Fname":"prince","Lname":"sapariya","age":21,"email":"prince1212@gmail.com","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"vidit","Lname":"patel","age":20,"email":"vishu4545@gmail.com","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"parth","Lname":"gay","age":19,"email":"parthgay215@gmail.com","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
]

function Student(){
    return(
        <>
        <h1>Student</h1>
            {stu.map((val)=>{
                return <div class="card" style={{width: "18rem",display:"inline-block"}}>
                <img src={val.img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">{val.Fname}</h5>
                  <p class="card-text">{val.Lname}</p>
                  <p class="card-text">{val.age}</p>
                  <p class="card-text">{val.email}</p>
                </div>
              </div>
            })}
        </>
    )
}
export default Student