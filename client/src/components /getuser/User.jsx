import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="userTable">
      <Link to="/add" type="button" class="btn btn-primary">
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
          <tr>
            <td>1.</td>
            <td>John Doe</td>
            <td>john@gmail.com</td>
            <td>Canada</td>
            <td className="actionButtons">
              <Link to="/add" type="button" class="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </Link>
              <Link to={"/edit"} type="button" className="btn btn-info">
                <i class="fa-solid fa-pen-to-square"></i>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
