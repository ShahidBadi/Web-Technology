const fac=[
    {"Fname":"Gopi","Lname":"sanghani","post":"HOD","salary":50000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"vishal","Lname":"patel","post":"Professor","salary":40000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
    {"Fname":"raj","Lname":"kumar","post":"ass.Professor","salary":30000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"},
]

function Facultytab(){
    return(
        <>
        <h1>Faculty</h1>
        <table className="table table-bordered border border-dark ">
            <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Post</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
            {fac.map((val)=>{
                return( 
                    <tr>
                        
                        <td><img src={val.img} alt="..." /></td>

                        <td>{val.Fname}</td>

                        <td>{val.Lname}</td>

                        <td>{val.post}</td>

                        <td>{val.salary}</td>
                    </tr>
                )})}
                </tbody>
        </table>
        </>
    )
}
export default Facultytab