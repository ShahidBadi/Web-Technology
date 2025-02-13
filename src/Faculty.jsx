const faculty = [
    { "Fname": "Dr. Meet", "Lname": "Patel", "Post": "Professor", "img": "https://randomuser.me/api/portraits/men/1.jpg" },
    { "Fname": "Dr. Vidit", "Lname": "Patel", "Post": "Professor", "img": "https://randomuser.me/api/portraits/men/2.jpg" },
    { "Fname": "Dr. Parth", "Lname": "Xcyzfdbk", "Post": "Ass. Professor", "img": "https://randomuser.me/api/portraits/men/3.jpg" },
    { "Fname": "Dr. Meet", "Lname": "Babar", "Post": "Professor", "img": "https://randomuser.me/api/portraits/men/4.jpg" }
  ];
  
  function Faculty() {
    return (
      <div className="card-container">
        {faculty.map((val, index) => (
          <div className="card" key={index}>
            <img src={val.img} alt="Faculty" className="profile-pic"/>
            <h3>Faculty {index + 1}</h3>
            <p><strong>First Name:</strong> {val.Fname}</p>
            <p><strong>Last Name:</strong> {val.Lname}</p>
            <p><strong>Post:</strong> {val.Post}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Faculty;
  