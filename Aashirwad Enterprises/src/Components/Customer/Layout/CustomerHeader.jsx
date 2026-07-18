import { Link, useNavigate } from "react-router-dom";
import authService from "../../../Services/authService";
import { toast } from "react-toastify";

export default function CustomerHeader() {
  const nav = useNavigate()
  const email = authService.getEmail()

  function logout(e) {
    e.preventDefault()
   authService.logout()
    toast.success("Logout Sucessful")
    nav("/login")
  }
  return (
    <>


      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <Link to="#" className="text-white">
                  Aashirwad Enterprises, circular road  kapurthala 144601
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <Link to="#" className="text-white">
                  aashirwadenterpriseskpt@gmail.com
                </Link>
              </small>
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
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link active">
                  About
                </Link>
                <Link to="/category" className="nav-item nav-link">
                  Categories
                </Link>
                <Link to="/product" className="nav-item nav-link">
                  Products
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>

                {
                  email ? <Link to="" className="nav-item nav-link" onClick={logout}>
                    Logout
                  </Link> :
                    (
                      <>

                        <Link to="/login" className="nav-item nav-link">
                          Login
                        </Link>
                        <Link to="/register" className="nav-item nav-link">
                          Register
                        </Link>

                      </>
                    )
                }

                
                 <Link to="/myorders" className="nav-item nav-link">
                  MyOrders
                </Link>
                <Link to="/ViewCart" className="nav-item nav-link">
                  <i className="fa fa-shopping-bag fa-2x" />
                </Link>
                <Link to="/profile" className="nav-item nav-link">
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

