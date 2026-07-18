import { useEffect, useState } from "react"
import ProductService from "../../../services/ProductService"
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

// About page component
function EditProduct() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    const params = useParams()

    const [categoryId, setcategoryId] = useState("")
    const [categoryName, setcategoryName] = useState("")
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [stock, setstock] = useState("")
    const [image, setimage] = useState("")

    const nav = useNavigate()

    useEffect(() => {
        getProductDetails()
    }, [])


    async function getProductDetails() {
        try {
            setLoading(true)
            let res = await ProductService.single(params.id)
            setcategoryId(res.categoryId)
            setcategoryName(res.categoryName)
            setbrandId(res.brandId)
            setbrandName(res.brandName)
            setname(res.name)
            setdescription(res.description)
            setprice(res.price)
            setstock(res.stock)
            setimage(res.image)
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
            let payload = {
                categoryId: categoryId,

                categoryName: categoryName,
                brandId: brandId,
                brandName: brandName,
                name: name,
                description: description,
                price: price,
                stock: stock,
                image: image


            }
            await ProductService.update(params.id, payload)
            setLoading(false)
            toast.success("Product Updated Successfully")
            nav("/admin/Product");
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
                <h1 className="text-center text-white display-6">Edit Product Details</h1>
               
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
                                                value={CategoryName}
                                                onChange={(e) => {
                                                    setCategoryName(e.target.value)
                                                }}
                                            />  <h4>brand ID</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter Brand ID"
                                                value={name}
                                                onChange={(e) => {
                                                    setBrandId(e.target.value)
                                                }}
                                            />  <h4>Brand Name</h4>
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="enter Category ID"
                                                value={brandName}
                                                onChange={(e) => {
                                                    setBrandName(e.target.value)
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
                                                    setImage(e.target.files[0])
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
export default EditProduct
