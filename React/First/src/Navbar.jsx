import { Link, Outlet } from "react-router-dom";

function Navbar(){
 
        return(
            <>



            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Facultycart">Faculty Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/FacultyTable">Faculty Table</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Studentcart">student Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/StudentTable">student Table</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Productcart">Product Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ProductTable">Product Table</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet></Outlet>





                
            </>
        )
    }


export default Navbar;