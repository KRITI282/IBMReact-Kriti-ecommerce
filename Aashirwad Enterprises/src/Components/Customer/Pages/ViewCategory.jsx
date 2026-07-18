import { Link } from "react-router-dom";

export default function ViewCategory() {

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">About Us</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/category">categories</Link>
                    </li>

                </ol>
            </div>
            <div className="container-fluid py-5">
                <div className="container">

                    {/* Heading */}

                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
                        <h4 className="text-primary">Our Categories</h4>
                        <h1 className="display-5">Browse Stationery Categories</h1>
                        <p>
                            Find everything you need for school, office and creativity.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* Category 1 */}


                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/filesh-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Files & Folders</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/art and craft-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Art & Craft</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/camlin2-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Highlighters</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/office supplies-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Office Supplies</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/pens-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Pens</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/pencils-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Pencil Kits</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/painting colors-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Painting Colors</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="border rounded text-center p-3">

                                <img
                                    src="public/img/category/chart paper-500x500.jpg"
                                    className="img-fluid rounded"
                                    alt=""
                                />

                                <h4 className="mt-3">Chart Papers</h4>

                                <Link
                                    to="/product"
                                    className="btn btn-primary rounded-pill px-4 mt-2"
                                >
                                    View Products
                                </Link>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
}