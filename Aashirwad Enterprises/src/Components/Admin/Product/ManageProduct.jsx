import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import CategoryService from "../../../Services/CategoryService"
import Swal from 'sweetalert2'
import Modal from 'react-modal';
import { toast } from "react-toastify";
import CloudinaryService from "../../../Services/CloudinaryService";
import ProductService from "../../../Services/ProductService";
// About page component
export default function ManageProduct() {

    const modalStyling = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            width: "50%",
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };



    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    let [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [price, setPrice] = useState()
    const [stock, setStock] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        getAllCategories()
        getAllProducts()
    }

    useEffect(() => {
        getAllCategories()
        getAllProducts()
    }, [])

    async function getAllCategories() {
        try {
            setLoading(true)
            let res = await CategoryService.all()
            console.log("Res: ", res)
            setCategories(res)
            setLoading(false)

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }
    async function getAllProducts() {
        try {
            setLoading(true)
            let res = await ProductService.all()
            setProducts(res)
            setLoading(false)

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }



    async function deleteCategory(id) {
        try {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    setLoading(true)
                    let res = await CategoryService.delete(id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    getAllCategories()
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }



    async function submit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            if (image) {

                var imageUrl = await CloudinaryService.upload(image)
            }

            let payload = {
                name: name,
                categoryId: categoryId,
                price: price,
                stock: stock,
                description: description,
                imageUrl: imageUrl
            }

            await ProductService.add(payload)
            setLoading(false)
            toast.success("Product Added Successfully")
            setName("")
            setPrice("")
            setStock("")
            setDescription("")
            closeModal()
            // console.log(res);
        } catch (error) {
            setLoading(false)
            console.log(error);
            toast.error(error)

        }
        finally {
            setLoading(false)
        }
    }


    return (
        // Fragment wrapper
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Manage Products</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/admin">admin</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/category">Category</Link>
                    </li>
                      <li className="breadcrumb-item">
                        <Link to="/product">Product</Link>
                    </li>

                    
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md">
                            <h3>  Products List</h3>
                        </div>
                        <div className="col-md text-end">

                            <button className="btn btn-sm btn-primary text-light" onClick={openModal}>+Add Product</button>


                        </div>
                    </div>
                    <div className="p-5 bg-light rounded">


                        <div className="row g-4">
                            <div className="col-12">

                                {

                                    loading ? <div >
                                        <PacmanLoader
                                            color="#89C407"
                                            loading={loading}
                                            cssOverride={override}
                                            size={40}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div> :
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">image</th>
                                                    <th scope="col">Description</th>
<th scope="col">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products.length > 0 ? (
                                                        products.map((product, index) => {
                                                            return (
                                                                <tr key={product.id}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{product.name}</td>
                                                                    <td> {
                                                                        categories.find((c) => c.id == product.categoryId)?.name
                                                                    }</td>

                                                                    <td>
                                                                        <i className="bi bi-currency-rupee"></i> {product.price}
                                                                    </td>
                                                                    <td>{product.stock}</td>
                                                                    <td>

                                                                        <img src={product.imageUrl} alt="" style={{
                                                                            height: "100px",
                                                                            borderRadius: "50%"
                                                                        }} />
                                                                    </td>
                                                                    <td>{product.description}</td>
                                                                      <td style={{ whiteSpace: "nowrap" }}>{product.action}
        <Link to={`/admin/product/edit/${product.id}`}>
            <button className="btn btn-sm btn-primary me-2">
                Edit
            </button>
        </Link>

        <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteProduct(product.id)}
        >
            Delete
        </button>
    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="6" className="text-center">
                                                                No Products Found
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>



                                }


                            </div>



                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}



            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyling}
            >

                <div className="row">
                    <div className="col-md">
                        <h3>Add New Product</h3>
                    </div>
                    <div className="col-md text-end">
                        <button className="btn btn-lg btn-primary text-light" onClick={closeModal}>
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                </div>
                <hr />

                <form className="" onSubmit={submit}>

                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="w-100 form-control border-0 py-3 mb-4"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}

                            />
                        </div>
                        <div className="col-md-6"></div>
                        <input
                            type="file"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder=""

                            onChange={(e) => {
                                setImage(e.target.files[0])
                            }}
                        />
                    </div>
                    <div className="col-md-6">


                        <select
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Category Id"
                            value={categoryId}
                            onChange={(e) => {
                                setCategoryId(e.target.value)
                            }}

                        >

                            <option selected value={''}>Choose Category</option>
                            {
                                categories.map((c) => (
                                    <option value={c.id}>{c.name}</option>
                                ))
                            }

                        </select>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="number"
                                className="w-100 form-control border-0 py-3 mb-4"
                                placeholder="Enter Price"
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                }}

                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="w-100 form-control border-0 py-3 mb-4"
                                placeholder="Enter Stock"
                                value={stock}
                                onChange={(e) => {
                                    setStock(e.target.value)
                                }}

                            />
                        </div>
                    </div>


                    <textarea
                        className="w-100 form-control border-0 mb-4"
                        rows={5}
                        cols={10}
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}

                    />

                    <div className="row">
                        <div className="col-md">


                            {

                                loading ? <button
                                    className=" btn f border-secondary py-3 bg-white text-primary "
                                    type="button" disabled
                                >
                                    Savinng ..
                                </button> : <button
                                    className=" btn f border-secondary py-3 bg-white text-primary "
                                    type="submit"
                                >
                                    Submit
                                </button>


                            }







                            <button
                                className=" btn mx-2 border-danger py-3 bg-white text-primary "
                                type="button"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>

            </Modal >

        </>


    )
}


