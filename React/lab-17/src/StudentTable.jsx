const stu=[
    {"Fname":"prince","Lname":"sapariya","age":21,"email":"prince1212@gmail.com","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"vidit","Lname":"patel","age":20,"email":"vishu4545@gmail.com","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"parth","Lname":"gay","age":19,"email":"parthgay215@gmail.com","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
]

function Studenttab(){
    return(
        <>
        <h1>Student</h1>
        <table className="table table-bordered border border-dark ">
            <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {stu.map((val)=>{
                return( 
                    <tr>
                        
                        <td style={{width:"300px"}}><img src={val.img} style={{width:"100%"}} alt="..." /></td>

                        <td>{val.Fname}</td>

                        <td>{val.Lname}</td>

                        <td>{val.age}</td>

                        <td>{val.email}</td>
                    </tr>
                )})}
                </tbody>
        </table>
        </>
    )
}
export default Studenttab