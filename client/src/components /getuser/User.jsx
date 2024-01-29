import React, { useEffect, useState } from "react";
import "./user.css";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    };
    fetchData();
  }, []);

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
                  <Link to="/add" type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </Link>
                  <Link to={"/update"} type="button" className="btn btn-info">
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
