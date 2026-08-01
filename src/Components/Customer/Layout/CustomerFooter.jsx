import { Link } from "react-router-dom";

export default function CustomerFooter() {
    return (
        <>




            {/* Footer Start */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div
                        className="pb-4 mb-4"
                        style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
                    >
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <Link to="#">
                                    <h1 className="text-primary mb-0">Aashirwad Enterprises</h1>
                                    <p className="text-secondary mb-0">Exclsuive Stationary</p>
                                </Link>
                            </div>

                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    <Link
                                        className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                                        to="https://x.com/"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link
                                        className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                                        to="https://www.facebook.com/"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link
                                        className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                                        to="https://www.youtube.com/"
                                    >
                                        <i className="fab fa-youtube" />
                                    </Link>
                                    <Link
                                        className="btn btn-outline-secondary btn-md-square rounded-circle"
                                        to="https://www.whatsapp.com/"
                                    >
                                        <i className="bi bi-whatsapp"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Why People Like us!</h4>
                                <p className="mb-4">
                                    📚 Wide Range of Stationery

                                   <br></br>
                                    💰 Affordable Prices

                        
  <br></br>     
                                    ⭐ Premium Quality

<br></br>
                                  
                                    🔒 Safe & Secure Shopping

                              
<br></br>
                                    😊 Customer Satisfaction

                                    
                                </p>
                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Shop Info</h4>
                                <Link className="btn-link" to="/about">
                                    About Us
                                </Link>
                                <Link className="btn-link" to="/contact">
                                    Contact Us
                                </Link>
                        
                              
                            </div>
                        </div>
                
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Contact</h4>
                                <p>Address: Circular Road kapurthala</p>
                                <p>Email:   aashirwadenterpriseskpt@gmail.com</p>
                                <p>Phone: +91-9855119081</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light">
                                <Link to="#">
                                    <i className="fas fa-copyright text-light me-2" />
                                   Aashirwad Enterprises
                                </Link>
                                , All right reserved.
                            </span>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <Link
                to="#"
                className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
            >
                <i className="fa fa-arrow-up" />
            </Link>
        </>

    )

}