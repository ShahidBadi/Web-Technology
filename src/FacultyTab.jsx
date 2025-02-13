const faculty = [
    { "Fname": "Dr. Meet", "Lname": "Patel", "Post": "Professor" },
    { "Fname": "Dr. Vidit", "Lname": "Patel", "Post": "Professor" },
    { "Fname": "Dr. Parth", "Lname": "Xcyzfdbk", "Post": "Ass. Professor" },
    { "Fname": "Dr. Meet", "Lname": "Babar", "Post": "Professor" }
  ];
  
  function FacultyTab() {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.Fname}</td>
                <td>{val.Lname}</td>
                <td>{val.Post}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default FacultyTab;
  