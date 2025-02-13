const students = [
    { "Fname": "Meet", "Lname": "Babar", "Department": "Computer Science" },
    { "Fname": "Vidit", "Lname": "Patel", "Department": "Civil Engineering" },
    { "Fname": "Parth", "Lname": "Xcyzfdbk", "Department": "Ass. Computer Science" },
    { "Fname": "Meet", "Lname": "Patel", "Department": "Ass. Civil Engineering" }
  ];
  
  function StudentTab() {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {students.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.Fname}</td>
                <td>{val.Lname}</td>
                <td>{val.Department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default StudentTab;
  