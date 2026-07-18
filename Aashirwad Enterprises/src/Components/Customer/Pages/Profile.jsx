import { useEffect, useState } from "react";
import AuthService from "../../../Services/AuthService";

export default function Profile() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        gender: "",
        dob: ""
    });

    useEffect(() => {
        console.log(AuthService);
        const currentUser = AuthService.getData();

        if (currentUser) {
            setUser({
                ...user,
                name: currentUser.name || "",
                email: currentUser.email || "",
                phone: currentUser.phone || "",
                address: currentUser.address || "",
                city: currentUser.city || "",
                state: currentUser.state || "",
                pincode: currentUser.pincode || "",
                gender: currentUser.gender || "",
                dob: currentUser.dob || ""
            });
        }

    }, []);

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    function updateProfile(e) {
        e.preventDefault();

        // Firebase update code will be added later

        alert("Profile Updated Successfully");
    }

    return (
        <>
            {/* Page Header */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    My Profile
                </h1>
            </div>

            {/* Profile */}
            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="bg-light rounded p-5 shadow">

                            <div className="text-center mb-4">

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    alt="Profile"
                                    width="120"
                                    className="rounded-circle mb-3"
                                />

                                <h3>{user.name}</h3>

                            </div>

                            <form onSubmit={updateProfile}>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label>Name</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label>Email</label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            value={user.email}
                                            readOnly
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label>Phone</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label>Gender</label>

                                        <select
                                            className="form-control"
                                            name="gender"
                                            value={user.gender}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>

                                    </div>

                                    <div className="col-md-12 mb-3">

                                        <label>Address</label>

                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            name="address"
                                            value={user.address}
                                            onChange={handleChange}
                                        ></textarea>

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label>City</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={user.city}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label>State</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="state"
                                            value={user.state}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label>Pincode</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pincode"
                                            value={user.pincode}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <label>Date of Birth</label>

                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            value={user.dob}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>

                                <button
                                    className="btn btn-primary rounded-pill px-5"
                                    type="submit"
                                >
                                    Update Profile
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}