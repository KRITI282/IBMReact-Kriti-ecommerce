import { Link } from "react-router-dom";

export default function About() {
    return (
        <>

            <div class="container-fluid page-header py-5">
                <h1 class="text-center text-white display-6">Shop</h1>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item">
                        <Link to="/">Home</Link></li>
                    <li class="breadcrumb-item">
                        <Link to="/about">About</Link>
                       </li>
                </ol>
            </div>



            {/* About Start */}
            <div className="container py-5">
                <div className="row align-items-center">

                    {/* Left Image */}
                    <div className="col-lg-6">
                        <img
                            src="public/img/aashirwadEnterprises.png"
                            className="img-fluid rounded shadow"
                            alt="About Aashirwad Enterprises"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6">

                        <h5 className="text-primary">
                            Welcome to Aashirwad Enterprises
                        </h5>

                        <h1 className="display-5 fw-bold mb-4">
                            Your Trusted Stationery Partner Since 1980
                        </h1>

                        <p className="text-secondary fs-5">
                            Aashirwad Enterprises has been providing premium
                            stationery, office supplies, school essentials, and
                            creative art materials for decades. We believe that
                            quality stationery inspires creativity,
                            productivity, and success.
                        </p>

                        <p className="text-secondary">
                            Whether you are a student, teacher, artist,
                            business professional, or organization, we offer a
                            carefully selected range of trusted brands at
                            affordable prices with excellent customer service.
                        </p>

                        <div className="row mt-4">

                            <div className="col-6 mb-3">
                                ✅ Premium Quality Products
                            </div>

                            <div className="col-6 mb-3">
                                🚚 Fast Delivery
                            </div>

                            <div className="col-6 mb-3">
                                💳 Secure Payments
                            </div>

                            <div className="col-6 mb-3">
                                ⭐ Trusted Brands
                            </div>

                            <div className="col-6 mb-3">
                                📚 School & Office Supplies
                            </div>

                            <div className="col-6 mb-3">
                                🎨 Art & Craft Collection
                            </div>

                        </div>

                        <Link
                            to="/product"
                            className="btn btn-primary rounded-pill px-5 py-3 mt-3"
                        >
                            Explore Products
                        </Link>

                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="container-fluid bg-light py-5">
                <div className="container">
                    <div className="row text-center">

                        <div className="col-md-3">
                            <h1 className="text-primary">500+</h1>
                            <h5>Products</h5>
                        </div>

                        <div className="col-md-3">
                            <h1 className="text-primary">50+</h1>
                            <h5>Trusted Brands</h5>
                        </div>

                        <div className="col-md-3">
                            <h1 className="text-primary">10K+</h1>
                            <h5>Happy Customers</h5>
                        </div>

                        <div className="col-md-3">
                            <h1 className="text-primary">40+</h1>
                            <h5>Years of Trust</h5>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container py-5">

                <div className="text-center mb-5">
                    <h2>Our Mission & Vision</h2>
                </div>

                <div className="row">

                    <div className="col-lg-6">
                        <div className="border rounded p-4 shadow-sm h-100">
                            <h3 className="text-primary">🎯 Our Mission</h3>

                            <p>
                                To provide high-quality stationery products
                                that support learning, creativity, and
                                productivity while delivering exceptional
                                customer service.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="border rounded p-4 shadow-sm h-100">
                            <h3 className="text-primary">🌍 Our Vision</h3>

                            <p>
                                To become the most trusted stationery
                                destination by offering premium products,
                                affordable prices, and a seamless shopping
                                experience for every customer.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}