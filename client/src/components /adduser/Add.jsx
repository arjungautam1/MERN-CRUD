import React from "react";
import "./add.css";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>
      <h3>Add New User</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="button" className="btn btn-primary mt-4 p-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
