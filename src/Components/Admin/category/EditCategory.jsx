import { useEffect, useState } from "react"
import CategoryService from "../../../Services/CategoryService"
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

// About page component
function EditCategory() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    const params = useParams()

    const [name, setName] = useState("")
    const [image, setimage] = useState("")
     const [description, setdescription] = useState("")
    const nav = useNavigate()

    useEffect(() => {
        getCategoryDetails()
    }, [])


    async function getCategoryDetails() {
        try {
            setLoading(true)
            let res = await CategoryService.single(params.id)
            setName(res.name)
            setimage(res.image)
              setdescription(res.description)
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
                name: name,
                image: image
            }
            await CategoryService.update(params.id, payload)
            setLoading(false)
            toast.success("Category Updated Successfully")
            nav("/admin/category");
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
                <h1 className="text-center text-white display-6">Edit Category Details</h1>
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
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="Enter Name"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />
                                            <input
                                                className="w-100 form-control border-0 mb-4"
                                                rows={5}
                                                cols={10}
                                                type="file"
                                                placeholder=""
                                                onChange={(e) => {
                                                    setimage(e.target.files[0]
                                                    )
                                                }}
                                            />
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                placeholder="Enter Description"
                                                value={description}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />
                                            <button
                                                className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                                                type="submit"
                                            >
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
export default EditCategory
