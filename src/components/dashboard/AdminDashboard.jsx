import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/admin");
            setUsers(response.data);
            console.log(response.data);

            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };


    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:5000/admin/delete-user/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;


    return (
        <div className="container" style={{marginTop: "15vh"}}>
            <h2 className="text-center mb-4">Admin Dashboard</h2>

            {/* {error && <div className="alert alert-danger text-center">{error}</div>} */}

            <div className="card shadow-lg">
                <div className="card-body">
                    <table className="table table-hover table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th className="text-center p-3">Username</th>
                                <th className="text-center p-3">Email</th>
                                <th className="text-center p-3">Created At</th>
                                <th className="text-center p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td className="text-center p-3">{user.username}</td>
                                    <td className="text-center p-3">{user.email}</td>
                                    <td className="text-center p-3">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => deleteUser(user._id)}
                                            className="btn btn-danger btn-sm shadow-sm rounded-pill"
                                        >
                                            <i className="fas fa-trash-alt px-2"></i> Delete user
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
