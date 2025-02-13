const students = [
    { "Fname": "Meet", "Lname": "Babar", "Department": "Computer Science", "img": "https://randomuser.me/api/portraits/men/5.jpg" },
    { "Fname": "Vidit", "Lname": "Patel", "Department": "Civil Engineering", "img": "https://randomuser.me/api/portraits/men/6.jpg" },
    { "Fname": "Parth", "Lname": "Xcyzfdbk", "Department": "Ass. Computer Science", "img": "https://randomuser.me/api/portraits/men/7.jpg" },
    { "Fname": "Meet", "Lname": "Patel", "Department": "Ass. Civil Engineering", "img": "https://randomuser.me/api/portraits/men/8.jpg" }
  ];
  
  function Student() {
    return (
      <div className="card-container">
        {students.map((val, index) => (
          <div className="card" key={index}>
            <img src={val.img} alt="Student" className="profile-pic"/>
            <h3>Student {index + 1}</h3>
            <p><strong>First Name:</strong> {val.Fname}</p>
            <p><strong>Last Name:</strong> {val.Lname}</p>
            <p><strong>Department:</strong> {val.Department}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Student;
  