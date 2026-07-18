import { useState } from "react"
import ProductService from "../../../services/ProductService"
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// About page component
function AddProduct() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);

     const [categoryId, setcategoryId] = useState("")
    const [categoryName, setcategoryName] = useState("")
  
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [stock, setstock] = useState("")
    const [image, setimage] = useState("")

    const nav = useNavigate()

    async function submit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            let payload = {
                categoryId: categoryId,
                CategoryName:CategoryName,
                
                 name:name,
                   description:  description,
                   price:price,
                   stock:stock,
                   imageUrl:imageUrl
            }
            awaitProductService.add(payload)
            setLoading(false)
            toast.success("Product Added Successfully")
            nav("/admin/Product")
            setName("")
            setImage("")
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
                <h1 className="text-center text-white display-6">Add NewProduct</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Contact</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Contact Start */}



            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-lg-6 offset-3">
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
                                        <form onSubmit={submit} className="">
                                            <h4>category ID</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter Category ID"
                                                value={name}
                                                onChange={(e) => {
                                                    setCategoryId(e.target.value)
                                                }}
                                            />
                                              <h4>category name</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter Category name"
                                                value={categoryName}
                                                onChange={(e) => {
                                                    setcategoryName(e.target.value)
                                                }}
                                            /> 
                                           
                                            <h4>name</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter name"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />  <h4>description</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter description"
                                                value={description}
                                                onChange={(e) => {
                                                    setDescription(e.target.value)
                                                }}
                                            />  <h4>Stock</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter stock"
                                                value={stock}
                                                onChange={(e) => {
                                                    setStock(e.target.value)
                                                }}
                                            />  

                                            <input
                                                type="file"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder=""

                                                onChange={(e) => {
                                                    setimage(e.target.files[0])
                                                }}
                                            />
                                            <button
                                                className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                                                type="submit">
                                                Submit
                                            </button>
                                        </form>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>


    )
}

// Export for use in other files
export default AddProduct
