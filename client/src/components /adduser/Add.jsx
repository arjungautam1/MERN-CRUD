import React, { useState } from "react";
import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Add = () => {
  // Initial state for the user form
  const users = {
    name: "",
    email: "",
    address: "",
  };
  // State to manage user form data
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  // Function to handle input changes and update state
  const inputHandler = (e) => {
    const { name, value } = e.target;
    // Update user state with the new input value
    setUser({ ...user, [name]: value });
  };

  // Function to handle form submission
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        console.log(response.data.message);
        toast.success(response.data.message, { position: "top-left" });
        navigate("/");
      })
      // .catch((error) => console.log(error));
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="addUser">
      {/* Link to navigate back to the home page */}
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>
      {/* Form for adding a new user */}
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        {/* Input field for the user's name */}
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={inputHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        {/* Input field for the user's email */}
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={inputHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        {/* Input field for the user's address */}
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            onChange={inputHandler}
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        {/* Submit button for the form */}
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary mt-4 p-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
