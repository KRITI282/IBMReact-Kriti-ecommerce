import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import { PacmanLoader } from "react-spinners";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where
} from "firebase/firestore";
import { auth, db } from "../../../Firebase";
import { toast } from "react-toastify";


export default function Product() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };


    // ADD TO CART FUNCTION
    const addToCart = async (product) => {

        try {

            if (!auth.currentUser) {
                toast.error("Please login first");
                return;
            }


            const uid = auth.currentUser.uid;


            const q = query(
                collection(db, "cart"),
                where("userId", "==", uid),
                where("productId", "==", product.id)
            );


            const snapshot = await getDocs(q);


            if (!snapshot.empty) {


                const cartItem = snapshot.docs[0];


                await updateDoc(
                    doc(db, "cart", cartItem.id),
                    {
                        quantity: cartItem.data().quantity + 1
                    }
                );


            } else {


                await addDoc(
                    collection(db, "cart"),
                    {

                        userId: uid,

                        productId: product.id,

                        productName: product.name,

                        price: product.price,

                        image: product.imageUrl,

                        quantity: 1

                    }
                );

            }


            toast.success("Added to cart");


        } catch (error) {

            console.log("Cart Error:", error);
            toast.error("Something went wrong");

        }

    };



    // GET ALL PRODUCTS
    async function getAllProducts() {

        try {

            setLoading(true);

            let res = await ProductService.all();

            console.log("Products:", res);

            setProducts(res);


        } catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    }



    useEffect(() => {

        getAllProducts();

    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>


            {/* Header */}

            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Products
                </h1>


                <ol className="breadcrumb justify-content-center mb-0">

                    <li className="breadcrumb-item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                      <li className="breadcrumb-item">
                        <Link to="/product">
                            Product
                        </Link>
                    </li>


                   


                </ol>

            </div>




            {
                loading ?

                    <div className="mt-5">

                        <PacmanLoader
                            color="#89C407"
                            loading={loading}
                            cssOverride={override}
                            size={40}
                        />

                    </div>


                    :



                    <div className="container-fluid py-5">


                        <div className="container py-5">


                            <h1 className="mb-4">
                                Our Stationery Collection
                            </h1>



                            <div className="row g-4">



                                {/* Sidebar */}

                                <div className="col-lg-3">


                                    <div className="input-group mb-4">

                                        <input
                                            type="search"
                                            className="form-control p-3"
                                            placeholder="Search Product"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />

                                        <span className="input-group-text p-3">

                                            <i className="fa fa-search"></i>

                                        </span>


                                    </div>



                                    <h4>
                                        Categories
                                    </h4>


                                    <ul className="list-unstyled">

                                        <li className="py-2">
                                            Pens
                                        </li>

                                        <li className="py-2">
                                            Notebooks
                                        </li>

                                        <li className="py-2">
                                            Files & Folders
                                        </li>

                                        <li className="py-2">
                                            Office Supplies
                                        </li>

                                        <li className="py-2">
                                            Art & Craft
                                        </li>

                                    </ul>


                                </div>





                                {/* Products */}


                                <div className="col-lg-9">


                                    <div className="row g-4">


                                        {

                                            filteredProducts.length > 0 ?


                                                filteredProducts.map((product) => (


                                                    <div
                                                        className="col-md-6 col-lg-4"
                                                        key={product.id}
                                                    >


                                                        <div className="rounded position-relative fruite-item">


                                                            <div className="fruite-img">

                                                                <img
                                                                    src={product.imageUrl}
                                                                    className="img-fluid w-100 rounded-top"
                                                                    alt={product.name}
                                                                />

                                                            </div>





                                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">


                                                                <h4>
                                                                    {product.name}
                                                                </h4>



                                                                <p>
                                                                    {product.description}
                                                                </p>





                                                                <div className="d-flex justify-content-between align-items-center">


                                                                    <p className="text-dark fs-5 fw-bold mb-0">

                                                                        ₹ {product.price}

                                                                    </p>




                                                                    <button

                                                                        className="btn btn-primary"

                                                                        onClick={() => addToCart(product)}

                                                                    >

                                                                        <i className="fa fa-shopping-bag me-2"></i>

                                                                        Add To Cart


                                                                    </button>



                                                                </div>



                                                            </div>



                                                        </div>


                                                    </div>


                                                ))



                                                :


                                                <h3 className="text-center">
                                                    {search
                                                        ? "No matching products found"
                                                        : "No products"}
                                                </h3>


                                        }



                                    </div>



                                </div>



                            </div>



                        </div>



                    </div>


            }



        </>

    );

}