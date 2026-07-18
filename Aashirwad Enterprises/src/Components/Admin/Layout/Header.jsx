import { Link, useNavigate } from "react-router-dom";
import authService from "../../../Services/authService";
import { toast } from "react-toastify";

export default function Header()
{
  const nav= useNavigate()
//   function logout(e)
//   {
//     e.preventdefault()
//     authService.logout() ///logout function called
// toast.success("logout succcesfully")
// nav("")
async function logout(e) {
    e.preventDefault();

    try {
        await authService.logout();

        toast.success("Logout successfully");

        nav("/");
    } catch (error) {
        toast.error("Logout failed");
        console.log(error);
    }
}



  
      return(
        <>
        
         <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <Link to="#" className="text-white">
                aashirwad enterprises
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <Link to="#" className="text-white">
                  admin@Example.com
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              <Link to="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </Link>
              <Link to="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </Link>
              <Link to="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="index.html" className="navbar-brand">
              <h1 className="text-primary display-6">Aashirwad Enterprises</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                  <Link to="/admin" className="nav-item nav-link active">
              dashboard
                </Link>
                <Link to="/admin/category" className="nav-item nav-link active">
                category
                </Link>
                  <Link to="/admin/product" className="nav-item nav-link">
                  Product
                </Link>
                <Link to="/admin/order" className="nav-item nav-link">
                orders
                </Link>
               
                  <Link to="/admin/User" className="nav-item nav-link">
                Users
                </Link>
                <Link className="nav-item nav-link" onClick={logout}>
                  Logout
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary" />
                </button>
                <Link to="#" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                  >
                    3
                  </span>
                </Link>
                <Link to="#" className="my-auto">
                  <i className="fas fa-user fa-2x" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
        
        </>
    )
  }
