import React, { useEffect, useState } from "react";
import "./user.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8000/api/users");
  //     setUsers(response.data);
  //   };
  //   fetchData();
  // }, []);

  // To handle the error of first while there is no data.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        // console.log("Error fetching data:", error);
        toast.error("Error While Fetching Data");
        // Handle the error, show a message, or take appropriate action
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add User
      </Link>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                {/* To fix the error of key props {user._id} */}
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link
                    to={`/update/` + user._id} // To be done only in update section
                    type="button"
                    className="btn btn-info"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
