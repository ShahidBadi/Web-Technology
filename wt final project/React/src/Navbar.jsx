import { Link } from "react-router-dom";
import './App.css';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
              <div className="d-flex align-items-center my-3 my-sm-0">
                <a href="/">
                  <img src={"/images/logo.svg"} alt="logo" className="img-fluid" />
                </a>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#menu"></use></svg>
              </button>
            </div>

            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
              <div className="search-bar row bg-light p-2 rounded-4">
                <div className="col-md-4 d-none d-md-block">
                  <select className="form-select border-0 bg-transparent">
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                  </select>
                </div>
                <div className="col-11 col-md-7">
                  <form id="search-form" className="text-center" action="/" method="post">
                    <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                  </form>
                </div>
                <div className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-left mb-0 fw-bold text-uppercase text-dark">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link active" to="/cart">Cart 🛒</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/orders">Orders</Link>
                </li>
                {isLoggedIn ? (
                  <li className="nav-item">
                    <button className="nav-link active" onClick={onLogout}>Logout</button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="#" className="p-2 mx-1">
                    <svg width="24" height="24"><use xlinkHref="#user"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 mx-1">
                    <svg width="24" height="24"><use xlinkHref="#wishlist"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                    <svg width="24" height="24"><use xlinkHref="#shopping-bag"></use></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;