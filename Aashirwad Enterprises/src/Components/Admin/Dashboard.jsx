import { Link } from "react-router-dom";


export default function Dashboard() {
    return (
        <>
        <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">About Us</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                     <li className="breadcrumb-item">
                        <Link to="/admin">admin</Link>
                    </li>
                    
                </ol>
            </div>

            <div className="container-fluid pt-4 px-4">

                {/* Welcome */}
                <div className="bg-light rounded p-5 shadow-sm mb-4">
                    <h2 className="text-success">Welcome Admin 👋</h2>
                    <p className="mb-0">
                        Manage your stationery shop from here.
                    </p>
                </div>

                {/* Dashboard Cards */}
                <div className="row g-4">

                    <div className="col-md-3">
                        <div className="bg-light rounded p-4 text-center shadow-sm">
                            <i className="fa fa-box fa-3x text-success mb-3"></i>
                            <h5>Manage Products</h5>
                            <Link to="/admin/product">Products</Link>
                            
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="bg-light rounded p-4 text-center shadow-sm">
                            <i className="fa fa-list fa-3x text-warning mb-3"></i>
                            <h5>Mange Categories</h5>
                              <Link to="/admin/category">Categories</Link>
                           
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="bg-light rounded p-4 text-center shadow-sm">
                            <i className="fa fa-users fa-3x text-primary mb-3"></i>
                            <h5>View Users</h5>
                            <Link to="/admin/user">List of all users</Link>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="bg-light rounded p-4 text-center shadow-sm">
                            <i className="fa fa-shopping-cart fa-3x text-danger mb-3"></i>
                            <h5>Orders</h5>
                            <Link to="/admin/order">View  all orders</Link>
                           
                        </div>
                    </div>

                </div>

                
            </div>
        </>
    );
}
    
  