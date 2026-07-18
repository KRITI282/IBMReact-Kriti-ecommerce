import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">

                    <li className="breadcrumb-item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                      <li className="breadcrumb-item">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>


                   


                </ol>
        </div>
        {/* Single Page Header End */}
        {/* Contact Start */}
        <div className="container-fluid contact py-5">
          <div className="container py-5">
            <div className="p-5 bg-light rounded">
              <div className="row g-4">
                <div className="col-12">
                  <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
                    <h1 className="text-primary">Get in touch with us for buying exclusive stationary items</h1>
                    <p className="mb-4">
                      Whether you're shopping for school, office, or creative supplies, we're here to help. Contact us for product inquiries, bulk orders or any assistance you need. Our team is committed to providing quality stationery at the best prices.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3406.6163396388906!2d75.38364059999999!3d31.369564799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIyJzEwLjQiTiA3NcKwMjMnMDEuMSJF!5e0!3m2!1sen!2sin!4v1783781675222!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />

                </div>
                <div className="col-lg-0">

                </div>
                <div className="col-lg-5">
                  <div className="d-flex p-4 rounded mb-4 bg-white">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                    <div>
                      <h4>Address</h4>
                      <p className="mb-2">Aashirwad Enterprises, circular road mohabbat nagar kapurthala 144601</p>
                    </div>
                  </div>
                  <div className="d-flex p-4 rounded mb-4 bg-white">
                    <i className="fas fa-envelope fa-2x text-primary me-4" />
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-2">aashirwad@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex p-4 rounded bg-white">
                    <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-2">+91-9855119081</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>

    </>
  )
}