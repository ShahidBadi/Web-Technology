import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Navbar extends Component{
    render(){   
        return(
            <>

            <Link to="/Facultycart" >Faculty Cart</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/FacultyTable" >Faculty Table</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


            <Link to="/Studentcart" >student Cart</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/StudentTable" >Student Table</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <Link to="/Productcart" >product Cart</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/ProductTable" >Product Table</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Outlet></Outlet>





                
            </>
        )
    }
}

export default Navbar;