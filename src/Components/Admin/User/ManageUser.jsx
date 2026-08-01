import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase";
import { PacmanLoader } from "react-spinners";

export default function ManageUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        try {

            const snapshot = await getDocs(collection(db, "users"));

            let userArray = [];

            snapshot.forEach((doc) => {

                userArray.push({
                    id: doc.id,
                    ...doc.data()
                });

            });

            setUsers(userArray);
            setLoading(false);

        } catch (error) {

            console.log(error);
            setLoading(false);

        }

    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <PacmanLoader />
            </div>
        );
    }

    return (

        <div className="container mt-5">

            <h2 className="mb-4">Manage Users</h2>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                     
                    </tr>

                </thead>

                <tbody>

                    {
                        users.map((user, index) => (

                            <tr key={user.id}>

                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                              
                                

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}