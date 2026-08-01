import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>



      {/* Hero Start */}
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">Trusted Stationery Seller Since 1980</h4>
              <h1 className="mb-5 display-3 text-primary">
                Exclusive stationery items are available here
              </h1>

            </div>
            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <img
                      src="public/img/Homecarousel/colors.jpg"
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item rounded">
                    <img
                      src="public/img/Homecarousel/pens.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Second slide"
                    />

                  </div>
                  <div className="carousel-item rounded">
                    <img
                      src="public/img/Homecarousel/notebook.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Second slide"
                    />

                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      <p
        className="mb-4 mx-auto text-center"
        style={{
          fontSize: "22px",
          color: "#f39c12",
          lineHeight: "1.8",
          maxWidth: "900px",
        }}
      >
        ✏️ Premium Stationery • 📚 School Supplies • 🖊️ Office Essentials • 🎨 Art &
        Craft Materials
        <br />
        Everything you need to study, work, create, and stay organized—all under one
        roof.
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/product" className="btn btn-primary rounded-pill px-5 py-3">
          Shop Now
        </Link>

        <Link to="/category" className="btn btn-outline-success rounded-pill px-5 py-3">
          View Categories
        </Link>
      </div>
      {/* Trusted Brands Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>

            <h1 className="display-6">Most selling Brands</h1>
            <p className="text-muted">
              We bring you products from India's most trusted stationery brands.
            </p>
          </div>

          <div className="row g-4 justify-content-center">

            <div className="col-lg-2 col-md-3 col-6">
              <div className="border rounded text-center p-4 bg-white shadow-sm">
                <img
                  src="public/img/TRUSTED/classmate.webp"
                  className="img-fluid mb-3"
                  style={{ height: "70px", objectFit: "contain" }}
                  alt="Classmate"
                />
                <h6>Classmate</h6>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="border rounded text-center p-4 bg-white shadow-sm">
                <img
                  src="public/img/TRUSTED/camlin2.jpg"
                  className="img-fluid mb-3"
                  style={{ height: "70px", objectFit: "contain" }}
                  alt="Camlin"
                />
                <h6>Camlin</h6>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="border rounded text-center p-4 bg-white shadow-sm">
                <img
                  src="public/img/TRUSTED/faber.png"
                  className="img-fluid mb-3"
                  style={{ height: "70px", objectFit: "contain" }}
                  alt="Faber-Castell"
                />
                <h6>Faber-Castell</h6>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="border rounded text-center p-4 bg-white shadow-sm">
                <img
                  src="public/img/TRUSTED/cello.jpg"
                  className="img-fluid mb-3"
                  style={{ height: "70px", objectFit: "contain" }}
                  alt="Cello"
                />
                <h6>Cello</h6>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="border rounded text-center p-4 bg-white shadow-sm">
                <img
                  src="public/img/TRUSTED/doms.jpg"
                  className="img-fluid mb-3"
                  style={{ height: "70px", objectFit: "contain" }}
                  alt="DOMS"
                />
                <h6>DOMS</h6>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="border rounded text-center p-4 bg-white shadow-sm">
                <img
                  src="public/img/TRUSTED/flair.jpg"
                  className="img-fluid mb-3"
                  style={{ height: "70px", objectFit: "contain" }}
                  alt="flair"
                />
                <h6>Flair</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Trusted Brands End */}
      {/* Featurs Section Start */}
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div
                  className="bg-secondary d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%"
                  }}
                >
                  <i className="fas fa-shipping-fast text-primary fs-3"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over 100Rs</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div
                  className="bg-secondary d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%"
                  }}
                >
                    <i className="fas fa-user-shield text-white fa-2x"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div
                  className="bg-secondary d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%"
                  }}
                >
                     <i className="fas fa-undo-alt text-white fa-2x"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>30 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                 <div
                  className="bg-secondary d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%"
                  }}
                >
                  <i className="fas fa-headset text-white fa-2x"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featurs Section End */}





    </>

  )

}

